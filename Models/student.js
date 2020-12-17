import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    firstName: {
    
        type: String,

      },
    lastName: {
       
    
        type: String,

      },
    Gender: {
       
    
        type: String,
 
      },
    schoolId: {
       
    
        type: String,
     
      },
    classType: {
       
    
        type: String,
    
      },
    vehicleName: {
       
    
        type: String,
      
      },
    plateNumber: {
       
    
        type: String,
       
      },
    licenseNumber: {
       
    
        type: String,
        
      },
})

export default mongoose.models.Student || mongoose.model('Student', studentSchema)