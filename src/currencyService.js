export default class CurrencyService {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/b918269bed54ad6025b4f694/latest/USD`)
      .then(function(response) {
        console.log(response);
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
    
      })
      .catch(function(error) {
        return error;
      });
  }
}