import io from "socket.io-client";
const SOCKET_API_URL = "http://localhost:4000";
const socket = io(SOCKET_API_URL);

export const dataParser = (vehiclesData) =>
  Object.entries(vehiclesData).map(
    ([key, { id, position: { lat, lon } } = { position: {} }]) => [id, lat, lon]
  );

 const socketEvents = ( setValue) => {
    socket.on('updateLocation', (value) => {
        const locations = dataParser(value)
        setValue((state) => {
            return {...state, locations}
        })
  });
};

export const initSockets = ( {setValue} ) => {
    socketEvents( setValue );
};