const APP_PREFIX = "FoodFest-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;


const FILES_TO_CACHE = [
    "./index.html",
    "./events.html",
    "./tickets.html",
    "./schedule.html",
    "./assets/css/style.css",
    "./assets/css/bootstrap.css",
    "./assets/css/tickets.css",
    "./dist/app.bundle.js",
    "./dist/events.bundle.js",
    "./dist/tickets.bundle.js",
    "./dist/schedule.bundle.js"
  ];


self.addEventListener("install", function (e) {
    //e.waitUntil tells the browser to wait until work is complete before terming the service worker
    e.wait.Until(
        //caches.open used to find the specific cache by name then add every file to the FILES_TO_CACHE Array
        caches.open(CACHE_NAME).then(function (cache) {
            console.log("installing cache :" + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
    )
});