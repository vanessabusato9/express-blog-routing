const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    const posts = [
        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },

        {
            titolo: "Costa Azzurra",
            contenuto: "Viaggio in Costa Azzurra",
            immagine: "https://www.menevojoanna.it/dove-andare-al-mare-in-costa-azzurra/",
            tags: ["Cannes", "Monte Carlo", "Mentone"],
        },
    ];

    res.json(posts);
});

module.exports = router;