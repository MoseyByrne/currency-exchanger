import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';


function clearFields() {
  $('.showExchange').text()
}

$(document).ready(function() {
  $('#selectCurrency').submit(function(event) {
    event.preventDefault();
    const currency = $("input#currency").val();
    clearFields();
    CurrencyService.getExchange(currency)
      .then(function(response) {
        getExchange(response);
      });
  });
});