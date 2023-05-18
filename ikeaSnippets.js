document.addEventListener("DOMContentLoaded", function () {
  //Language variables to be changed accordingly to pre-loaded dictionaries
  var isPolish = true;
  var region = isPolish ? "pl" : "gb";
  var language = isPolish ? "pl" : "eng";

  var url = window.location.href;
  if (url === `https://www.ikea.com/${region}/${language}/`) {
    console.log("homepage");
  } else if (url.includes("/p/")) {
  var productName = document.querySelector(
    ".pip-header-section__title--big"
  ).textContent;
  console.log("Product name: " + productName);

  var productPriceInteger = parseFloat(
    document.querySelector(".pip-temp-price__integer").textContent
  );
  var productPriceDecimal = document.querySelector(
    ".pip-temp-price__decimal"
  ).textContent;
    console.log("Product price: " + productPriceInteger + productPriceDecimal);
  } else if (url === `https://www.ikea.com/${region}/${language}/shopingcart`) {
    // Get the cart items
    let cartItems = document.querySelectorAll(".product_contents__ha7uc");
    let totalItems = cartItems.length;
    let totalPrice = 0;

    // Loop through the cart items and calculate the total price
    for (let item of cartItems) {
      let itemPrice = parseFloat(
        item.querySelector(".price_total__OCe2h").textContent.replace(",", ".")
      );
      totalPrice += itemPrice;
      console.log(totalPrice)
    }
    // Calculate the average price
    let averagePrice = totalPrice / totalItems;

    // Output the results
    console.log(`Number of items in cart: ${totalItems}`);
    console.log(`Average price per item: ${averagePrice.toFixed(2)} PLN`);
  } else if (url.includes("/search/")) {
    var searchTerm = url.split("?q=")[1];
    console.log("Search term: " + searchTerm);

    document.addEventListener("click", function (event) {
      if (event.target.matches(".pip-btn")) {
        var productName = event.target
          .closest(".pip-product-compact__bottom-wrapper")
          .querySelector(".pip-header-section__title--small").textContent;
        console.log("Added to cart: " + productName);
      }
    });
  }
});
