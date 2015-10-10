(function () {

 var templateString = $('#itemTemplate').text();
 var template = _.template(templateString);

 _.each(etsy.results, function(item){ 
  console.log(item);
  if(item.currency_code === 'USD'){
  var itemHTML = template(item);
  $('.scriptContainer').append(itemHTML);
   }
  });




}());