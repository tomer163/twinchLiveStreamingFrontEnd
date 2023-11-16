import axios from './axios.js'

export default async()=>{
    try{
        const res = await axios.get('/myuser')
        return res.data
    } catch(err){
        return
    }
}