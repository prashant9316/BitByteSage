const Admin = require('./../model/Admin')
const bcrypt = require('bcrypt')


const addAdmin = async(req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password)
        const newAdmin = new Admin({
            name: 'Admin',
            email: req.body.email,
            password: hashedPassword
        })
        const admin = await newAdmin.save()
        return res.status(200).json({
            message: 'Added Admin',
            data: admin.name
        })
    } catch (error) {
        return res.status(500).json({
            message: "Some Error Occured",
            error
        })
    }
}


const removeAdmin = async(req, res) => {
    try {
        const adminToBeRemoved = await Admin.findOne({email: req.body.email, status: true})
        if(adminToBeRemoved){
            await Admin.updateOne({email: req.body.email}, {status: false})
            return res.status(200).json({
                message: "Admin Removed!"
            })
        } else {
            return res.status(403).json({
                message: "Admin Does not exists!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Occured!",
            error
        })
    }
}

module.exports = {
    addAdmin,
    removeAdmin
}