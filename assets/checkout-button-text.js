(function ($) {
  $(document).on("page:load page:change", function () {
    const continue_button = $("#continue_button").find("span");

    // if (continue_button.text().toLowerCase() === "continue to shipping details") {
    //   continue_button.text("Continue to Shipping Details");
    // }

    // if (continue_button.text().toLowerCase() === "continue to payment") {
    //   continue_button.text("Continue to Payment");
    // }

    if (
      continue_button.text().toLowerCase() === "pay now" ||
      continue_button.text().toLowerCase() === "verify age & pay now"
    ) {
      continue_button.text("Verify Age & Pay Now");
    }
  });
})(Checkout.$);
