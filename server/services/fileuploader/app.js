import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import path from 'path';
import { fileURLToPath } from 'url';
const ServerPort = process.env.SERVER_PORT ?? 5003;
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const app = express();
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './static')))
app.use(cors())
app.use(fileUpload({}))

const start = async () => {
    try {
        app.listen(ServerPort,'0.0.0.0', () => console.log(`Server started on port ${ServerPort}`))
    } catch (e) {
        console.log(e)
    }
}

start()
