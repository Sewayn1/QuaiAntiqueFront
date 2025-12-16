import Route from "./Route.js";

//Definir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/carte", "Carte", "/pages/carte.html"),
    new Route("/login", "Connexion", "/pages/auth/login.html"),
    new Route("/signup", "S'inscire", "/pages/auth/signup.html"),
    new Route("/account", "Mon Espace", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier Mot de Passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "Vos Réservations", "/pages/reservations/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
