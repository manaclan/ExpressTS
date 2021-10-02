// import Joi from 'joi';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const env = process.env.NODE_ENV || "local";
console.log("Node-TypeJs status:", env);

/*
8888888b.  8888888888 888     888 8888888888 888      .d88888b.  8888888b.  888b     d888 8888888888 888b    888 88888888888 
888  "Y88b 888        888     888 888        888     d88P" "Y88b 888   Y88b 8888b   d8888 888        8888b   888     888     
888    888 888        888     888 888        888     888     888 888    888 88888b.d88888 888        88888b  888     888     
888    888 8888888    Y88b   d88P 8888888    888     888     888 888   d88P 888Y88888P888 8888888    888Y88b 888     888     
888    888 888         Y88b d88P  888        888     888     888 8888888P"  888 Y888P 888 888        888 Y88b888     888     
888    888 888          Y88o88P   888        888     888     888 888        888  Y8P  888 888        888  Y88888     888     
888  .d88P 888           Y888P    888        888     Y88b. .d88P 888        888   "   888 888        888   Y8888     888     
8888888P"  8888888888     Y8P     8888888888 88888888 "Y88888P"  888        888       888 8888888888 888    Y888     888     
*/
const development = {
  env: env,
  app: {
      port: parseInt(process.env.DEV_APP_PORT || "25000"),
  },
  db: {
      host: process.env.DEV_DB_HOST,
  },
};
/*
8888888b.  8888888888 8888888b.  888      .d88888b. Y88b   d88P 888b     d888 8888888888 888b    888 88888888888 
888  "Y88b 888        888   Y88b 888     d88P" "Y88b Y88b d88P  8888b   d8888 888        8888b   888     888     
888    888 888        888    888 888     888     888  Y88o88P   88888b.d88888 888        88888b  888     888     
888    888 8888888    888   d88P 888     888     888   Y888P    888Y88888P888 8888888    888Y88b 888     888     
888    888 888        8888888P"  888     888     888    888     888 Y888P 888 888        888 Y88b888     888     
888    888 888        888        888     888     888    888     888  Y8P  888 888        888  Y88888     888     
888  .d88P 888        888        888     Y88b. .d88P    888     888   "   888 888        888   Y8888     888     
8888888P"  8888888888 888        88888888 "Y88888P"     888     888       888 8888888888 888    Y888     888
*/

const deployment = {
  env: env,
  app: {
      port: parseInt(process.env.DEPLOY_APP_PORT || "25000"),
  },
  db: {
      host: process.env.DEV_DB_HOST,
  },
};
const config = {
  development,
  deployment
};

export default config[env];