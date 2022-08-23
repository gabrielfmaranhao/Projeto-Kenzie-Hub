import axios from "axios";
const token = localStorage.getItem("@Kenzie-Hub:token")
export const requests = axios.create({
  baseURL : "https://kenziehub.herokuapp.com",
  headers:{
    'Authorization': `Bearer ${token}`
  }
})
