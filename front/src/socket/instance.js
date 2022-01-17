import io from 'socket.io-client';

const socketClient = io(`${process.env.REACT_APP_SOCKET}`);

export default socketClient;