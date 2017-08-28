const cartButtons = $('button');

const orderItems = [
  // Empty Order Items Thing!
];



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
  subtotal = 0.00    
  for (var i=0; i <orderItems.length; i++){
    subtotal = subtotal + parseFloat(orderItems[i].price);
  };
  var tax = subtotal * .10
  tax = parseFloat(tax.toFixed(2))
  var total = subtotal + tax

  $('.cart').append('Subtotal: $' + subtotal.toFixed(2));
  $('.cart').append('<p>');
  $('.cart').append('Tax: $' + tax.toFixed(2));
  $('.cart').append('<p>');
  $('.cart').append('Total: $' + total.toFixed(2));
  $('.cart').append('<p>');
  console.log(total);    

});



