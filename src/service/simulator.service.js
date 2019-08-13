import Axios from 'axios';
import Config from "@/service/config.js";

const URL = Config.baseURL + '/simulator'
export default {

    simulationAPIcall(payload) {
        return Axios.post(URL, payload, {
        }).then(function (response) {
            return response;
        }).catch(function (error) {
            console.log(error);
        });
    }

}