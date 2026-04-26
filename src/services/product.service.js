import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export async function getProductDetails(id) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}