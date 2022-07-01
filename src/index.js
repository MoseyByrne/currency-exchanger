import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';


function clearFields() {
  $('.showExchange').text("");
  $('.showErrors').text("");
}

function getExchange(response) {
  console.log(response);
  if(response.conversion_rates) {
    $('#showExchange').text(`test`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('.makeExchange').submit(function(event) {
    event.preventDefault();
    const convertTo = $("input#convertTo").val();
    const usdAmount = $("input#dollars").val();
    console.log(usdAmount);
    clearFields();
    CurrencyService.getExchange(convertTo)
      .then(function(response) {
        getExchange(response);
      });
  });
});