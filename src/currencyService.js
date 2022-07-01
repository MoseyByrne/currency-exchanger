export default class CurrencyService {
  static getExchange(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.evn.API_KEY}/latest/${currency}`)
      .then(function(response) {
        console.log(response);
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
    
      })
      .catch(function(error) {
        return error;
      })
  }
}