import { httpServer } from './http';
import './websocket/client';

httpServer.listen(3333, () => console.log('Server is running on port 3333'));
