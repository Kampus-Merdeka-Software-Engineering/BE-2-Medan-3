const { ContactUs } = require("../models");

class ContactUsControllers {
    static async createContactUs(req, res) {
        try {
            const {name, email, message} = req.body;
           
            const data = await ContactUs.create({
                name,
                email,
                message
            });

            res.status(201).json({
                message: "Reviewer Anda Telah Ditambahkan",
                reviewers: data,
            });
        }catch(error){
            if (error.name === "SequelizeValidationError") {
                const validationErrors = error.errors.map((err) => ({
                    field: err.path,
                    message: err.message,
                }));
                res.status(422).json({ errors:validationErrors });
            } else {
                res.status(500).json({ message: error.message });
            }
        }
    }

    static async getAllContactUs(req, res) {
        try {
            const contactus = await ContactUs.findAll();
            res.status(200).json({ data:contactus });
        } catch (error) {
            res.status(500).json({ message: error.message});
        }
    }
}

module.exports = ContactUsControllers;
