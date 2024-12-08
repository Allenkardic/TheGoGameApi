import dotenv from 'dotenv';
dotenv.config();
import app from '../../app';
import { Logger } from '../../utils/Logger';

import mongoose from 'mongoose';



(async () => {
  mongoose.connect(`${process.env.MONGO_URI}`, { autoCreate: true }).then(async () => {
    Logger.Info('Connected! mongooose!');

    // Start express server
    app.listen(process.env.PORT || 3000, () => {
      const port = app.get('port');

      Logger.Info(`To-do Service Started at http://localhost:${port}`);
      Logger.Info('Press CTRL+C to stop\n');
    });


  }).catch(error => Logger.Error('MongoDb connection failed : ' + error));
})();
