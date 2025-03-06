const express = require('express');
const path = require('path');
const hbs = require('hbs'); // ← Importa Handlebars
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials')); // ← Configura partials

app.use(express.static('public'));

// Ruta principal (renderiza la plantilla)
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alex',
        titulo: 'WebApp' // Ahora esto se inyectará correctamente
    });
});

// Otras rutas (archivos estáticos)
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alex',
        titulo: 'WebApp'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alex',
        titulo: 'WebApp'
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}`);
});