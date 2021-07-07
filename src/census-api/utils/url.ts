import {SERVICE_ID} from '../../utils/env';

export const getServiceBaseUrl = (): string =>
  `https://census.daybreakgames.com/${SERVICE_ID}/get/ps2:v2`;
