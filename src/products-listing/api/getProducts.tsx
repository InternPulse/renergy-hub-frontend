import axios from "axios"

export const getCoinData = async () => {
    const myData = axios.get(`https://renergy-hub-express-backend.onrender.com/api/v1/products`)
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((err) => {
        return err
    })

    return myData
}