config = {
    "port": 8080,
    "uri": "http://htshops.net:8080",
    "login_url": "http://htshops.net:8080/login",
    "callback_uri": "http://htshops.net:8080/callback",
    "client_id": "a0c857365573429aac95d26005cbdb2e",
    "slowdown_import": 100,
    "slowdown_export": 100
}

if(module){
    module.exports = config;
}
