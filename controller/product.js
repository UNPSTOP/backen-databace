const product = require('../models/modelproduct');
const getproduct = async(req, res) => {
    try {
        const productdata = await product.find();
        res.status(200).json({ success: true, data: productdata });
    } catch (error) {
        console.log(error);
    }
}

const postproduct = async(req, res) => {
    try {
        const productdata = await product.create(req.body);
        res.status(200).json({ success: true, data: productdata });
    } catch (error) {
        console.log(error);
    }
}
const updateproduct = async(req, res) => {
    try {
        const productdata = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: productdata });
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getproduct, postproduct, updateproduct }