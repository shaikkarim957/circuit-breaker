class HttpError extends Error {}

class RouteNotFoundError extends HttpError {
    constructor(message) {
        super();
        this.name = this.constructor.name;
        this.message = message || "Route Not found";
        this.status = 404;
    }
}

module.exports = {
    RouteNotFoundError,
};
