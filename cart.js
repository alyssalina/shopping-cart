const cartButtons = $('.itembutton');

const cart = $('.cart');

const orderItems = [
  // Empty Order Items Thing!
];



cartButtons.on('click',function(event){
  var name1 = $(this).attr('name');
  var price1 = $(this).attr('price');
    orderItems.push({name: name1 , price: price1});
    console.log(orderItems);
  cart.empty()
  for (var i=0; i < orderItems.length; i++){
    cart.append('<p>');
    cart.append(orderItems[i].price + " --- " + orderItems[i].name);
    cart.append('</p>');
  };
  subtotal = 0.00    
  for (var i=0; i <orderItems.length; i++){
    subtotal = subtotal + parseFloat(orderItems[i].price);
  };
  var tax = subtotal * .10
  tax = parseFloat(tax.toFixed(2))
  var total = subtotal + tax

  cart.append('Subtotal: $' + subtotal.toFixed(2));
  cart.append('<p>');
  cart.append('Tax: $' + tax.toFixed(2));
  cart.append('<p>');
  cart.append('Total: $' + total.toFixed(2));
  cart.append('<p>');
  cart.append("<button class='checkout'>Check out!</button>")
  console.log(total);
  const checkoutButton = $('.checkout');
  checkoutButton.on('click', function(event){
    cart.append('<h2>Shipping Details</h2>');
    cart.append('<p>Name: <input id="name"></input></p>');
    cart.append('<p>Address: <input id="address"></input></p>');
    cart.append('<p>State: <input id="State"></input></p>');
    cart.append('<p>Zip Code: <input id="zipcode"></input></p>');
    cart.append("<button class='submit'>Submit Order.</button>");
      $('.submit').on('click', function(event){
        cart.empty()
        cart.append('<h3>Thank you for shopping!</h3>');
      })
  })
});






