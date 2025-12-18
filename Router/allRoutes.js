import Route from "./Route.js";

//Definir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js2/galerie.js"),
    new Route("/carte", "Carte", "/pages/carte.html", []),
    new Route("/login", "Connexion", "/pages/auth/login.html", ["disconnected"], "/js/auth/login.js"),
    new Route("/signup", "S'inscire", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon Espace", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Modifier Mot de Passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos Réservations", "/pages/reservations/allResa.html", ["client", "admin"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
