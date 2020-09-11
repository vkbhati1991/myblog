
require("../model/Category");

const mongoose = require("mongoose");

const Category = mongoose.model("Category");

const categoryDal = {

    getAllCategory: async () => {
        return await Category.find({});
    },

    getCategory: async (id) => {
        const category = await Category.findById({ _id: id });

        if (category) {
            return category;
        }

        return null;
    },

    createCategory: async (req) => {
        const category = new Category();
        category.title = req.body.title;
        await category.save();

        return category;
    },

    updateCategory: async (id, updatedCategory) => {
        const category = await Category.findByIdAndUpdate({
            _id: id
        }, updatedCategory, {
            new: true,
            runValidators: true
        });

        await category.save();

        return category;
    },

    deleteCategory: async (id) => {
        const category = await Category.findByIdAndRemove({ _id: id });

        return category;
    }
}


module.exports = categoryDal;