var zheader, version, url;
var u = "https://developers.zomato.com/api/";
var Zomato = {
    init: function(opts) {
        if (opts.key !== null) {
            zheader = {
                Accept: "text/plain; charset=utf-8",
                "Content-Type": "text/plain; charset=utf-8",
                "X-Zomato-API-Key": opts.key
            };
        } else {
            console.error("Enter the key");
        }
        version = opts.version || "v2.1";
        url = u + version;
    },
    geocode: function(coords, scb, ecb) {
        if (coords.latitude && coords.longitude === null) {
            console.error("Enter the coordinates correctly");
        } else {
            this.request({
                url: url + "/geocode",
                headers: zheader,
                data: {
                    lat: coords.latitude,
                    lon: coords.longitude
                },
                success: function(response) {
                    scb(response);
                },
                error: function(res) {
                    ecb(res);
                }
            });
        }
    },
    restaurant: function(resid, scb, ecb) {
        if (resid === null) {
            console.error("Enter the restaurant id correctly");
        } else {
            this.request({
                url: url + "/restaurant",
                headers: zheader,
                data: {
                    res_id: resid
                },
                success: function(response) {
                    scb(response);
                },
                error: function(res) {
                    ecb(res);
                }
            });
        }
    },
    request: function(opts) {
        var req;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            req = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //setting headers
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (opts.headers !== undefined || typeof opts.headers === "object") {
            for (var index = 0; index < Object.keys(opts.headers).length; index++) {
                req.setRequestHeader(Object.keys(opts.headers)[index], opts.headers[Object.keys(opts.headers)[index]]);
            }
        }
        req.open(opts.type === undefined ? "GET" : opts.type, url, true);
        //setting data
        req.onreadystatechange = function() {
            if (req.readyState === 4 && req.status === 200) {
                opts.success(req);
            } else {
                opts.error(req);
            }
        };
        req.send(opts.data === undefined ? null : opts.data);
    }
};