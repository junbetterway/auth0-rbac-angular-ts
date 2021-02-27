import { domain, clientId, audience, serverUrl } from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    audience,
    redirectUri: window.location.origin,
  },
  api: {
    serverUrl
  }
};
