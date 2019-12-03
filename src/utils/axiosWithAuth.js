import axios from 'axios'

function axiosWithAuth(){
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL:'http://localhost:8080/api',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}

export default axiosWithAuth