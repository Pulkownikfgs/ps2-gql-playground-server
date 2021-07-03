import {SERVICE_ID} from './env';

export const getServiceBaseUrl = () =>
  `https://census.daybreakgames.com/${SERVICE_ID}/get/ps2:v2`;
