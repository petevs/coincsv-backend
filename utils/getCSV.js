import axios from "axios"

export const getCSV = async ( url ) => {

    try {
        const { data } = await axios.get(url)
        return data
    }
    catch(err){
        console.log(err)
    }

}