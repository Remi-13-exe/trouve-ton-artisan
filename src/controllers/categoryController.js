// Ce fichier contient la logique pour gérer les requêtes liées aux catégories

// Stockage en mémoire des catégories (temporaire, non persistant)
const categories = [];

// Fonction pour récupérer toutes les catégories
// req : objet représentant la requête HTTP
// res : objet représentant la réponse HTTP
const getCategories = (req, res) => {
    res.json(categories); // Renvoie la liste des catégories au format JSON
};

// Fonction pour créer une nouvelle catégorie
const createCategory = (req, res) => {
    const newCategory = req.body; // Récupère les données de la catégorie depuis le corps de la requête
    categories.push(newCategory); // Ajoute la nouvelle catégorie au tableau
    res.status(201).json(newCategory); // Renvoie la catégorie créée avec le statut HTTP 201 (Créé)
};

// Fonction pour mettre à jour une catégorie existante
const updateCategory = (req, res) => {
    const { id } = req.params; // Récupère l'identifiant de la catégorie depuis l'URL
    const index = categories.findIndex(cat => cat.id === id); // Cherche l'index de la catégorie correspondante
    if (index !== -1) {
        // Si la catégorie existe, on met à jour ses champs avec ceux reçus dans req.body
        categories[index] = { ...categories[index], ...req.body };
        res.json(categories[index]); // Renvoie la catégorie mise à jour
    } else {
        res.status(404).send('Category not found'); // Si la catégorie n'existe pas, renvoie un code 404
    }
};

// Fonction pour supprimer une catégorie
const deleteCategory = (req, res) => {
    const { id } = req.params; // Récupère l'identifiant de la catégorie depuis l'URL
    const index = categories.findIndex(cat => cat.id === id); // Cherche l'index de la catégorie
    if (index !== -1) {
        categories.splice(index, 1); // Supprime la catégorie du tableau
        res.status(204).send(); // Renvoie un statut 204 (Pas de contenu) pour confirmer la suppression
    } else {
        res.status(404).send('Category not found'); // Si la catégorie n'existe pas, renvoie un code 404
    }
};

// Exportation de toutes les fonctions pour les utiliser dans les routes
module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
};
