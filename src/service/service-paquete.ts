import axios from 'axios';

const BASE_URL = 'https://gaia2.azurewebsites.net/';

const paquete = {
    getPaquetes: async () => {
        const response = await axios.get(BASE_URL+'paquetes')
            .then((response) => {
                return response.data[0];
            })
            .catch(error => {
                console.log("error");
            })
            .finally(() => {

            });
        return response;
    },
    getEmpresas: async () => {
        const response = await axios.get(BASE_URL+'empresas')
            .then((response) => {
                return response.data[0];
            })
            .catch(error => {
                console.log("error");
            })
            .finally(() => {

            });
        return response;
    },
    getLugares: async () => {
        const response = await axios.get(BASE_URL+'lugar')
            .then((response) => {
                return response.data[0];
            })
            .catch(error => {
                console.log("error");
            })
            .finally(() => {

            });
        return response;
    },
    getBuscar: async (data: any) => {
        const response = await axios.post(BASE_URL+'buscar',{data})
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.log("error");
            })
            .finally(() => {

            });
        return response;
    }
};
export default paquete;