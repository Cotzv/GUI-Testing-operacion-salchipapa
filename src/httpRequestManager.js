const axios = require("axios");
const instances = require("./resources/instances.json")

exports.HttpRequestManager = {
    makeRequest: (verb, uri, data, isAuthValid) => {
        let instance = null;

        instance = isAuthValid
            ? axios.create(instances.validAuth)
            : axios.create(instances.invalidAuth);

        switch (verb) {
            case "GET":
                return instance.get(`${instance.defaults.baseURL}${uri}`);
            case "POST":
                return instance.post(`${instance.defaults.baseURL}${uri}`, data);
            case "PUT":
                return instance.put(`${instance.defaults.baseURL}${uri}`, data);
            case "DELETE":
                return instance.delete(`${instance.defaults.baseURL}${uri}`);
            default:
                break;
        }
    }
}
