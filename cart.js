const cartButtons = $('button');

const shoppingcart = $('#cart')

const orderItems = [
  // Empty Order Items Thing!
];

var total = 0.00

cartButtons.on('click',function(event){
  var name1 = $(this).attr('name');
  var price1 = $(this).attr('price');
    orderItems.push({name: name1 , price: price1});
    console.log(orderItems);
  $('.cart').empty()
  for (var i=0; i < orderItems.length; i++){
    $('.cart').append('<p>');
    $('.cart').append(orderItems[i].price + " --- " + orderItems[i].name);
    $('.cart').append('</p>');
  };
  for (var i=0; i <orderItems.length; i++){
    total = total + parseFloat(orderItems[i].price);
  
  };
  console.log(total);    

});



