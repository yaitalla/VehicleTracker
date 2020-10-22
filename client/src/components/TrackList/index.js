import React, { useContext, useState } from 'react';
import SocketContext from '../../sockets/context';
import { Wrap, Line, Info } from './style';
import Modal from '../Modal';
import axios from 'axios';

const StyledLine = ({data, setInfo, open}) => {
    
    const getInfo = (id) => {
        axios.get('http://localhost:4000/tasks/'+id).then((res) => {
            setInfo(res.data.data)
            open(true)
        });
    }
    return (
        <Line onClick={() => getInfo(data[0])}>
            <Info>id: {data[0]}</Info>
            <Info>lat: {data[1]}</Info>
            <Info>lng: {data[2]}</Info>
        </Line>
    )
}

const TrackList = () => {
    const { locations } = useContext(SocketContext);
    const [openModal, setOpenModal] = useState(false)
    const [infoVehicle, setInfoVehicle] = useState([])
    return (
        <Wrap>
        {
            locations ?
            locations.map((vehicle, i) => {
                return(<StyledLine 
                            key={i}
                            data={vehicle}
                            setInfo={setInfoVehicle}
                            open={setOpenModal} 
                        />
                )
            }) : null
        }
        {
            openModal ? <Modal close={() => setOpenModal(false)} data={infoVehicle} /> : null
        }
    </Wrap>
    )
}

export default TrackList