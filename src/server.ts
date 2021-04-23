import { httpServer } from './http';
import './websocket/client';
import './websocket/admin';

httpServer.listen(3333, () => console.log('Server is running on port 3333'));
