const studentModel = require("../Models/studentModel");
const cloudinary = require("../Helpers/cloudinary");


exports.createStudent = async (req,res)=>{
    try {
        const createStudent = new studentModel(req.body);
        
        await createStudent.save();
        

        return res.status(200).json({
            message:`Student created successfully.`,
            data: createStudent
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
        
    }
};


exports.deleteStudent = async (req,res)=>{
    try {
        const id = req.params.id;
        const deleteStudent = await studentModel.findByIdAndDelete(id);

        return res.status(200).json({
            message:`Student with ID:${id} has been deleted successfully.`
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
        
        
    }
}