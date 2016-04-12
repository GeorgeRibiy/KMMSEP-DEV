app.service('CommonFunctionService', [function () {
    this.getCookie = function (key) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        
        var result;
        if (matches) {
            result = decodeURIComponent(matches[1]);
            result = result[0] === '{' ? JSON.parse(result) : result;
        }
        return result;
    }

    this.setCookie = function (key, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        if (typeof value == "object")
            value = JSON.stringify(value);
        value = encodeURIComponent(value);

        var updatedCookie = key + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    this.deleteCookie = function (key) {
        this.setCookie(key, "", {
            expires: -1
        })
    }
}])