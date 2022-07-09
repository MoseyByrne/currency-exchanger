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
  if(response.conversion_result) {  
    $('#showExchange').text(` ${response.conversion_result}`);
  } else {
    $('#showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('.makeExchange').submit(function(event) {
    event.preventDefault();
    const convertTo = $("select#convertTo").val();
    const amount = $("input#dollars").val();
    const symbol = $("#convertTo option:selected").text();
    clearFields();
    CurrencyService.getExchange(convertTo, amount)
      .then(function(response) {
        getExchange(response);
        $('#showExchange').prepend(`USD $${amount} converts to ${symbol}`);
      });
  });
});