app.service('AuthorizationService', ['RequestService', function (RequestService) {
    String.prototype.hashCode = function() {
        var hash = 0, i, chr, len;
        if (this.length === 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

    var checkIdentity = function (input) {
        for (var i = 0; i < users.length ; i++) {
            console.log(users[i]);
            if (users[i].email == input.email.toLowerCase() && users[i].password == input.password.hashCode())
            {
                return {
                    found: true,
                    user: users[i]
                };
            }
        }
        return {
            found: false,
            user: null
        };
    }
    
    var users = [
        {
            name: 'George',
            email: 'ribiy49@gmail.com',
            password: 'dsnfksrrfpzdrf33'.hashCode()
        },
        {
            name: 'admin',
            email: 'admin@example.com',
            password: 'admin'.hashCode()
        }
    ]
    this.tryToAuthorize = function (potentialUser) {
        return checkIdentity(potentialUser);
    }
}])