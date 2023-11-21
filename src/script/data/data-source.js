import axios from 'axios';
import meals from './meals.js';

class DataSource {
  static async searchMeals(keyword) {
    // Menggunakan axios
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        const responseJson = response.data

        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
    } catch (error) {
      console.log(error)
    }

    // Menggunakan fetch api
    //  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`) 
    //     .then(response => {
    //        return response.json();
    //     })
    //    .then(responseJson => {
    //       if(responseJson.meals) {
    //         return Promise.resolve(responseJson.meals);
    //       } else {
    //         return Promise.reject(`${keyword} is not found`);
    //       }
    //     });
    }
}

export default DataSource;



    
  