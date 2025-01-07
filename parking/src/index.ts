import homeController from "./controllers/HomeController";
import { Hono } from "hono";
import { serveStatic } from 'hono/bun';
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';

// Création de l'application Hono
const app = new Hono();


// Middleware pour servir des fichiers statiques depuis le dossier ./static
app.use('/static/*', serveStatic({ root: './' }));

// Routes de l'application
app.get("/", ...homeController);
app.route('/parkings', parkingRoutes);
app.route('/cities', cityRoutes);

// Gestion des erreurs 404
app.notFound((c) => {
    return c.html(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 Not Found</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
        </head>
        <body>
            <h1>404 - Page Not Found</h1>
            <p>La page que vous cherchez n'existe pas.</p>
            <a href="/">Retourner à l'accueil</a>
        </body>
        </html>
    `, 404);
});

// Gestion des erreurs internes (500)
app.onError((error, c) => {
    console.error('Erreur interne:', error); // Log l'erreur sur le serveur
    return c.html(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>500 Internal Server Error</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
        </head>
        <body>
            <h1>500 - Erreur Interne du Serveur</h1>
            <p>Une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer plus tard.</p>
            <a href="/">Retourner à l'accueil</a>
        </body>
        </html>
    `, 500);
});

// Export de l'application
export default app;
