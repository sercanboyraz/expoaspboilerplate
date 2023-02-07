
import { getEnvVars } from '../../Environment';
const AppConsts = {
  userManagement: {
    defaultAdminUserName: 'admin',
  },
  localization: {
    defaultLocalizationSourceName: getEnvVars().localization.defaultResourceName,
  },
  authorization: {
    encrptedAuthTokenName: 'enc_auth_token',
  },
  appBaseUrl: getEnvVars().apiUrl,
};
export default AppConsts;
