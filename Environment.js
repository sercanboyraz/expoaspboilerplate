const ENV = {
  dev: {
    apiUrl: 'http://172.20.10.3/',
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
