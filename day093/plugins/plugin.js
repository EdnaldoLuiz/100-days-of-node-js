function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

function logRequest(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

module.exports = {
    requestTime,
    logRequest
};