const path = require('path')

module.exports={
  distDir: 'build',
  env:{
    TITLE: 'Welcome to RPOINT IT SOLUTIONS'
  },
  sassOptions:{
      includePaths:[path.join(__dirname,'styles')]
  }, 
}