import axios from 'axios'

export default axios.create({
    params:{
        key: '8141fa15e24044e7b2158444d0860ffc'
    },
    baseURL:'https://api.rawg.io/api'
})
