require('dotenv').config()
const env_dev=require('./env_dev.json');
const env_prod =require('./env_prod.json');
const env_local =require('./env.json');


const loadEnvVariable = envName => {
  var env
  if(envName === "dev"){
    env = env_dev;
}else if(envName === "prod"){
    env = env_prod;
}else{
    env =env_local;
}
  if (env == null) {
    throw new Error(`Environment variable => ${envName} is undefined.`);
  }
  return env;
};

const config = { 
  
  APP: {
    APIURL:  loadEnvVariable(process.env.ENV).APIURL || 'http://localhost:8080/api/v1/',    
    PORT:   loadEnvVariable(process.env.ENV).PORT || 3003, 
  },
};


module.exports = config;
