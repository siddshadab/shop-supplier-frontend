require('dotenv').config()


const loadEnvVariable = envName => {
  const env = process.env;
  if (env == null) {
    throw new Error(`Environment variable => ${envName} is undefined.`);
  }
  return env;
};

const config = {
  APP: {
    APIURL = process.env.APIURL || 'http://localhost:8080/api/v1/',
    PORT: process.env.PORT || 3000,  
    PUBLIC_URL
  },   
};


module.exports = config;
