const express = require('express')
const router = express.Router();

//Index
router.get('/', (req, res) => {
    const posts = [
        {
            titolo: "Costa Azzurra1",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra2",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra3",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra4",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra5",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },
    ];

    res.json(posts);
});

module.exports = router;

//Show - mostra singolo post
router.get('/:id', (req, res) => {
    res.send(`Mostro il post con id: ${req.params.id}`);
});


// Create - crea un nuovo post 
router.post('/', (req, res) => {
    res.send("Creo un nuovo post");
});

// Update - aggiorna completamente un post esistente
router.put('/:id', (req, res) => {
    res.send(`Aggiorno completamente il post con id: ${req.params.id} (Update)`);
});

// Modify - aggiorna parzialmente un post esistente
router.patch('/:id', (req, res) => {
    res.send(`Modifico parzialmente il post con id: ${req.params.id} (Modify)`);
});

// DELETE - elimina un post
router.delete('/:id', (req, res) => {
    res.send(`Elimino il post con id: ${req.params.id}`);
});