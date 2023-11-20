import meals from './meals.js';

class DataSource {
  static searchMeals(keyword) {
    // Menggunakan axios
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .then (responseJson => {
        if(responseJson.meals) {
           return Promise.resolve(responseJson.meals);
         } else {
           return Promise.reject(`${keyword} is not found`)
         }
      })

    // return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`) 
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(responseJson => {
    //     if(responseJson.meals) {
    //       return Promise.resolve(responseJson.meals);
    //     } else {
    //       return Promise.reject(`${keyword} is not found`)
    //     }
    //   });

    }
}

export default DataSource;



    
  