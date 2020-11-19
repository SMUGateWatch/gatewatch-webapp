const path = require('path')

module.exports={
  
  env:{
    TITLE: 'Welcome to RPOINT IT SOLUTIONS',
    NEXTAUTH_URL: 'http://localhost:3000/pages/api/auth'
  },
  sassOptions:{
      includePaths:[path.join(__dirname,'styles')]
  }, 
}