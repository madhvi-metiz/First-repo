(function ($) {
  $(document).on("page:load page:change", function () {
    if (!Shopify.Checkout.OrderStatus) {
      return;
    }

    const carrier_strong_list = $(".tracking-info__number > strong");
    carrier_strong_list.text("");

    const tracking_link_list = $(".tracking-info__number > p > a");
    if (tracking_link_list.length === 1) {
      tracking_link_list.text("Track Package");
    }

    if (tracking_link_list.length > 1) {
      tracking_link_list.each((i, tracking_link) => {
        const package_number = i + 1
        $(tracking_link).text("Track Package " + package_number);
      });
    }
  });
})(Checkout.$);
