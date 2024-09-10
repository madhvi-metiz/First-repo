(function ($) {
  $(document).on("page:load", function () {
    if (Shopify.Checkout.step === "contact_information") {
      $(".layout-flex__item > a").text((i, oldText) => {
        return "Sign in or Register";
      });
    }
  });
})(Checkout.$);
