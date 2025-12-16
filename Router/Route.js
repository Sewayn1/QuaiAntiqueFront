export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}

/*

[] -> Tout le monde peut y acceder
["disconnected"] -> Reserver aux user Deconnecte
["Admin, client"]
["Admin"]
["Client"]

*/