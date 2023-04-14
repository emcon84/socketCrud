
import app from './app'
import {Server as WebSocketServer} from 'socket.io'    
import http from 'http'
import sockets from './sockets'

import {connectDB} from './db'

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
console.log('Server is running');

const io = new WebSocketServer(httpServer);
sockets(io);
