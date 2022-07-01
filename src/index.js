import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';


function clearFields() {
  $('.showExchange').text();
}

function getExchange(response) {
  if(response.conversion_rates) {
    $('#showExchange').text(``);
  }
}

$(document).ready(function() {
  $('#selectCurrency').submit(function(event) {
    event.preventDefault();
    const convertTo = $("input#currency").val();
    clearFields();
    CurrencyService.getExchange(convertTo)
      .then(function(response) {
        getExchange(response);
      });
  });
});