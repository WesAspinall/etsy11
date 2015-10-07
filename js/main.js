(function () {

 var templateString = $('#itemTemplate').text();
 var template = _.template(templateString);

 _.each(etsy.results, function(item){ 
  console.log(item);
  var itemHTML = template(item);
  $('.firstHeader').append(itemHTML);
 });




}());