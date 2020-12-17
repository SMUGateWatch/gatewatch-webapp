const path = require('path')

module.exports={
  
  env:{
    TITLE: 'Welcome to RPOINT IT SOLUTIONS',
    PORT: '4000',
  },
  sassOptions:{
      includePaths:[path.join(__dirname,'styles')]
  }, 
}