import axios from "axios";

export async function userLogin(dataLogin) {
    
    try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', dataLogin);
        return response.data.token;
    } catch(error) {
        console.log(error);
        throw error;
    }
}