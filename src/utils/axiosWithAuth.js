import axios from 'axios'

function axiosWithAuth(){
    const token = localStorage.getItem('item')

    return axios.create({
        baseURL:'localhost:8080/api',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}

export default axiosWithAuth