const ENV = {
  dev: {
    apiUrl: 'https://localhost:44311/',
    localization: {
      defaultResourceName: 'Mobile',
    },
  },
  prod: {
    apiUrl: 'http://192.168.1.101:44332',
    localization: {
      defaultResourceName: 'Mobile',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return ENV.dev;
};
