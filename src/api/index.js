import axios from "axios";

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'





export const getPlacesData = async(sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL, {
  
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'cca26af157mshe1d00b0cbc1c528p172a7ajsnbdde95f78137'
          }
        })
        return data
    } catch(error) {
        console.log(error)

    }
}