self.addEventListener("install", function(event) {
    event.waitUntil(preLoad());
  });
  
  var preLoad = function(){
    console.log("Installing web app");
    return caches.open("offline").then(function(cache) {
      console.log("caching index and important routes");
      return cache.addAll(["/"]);
    });
  };
  
  self.addEventListener("fetch", function(event) {
    event.respondWith(checkResponse(event.request).catch(function() {
      return returnFromCache(event.request);
    }));
    event.waitUntil(addToCache(event.request));
  });
  
  var checkResponse = function(request){
    return new Promise(function(fulfill, reject) {
      fetch(request).then(function(response){
        if(response.status !== 404) {
          fulfill(response);
        } else {
          reject();
        }
      }, reject);
    });
  };
  
  var addToCache = function(request){
    return caches.open("offline").then(function (cache) {
      return fetch(request).then(function (response) {
        console.log(response.url + " was cached");
        return cache.put(request, response);
      });
    });
  };
  
  var returnFromCache = function(request){
    return caches.open("offline").then(function (cache) {
      return cache.match(request).then(function (matching) {
       if(!matching || matching.status == 404) {
         return cache.match("offline.html");
       } else {
         return matching;
       }
      });
    });
  };

  var testNotification = function() {
    if (Notification.permission === "granted") {
      generateNotification();
    }

    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          generateNotification();
        }
      });
    }
  }

  var getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var generateNotification = function() {

  var notificationList = [
  "The price for 87 Conway Road has been reduced!",
  "The LIM for 87 Conway Road has been added!",
  "If you lived at 87 Conway Road you'd be home by now!",
  "The auction for 87 Conway Road is next week.",
  ]

  navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('87 Conway Road, Paengaroa', {
        body: notificationList[getRandomInt(4)],
        icon: 'assets/images/1.jpg',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: notificationList[getRandomInt(4)]
      });
    });
    //var notification = new Notification(notificationList[getRandomInt(4)]);
  }