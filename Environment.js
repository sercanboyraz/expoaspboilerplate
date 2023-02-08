const ENV = {
  dev: {
    apiUrl: 'http://78.188.3.212:38080/webapi/',
    localization: {
      defaultResourceName: 'Mobile',
    },
  },
  prod: {
    apiUrl: 'https://192.168.1.101:44332',
    localization: {
      defaultResourceName: 'Mobile',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return ENV.dev;
};
