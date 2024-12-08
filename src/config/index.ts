export const appEnv = <string>process.env.NODE_ENV;

export const ErrorConfig = {
  reportStackTrace: appEnv !== 'production',
};


