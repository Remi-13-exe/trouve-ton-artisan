// This file contains the logic for handling category-related requests.

const categories = []; // In-memory storage for categories

// Get all categories
const getCategories = (req, res) => {
    res.json(categories);
};

// Create a new category
const createCategory = (req, res) => {
    const newCategory = req.body;
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

// Update an existing category
const updateCategory = (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(cat => cat.id === id);
    if (index !== -1) {
        categories[index] = { ...categories[index], ...req.body };
        res.json(categories[index]);
    } else {
        res.status(404).send('Category not found');
    }
};

// Delete a category
const deleteCategory = (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(cat => cat.id === id);
    if (index !== -1) {
        categories.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Category not found');
    }
};

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
};