const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const app = new Koa();
const router = new Router();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const fakeTracking = require('./tracking');
const { VEHICLES_IDS } = require('./misc');
const tasks = require('./gpx/tasks.json');

router.get(`/tasks/:vehicleId`, ctx => {
    const { params: { vehicleId } } = ctx;
    if(!VEHICLES_IDS.includes(vehicleId)) {
        ctx.status = 404;
        ctx.body = { error: { code: "vehicule_not_found", status: 404 } };
        return;
    }
    ctx.body = { data: tasks[vehicleId] };
})
// io.on("connection", () => {
//     // bypass linter
// })
fakeTracking.startEngine(io);
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
server.listen(3000);