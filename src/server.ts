import * as dotenv from 'dotenv';
import { app } from './app';

dotenv.config();
const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log(`SERVER UP`);
});
