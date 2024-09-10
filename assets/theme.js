const CUTWOOD_USB_SKU = "CW-USBC10";
const CUTWOOD_PRODUCT_SKU_STARTS_WITH = "MASTER-CW";
// START OF ZIP CODE CONSTANTS
// Update this in theme.js and checkout.js
const PICK_UP_AVAILABLE_STATES = ["MA", "RI", "CT", "NH", "VT", "NY", "ZA"];

const SF_ZIPS = [
  "94102",
  "94103",
  "94104",
  "94104",
  "94105",
  "94107",
  "94107",
  "94108",
  "94109",
  "94110",
  "94111",
  "94112",
  "94112",
  "94114",
  "94114",
  "94115",
  "94116",
  "94117",
  "94117",
  "94118",
  "94119",
  "94120",
  "94121",
  "94121",
  "94122",
  "94122",
  "94122",
  "94123",
  "94124",
  "94126",
  "94127",
  "94127",
  "94129",
  "94129",
  "94130",
  "94131",
  "94131",
  "94132",
  "94132",
  "94133",
  "94133",
  "94134",
  "94134",
  "94134",
  "94140",
  "94141",
  "94142",
  "94146",
  "94147",
  "94147",
  "94158",
  "94159",
  "94164",
  "94172",
  "94188",
];

const BRONX_ZIPS = [
  "10451",
  "10451",
  "10452",
  "10452",
  "10452",
  "10453",
  "10454",
  "10455",
  "10456",
  "10457",
  "10458",
  "10458",
  "10459",
  "10460",
  "10461",
  "10461",
  "10462",
  "10462",
  "10463",
  "10463",
  "10464",
  "10465",
  "10466",
  "10467",
  "10467",
  "10467",
  "10467",
  "10468",
  "10469",
  "10469",
  "10470",
  "10471",
  "10472",
  "10473",
  "10474",
  "10474",
  "10475",
  "10475",
];

const STATEN_ISLAND_ZIPS = [
  "10301",
  "10302",
  "10303",
  "10303",
  "10304",
  "10305",
  "10306",
  "10307",
  "10308",
  "10308",
  "10309",
  "10309",
  "10310",
  "10312",
  "10312",
  "10313",
  "10314",
];

const BROOKLYN_ZIPS = [
  "11201",
  "11202",
  "11203",
  "11204",
  "11205",
  "11205",
  "11206",
  "11207",
  "11208",
  "11209",
  "11210",
  "11211",
  "11212",
  "11212",
  "11213",
  "11214",
  "11215",
  "11216",
  "11217",
  "11217",
  "11218",
  "11219",
  "11220",
  "11220",
  "11221",
  "11222",
  "11223",
  "11224",
  "11224",
  "11225",
  "11226",
  "11228",
  "11229",
  "11229",
  "11229",
  "11230",
  "11231",
  "11232",
  "11232",
  "11233",
  "11234",
  "11234",
  "11235",
  "11236",
  "11237",
  "11238",
  "11239",
  "11247",
  "11249",
  "11416",
  "11417",
];

const LONG_ISLAND_ZIPS = ["11101", "11101", "11105", "11109"];

const NEW_YORK_CITY_ZIPS = [
  "10001",
  "10001",
  "10002",
  "10003",
  "10004",
  "10005",
  "10006",
  "10007",
  "10008",
  "10009",
  "10009",
  "10009",
  "10010",
  "10011",
  "10011",
  "10011",
  "10012",
  "10012",
  "10013",
  "10013",
  "10014",
  "10014",
  "10016",
  "10017",
  "10018",
  "10019",
  "10020",
  "10021",
  "10021",
  "10022",
  "10023",
  "10023",
  "10024",
  "10025",
  "10025",
  "10025",
  "10026",
  "10026",
  "10027",
  "10028",
  "10029",
  "10030",
  "10031",
  "10031",
  "10032",
  "10032",
  "10033",
  "10033",
  "10034",
  "10035",
  "10035",
  "10036",
  "10037",
  "10038",
  "10039",
  "10040",
  "10044",
  "10065",
  "10069",
  "10075",
  "10101",
  "10104",
  "10105",
  "10106",
  "10107",
  "10108",
  "10110",
  "10111",
  "10112",
  "10113",
  "10116",
  "10118",
  "10119",
  "10122",
  "10123",
  "10128",
  "10128",
  "10129",
  "10150",
  "10151",
  "10153",
  "10156",
  "10159",
  "10162",
  "10163",
  "10165",
  "10166",
  "10167",
  "10168",
  "10169",
  "10170",
  "10171",
  "10173",
  "10174",
  "10175",
  "10176",
  "10178",
  "10185",
  "10268",
  "10272",
  "10274",
  "10276",
  "10280",
  "10282",
];

const ALBANY_ZIPS = [
  "12201",
  "12202",
  "12203",
  "12203",
  "12204",
  "12205",
  "12205",
  "12206",
  "12206",
  "12207",
  "12208",
  "12208",
  "12209",
  "12209",
  "12210",
  "12211",
  "12212",
  "12220",
  "12223",
  "12224",
];

const SACRAMENTO_ZIPS = [
  "95811",
  "95812",
  "95813",
  "95814",
  "95815",
  "95816",
  "95817",
  "95818",
  "95818",
  "95819",
  "95819",
  "95820",
  "95821",
  "95822",
  "95823",
  "95824",
  "95825",
  "95826",
  "95827",
  "95828",
  "95829",
  "95830",
  "95831",
  "95832",
  "95833",
  "95834",
  "95834",
  "95835",
  "95836",
  "95837",
  "95838",
  "95841",
  "95842",
  "95843",
  "95851",
  "95852",
  "95853",
  "95860",
  "95864",
  "95865",
  "95866",
  "95899",
];

const PORTLAND_ZIPS = [
  "97003",
  "97006",
  "97201",
  "97202",
  "97203",
  "97204",
  "97205",
  "97206",
  "97207",
  "97208",
  "97209",
  "97210",
  "97211",
  "97212",
  "97213",
  "97214",
  "97215",
  "97216",
  "97217",
  "97218",
  "97219",
  "97220",
  "97221",
  "97222",
  "97223",
  "97224",
  "97225",
  "97227",
  "97228",
  "97229",
  "97230",
  "97231",
  "97232",
  "97233",
  "97236",
  "97238",
  "97239",
  "97240",
  "97242",
  "97266",
  "97267",
  "97268",
  "97269",
  "97280",
  "97281",
  "97282",
  "97283",
  "97286",
  "97290",
  "97292",
  "97293",
  "97294",
  "97296",
  "97298",
];

const BOSTON_ZIPS = [
  "02108",
  "02109",
  "02110",
  "02111",
  "02112",
  "02113",
  "02113",
  "02114",
  "02114",
  "02115",
  "02116",
  "02117",
  "02118",
  "02123",
  "02133",
  "02134",
  "02196",
  "02199",
  "02203",
  "02205",
  "02210",
  "02215",
  "02215",
  "02222",
  "02283",
  "02284",
  "02298",
];

const BOULDER_ZIPS = [
  "80301",
  "80302",
  "80303",
  "80304",
  "80305",
  "80306",
  "80307",
  "80308",
];

// This needs to be updated in both theme.js and checkout.js
// const D8_RESTRICTED_STATES = new Set([
//   "ak",
//   "co",
//   "de",
//   "id",
//   "ia",
//   "mn",
//   "mo",
//   "ny",
//   "nd",
//   "ri",
//   "sc",
// ]);

const allowed_states = [
  { type: "state", name: "Alabama", abbreviation: "al" },
  { type: "state", name: "Alaska", abbreviation: "ak" },
  { type: "state", name: "Arizona", abbreviation: "az" },

  { type: "state", name: "Colorado", abbreviation: "co" },
  { type: "state", name: "Connecticut", abbreviation: "ct" },
  { type: "state", name: "Delaware", abbreviation: "de" },

  { type: "state", name: "Florida", abbreviation: "fl" },

  { type: "state", name: "Idaho", abbreviation: "id" },
  { type: "state", name: "Illinois", abbreviation: "il" },
  { type: "state", name: "Indiana", abbreviation: "in" },
  { type: "state", name: "Iowa", abbreviation: "ia" },
  { type: "state", name: "Kansas", abbreviation: "ks" },
  { type: "state", name: "Kentucky", abbreviation: "ky" },

  { type: "state", name: "Michigan", abbreviation: "mi" },

  { type: "state", name: "Mississippi", abbreviation: "ms" },
  { type: "state", name: "Missouri", abbreviation: "mo" },
  { type: "state", name: "Montana", abbreviation: "mt" },
  { type: "state", name: "Nebraska", abbreviation: "ne" },
  { type: "state", name: "Nevada", abbreviation: "nv" },

  { type: "state", name: "New Mexico", abbreviation: "nm" },

  { type: "state", name: "North Carolina", abbreviation: "nc" },
  { type: "state", name: "North Dakota", abbreviation: "nd" },

  { type: "state", name: "Ohio", abbreviation: "oh" },
  { type: "state", name: "Oklahoma", abbreviation: "ok" },

  { type: "state", name: "Pennsylvania", abbreviation: "pa" },

  { type: "state", name: "South Carolina", abbreviation: "sc" },

  { type: "state", name: "Tennessee", abbreviation: "tn" },
  { type: "state", name: "Texas", abbreviation: "tx" },

  { type: "state", name: "Virginia", abbreviation: "va" },

  { type: "state", name: "Washington", abbreviation: "wa" },
  { type: "state", name: "West Virginia", abbreviation: "wv" },
  { type: "state", name: "Wisconsin", abbreviation: "wi" },
  { type: "state", name: "Wyoming", abbreviation: "wy" },
];

const restriction_list = [
  {
    service_area: "San Francisco",
    city_list: ["san francisco", "sf"],
    zip_list: SF_ZIPS,
  },
  {
    service_area: "Bronx",
    city_list: ["bronx"],
    zip_list: BRONX_ZIPS,
  },
  {
    service_area: "Staten Island",
    city_list: ["staten island"],
    zip_list: STATEN_ISLAND_ZIPS,
  },
  {
    service_area: "Brooklyn",
    city_list: ["brooklyn"],
    zip_list: BROOKLYN_ZIPS,
  },
  {
    service_area: "Long Island",
    city_list: ["long island"],
    zip_list: LONG_ISLAND_ZIPS,
  },
  {
    service_area: "New York City",
    city_list: ["new york", "new york city", "nyc"],
    zip_list: NEW_YORK_CITY_ZIPS,
  },
  {
    service_area: "Albany",
    city_list: ["albany"],
    zip_list: ALBANY_ZIPS,
  },
  {
    service_area: "Sacramento",
    city_list: ["sacramento"],
    zip_list: SACRAMENTO_ZIPS,
  },
  {
    service_area: "Portland",
    city_list: ["portland"],
    zip_list: PORTLAND_ZIPS,
  },
  {
    service_area: "Boston",
    city_list: ["boston"],
    zip_list: BOSTON_ZIPS,
  },
  {
    service_area: "Boulder",
    city_list: ["boulder"],
    zip_list: BOULDER_ZIPS,
  },
];

function getServiceAreaAlertText(area) {
  return `Unfortunately, we’re not allowed to ship vapes to ${area}`;
}

const SERVICE_ALERT_LINE_2 = `
<p>Here are some states that we can ship to:</p>
<ul>
  ${allowed_states.map((state) => `<li>${state.name}</li>`).join("")}
</ul>
`;

function showPickupAvailable() {
  $(".inline-notification").removeClass("error").addClass("success");
  $(".intl-text.pickup").text(
    "Congratulations! Pick up and delivery are available in your area!"
  );
  $(".intl-text.pickup2").css({ display: "none" });
}

function showDeliveryAvailable() {
  $(".inline-notification").removeClass("error").addClass("success");
  $(".intl-text.pickup").text(
    "Congratulations! Delivery is available in your area!"
  );
  $(".intl-text.pickup2").css({ display: "none" });
}

function showShippingUnavailable(state) {
  $(".inline-notification").removeClass("success").addClass("error");
  const unavailable_text_line_1 = getServiceAreaAlertText(state);
  $(".intl-text.pickup").html(unavailable_text_line_1);
  $(".intl-text.pickup2").html(SERVICE_ALERT_LINE_2);
  $(".intl-text.pickup2").css({ display: "block" });

  if ($(".availability-span").length > 0) {
    $(".availability-span").text("Not available in " + state);
  }
}

function checkServiceAlert(zip_list, zip, success_callback) {
  if (
    zip_list.includes(zip) &&
    !window.customerTags?.includes(window.approvedTag)
  ) {
    success_callback();
    return true;
  }

  return false;
}
// END OF ZIP CODE CONSTANTS

// CART SUBTOTAL AND SHIPPING CALCULATION
const FREE_SHIPPING_REQUIREMENT = 59 * 100;
function updateFreeShipping(total_price, formatter) {
  const formattedValue = formatter.format(total_price / 100);
  $(".inner-footer-slider-cart").find(".money.actual").text(formattedValue);

  if (total_price === 0) {
    const EMPTY_CART = "Spend $59+ get FREE shipping";
    $(".cart-banner-text").text(EMPTY_CART);
    $(".standard-promo-bar-text").text(EMPTY_CART);
  } else if (total_price < FREE_SHIPPING_REQUIREMENT) {
    const freeShippingAdditional = FREE_SHIPPING_REQUIREMENT - total_price;
    const freeShippingFormatted = formatter.format(
      freeShippingAdditional / 100
    );
    const REQUIREMENT_NOT_MET = `You are ${freeShippingFormatted} away from Free Shipping!`;
    $(".cart-banner-text").text(REQUIREMENT_NOT_MET);
    $(".standard-promo-bar-text").text(REQUIREMENT_NOT_MET);
  } else {
    const REQUIREMENT_MET = `You've earned Free Shipping!`;
    $(".cart-banner-text").text(REQUIREMENT_MET);
    $(".standard-promo-bar-text").text(REQUIREMENT_MET);
  }
}

function updateCartCompareAt(total_price, compare_at_price, formatter) {
  var formattedCompareAt = formatter.format(compare_at_price / 100);

  if (compare_at_price > total_price) {
    $(".inner-footer-slider-cart")
      .find(".money.compare-at")
      .text(formattedCompareAt);
  } else {
    $(".inner-footer-slider-cart").find(".money.compare-at").text("");
  }
}

function updateCartTotals() {
  $.getJSON("/cart.js", function (cart) {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    updateFreeShipping(cart.total_price, formatter);

    updateCartTotalPrice(cart);
  });
}

function updateCartCounts(cart) {
  if (cart.item_count != 0) {
    $("#CartCount").show();
    $("#CartCount").text(cart.item_count);
    $("#CartCount-Desktop").text(cart.item_count);
    $(".h2-item-count").text(cart.item_count);
  } else {
    $("#CartCount").hide();
    $("#CartCount").text("");
    $("#CartCount-Desktop").text("");
    $(".h2-item-count").text("");
  }
}

function updateTotalPrice(total_price, formatter) {
  const formattedValue = formatter.format(total_price / 100);
  $(".inner-footer-slider-cart").find(".money.actual").text(formattedValue);
  $("#CartCost").text(formattedValue);
  $("#CartCost-Desktop").text(formattedValue);
}

function updateCartTotalPrice(cart) {
  const total = cart.total_price;

  if (total == 0) {
    $("#CartCost").text("");
    $("#CartCost-Desktop").text("");
  } else {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    updateTotalPrice(cart.total_price, formatter);
    updateCartCompareAt(cart.total_price, cart.original_total_price, formatter);
  }
}

function removeUnusedItems(cart) {
  const keysSet = new Set();
  for (const line_item of cart.items) {
    keysSet.add(line_item.key);
  }

  $(".cart-item-titles").each(function () {
    const lineItemKey = $(this).attr("line-item-data-key");
    if (keysSet.has(lineItemKey)) {
      return;
    }

    $(this).parent().remove();
  });
}

$(document).ready(function () {
  updateCartTotals();
});

function updateVitalsStickyAddToCartStyles() {
  try {
    const atcButton = $("#bundle-sticky_submit");
    // atcButton.css("color", "rgba(0, 0, 255, 1) !important");
    atcButton.css("color", "");
  } catch (e) {
    console.error(e);
    // Do nothing
  }
}

function refreshCart({
  $form = undefined,
  isAdded = true,
  addedText = "Added items to cart",
} = {}) {
  $.getJSON("/cart.js", function (cart) {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    updateCartCounts(cart);
    updateCartTotalPrice(cart);
    updateFreeShipping(cart.total_price, formatter);
    removeUnusedItems(cart);

    // get cart details and loop through them to populate the cart instantly
    var cartItems = cart.items;

    $.each(cartItems, function () {
      var sku = $(this)[0]["sku"];
      var handle = $(this)[0]["handle"];
      var image = $(this)[0]["image"];
      var price = $(this)[0]["price"];

      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      var PriceFormatted = formatter.format(price / 100);
      var product_title = $(this)[0]["product_title"];
      var variant_title = $(this)[0]["variant_title"];

      if (variant_title === null) {
        variant_title = "";
      }

      var variant_id = $(this)[0]["variant_id"];
      var quantity = $(this)[0]["quantity"];
      var key = $(this)[0]["key"];
      var img = $(this)[0]["image"];
      var url = $(this)[0]["url"];
      // look for that variant, update quantity, if not add the item to cart

      var match = 0;
      $(".cart-item-titles").each(function () {
        const lineItemKey = $(this).attr("line-item-data-key");
        if (key === lineItemKey) {
          // sku matches, update quantity only
          $(this)
            .find(".quantity-select")
            .find(".input-wrapper")
            .find("input")
            .attr("value", quantity);

          match = 1;
        }
      });

      const isDisabled = [CUTWOOD_USB_SKU].includes(sku);
      const disabledAttribute = isDisabled ? "disabled" : "";

      const disabledWrapperStyle = isDisabled
        ? "style='visibility:hidden;'"
        : "";

      // since variant still hasn't been found, we have to add it to cart ourselves
      if (match === 0) {
        var html =
          '<div class="cart-item-slider regular" style="overlow-y:none; padding:0.5em 0" data-tags=""><a class="image-url-cart" href="' +
          url +
          '"><img class="cart-item-image" src="' +
          img +
          '"></a><div class="cart-item-titles" item-data-sku="' +
          sku +
          '"' +
          ' line-item-data-key="' +
          key +
          '"><p class="cart-item-product-title"><b>' +
          product_title +
          '</b></p><span class="variant cart-slide-variant">' +
          variant_title +
          '</span><div class="td cart-item-price" data-handle="' +
          handle +
          '"><span class="money compare-at" actual-price=""></span><span class="money actual" actual-price="' +
          price +
          '">' +
          PriceFormatted +
          '</span><div></div></div><div class="quantity-select cart-items" data-variant-id="' +
          variant_id +
          '" data-item-id="' +
          key +
          '" ' +
          disabledWrapperStyle +
          '> <div class="button-wrapper"><button class="adjust-slider minus" ' +
          disabledAttribute +
          '>-</button></div><div class="input-wrapper"><input type="text" class="slider-quantity" ' +
          disabledAttribute +
          ' min="1" pattern="[0-9]*" value="' +
          quantity +
          '"></div><div class="button-wrapper"><button class="adjust-slider plus" ' +
          disabledAttribute +
          '>+</button></div></div><a href="#" class="remove-item"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.28125 3.28125L3.86719 12.6562C3.89502 13.1979 4.28906 13.5938 4.80469 13.5938H10.1953C10.713 13.5938 11.0997 13.1979 11.1328 12.6562L11.7188 3.28125" stroke="#8F8F8F" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.34375 3.28125H12.6562H2.34375Z" fill="#8F8F8F"></path><path d="M2.34375 3.28125H12.6562" stroke="#8F8F8F" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M9.60938 5.15625L9.375 11.7188M5.625 3.28125V2.10938C5.62473 2.01697 5.64273 1.92541 5.67797 1.83998C5.71321 1.75455 5.76499 1.67693 5.83034 1.61159C5.89568 1.54624 5.9733 1.49446 6.05873 1.45922C6.14416 1.42398 6.23571 1.40598 6.32812 1.40625H8.67188C8.76429 1.40598 8.85584 1.42398 8.94127 1.45922C9.0267 1.49446 9.10432 1.54624 9.16966 1.61159C9.23501 1.67693 9.28679 1.75455 9.32203 1.83998C9.35727 1.92541 9.37527 2.01697 9.375 2.10938V3.28125H5.625ZM7.5 5.15625V11.7188V5.15625ZM5.39062 5.15625L5.625 11.7188L5.39062 5.15625Z" stroke="#8F8F8F" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></div>';

        $(html).insertAfter(".cart-upsell");
      }
    });

    if ($form) {
      const cartButtonText = $form.find("[data-AddToCartText]").html();

      const resetCartButton = setTimeout(function () {
        $form
          .find("[data-AddToCart]")
          .removeClass("added")
          .prop("disabled", false);
        $form.find("[data-AddToCartText]").html(cartButtonText);
      }, 500);
    }

    if (isAdded) {
      afterAddAction(addedText);
    }
  });
}

function showBulkAtc(availability) {
  if (availability.bulk_available || availability.oversell) {
    $("#AddToCartBulk-product-template").removeAttr("style");
  } else {
    $("#AddToCartBulk-product-template").css("display", "none");
  }
}

(function ($) {
  "use strict";
  // StyleHatch Object
  window.StyleHatch = window.StyleHatch || {};

  /**
   * Sections
   * ---------------------------------------------------------------------------
   * Constructors, instances and events for the Shopify Theme Editor
   */
  StyleHatch.Sections = function Sections() {
    this.constructors = {};
    this.instances = [];

    $(document)
      .on("shopify:section:load", this._onSectionLoad.bind(this))
      .on("shopify:section:unload", this._onSectionUnload.bind(this))
      .on("shopify:section:select", this._onSelect.bind(this))
      .on("shopify:section:deselect", this._onDeselect.bind(this))
      .on("shopify:section:reorder", this._onReorder.bind(this))
      .on("shopify:block:select", this._onBlockSelect.bind(this))
      .on("shopify:block:deselect", this._onBlockDeselect.bind(this));
  };
  /**
   * Prototypes to extend sections
   */
  StyleHatch.Sections.prototype = $.extend({}, StyleHatch.Sections.prototype, {
    _createInstance: function (container, constructor) {
      var $container = $(container);
      var id = $container.attr("data-section-id");
      var type = $container.attr("data-section-type");

      constructor = constructor || this.constructors[type];

      if (typeof constructor === "undefined") {
        return;
      }

      var instance = $.extend(new constructor(container), {
        id: id,
        type: type,
        container: container,
      });

      this.instances.push(instance);
    },

    _onSectionLoad: function (evt) {
      var container = $("[data-section-id]", evt.target)[0];
      if (container) {
        this._createInstance(container);
      }
    },

    _onSectionUnload: function (evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );

      if (!instance) {
        return;
      }

      if (typeof instance.onUnload === "function") {
        instance.onUnload(evt);
      }

      this.instances = slate.utils.removeInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );
    },

    _onSelect: function (evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );

      if (instance && typeof instance.onSelect === "function") {
        instance.onSelect(evt);
      }

      if ($("body").hasClass("panel-open")) {
        StyleHatch.closePanelMenu();
        $("html, body").addClass("scroll-lock");
        // Prevent theme editor issues
        setTimeout(function () {
          $("html, body").removeClass("scroll-lock");
          $("html, body").animate(
            {
              scrollTop: instance.$container.offset().top, // - fixedOffset
            },
            600
          );
        }, 400);
      }
    },

    _onDeselect: function (evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );

      if (instance && typeof instance.onDeselect === "function") {
        instance.onDeselect(evt);
      }

      if ($("body").hasClass("panel-open")) {
        StyleHatch.closePanelMenu();
      }
    },

    _onReorder: function (evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );

      if (instance && typeof instance.onReorder === "function") {
        instance.onReorder(evt);
      }
    },

    _onBlockSelect: function (evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );

      if (instance && typeof instance.onBlockSelect === "function") {
        instance.onBlockSelect(evt);
      }
    },

    _onBlockDeselect: function (evt) {
      var instance = slate.utils.findInstance(
        this.instances,
        "id",
        evt.detail.sectionId
      );

      if (instance && typeof instance.onBlockDeselect === "function") {
        instance.onBlockDeselect(evt);
      }
    },

    register: function (type, constructor) {
      this.constructors[type] = constructor;

      $("[data-section-type=" + type + "]").each(
        function (index, container) {
          this._createInstance(container, constructor);
        }.bind(this)
      );
    },
  });

  /**
   * Cache common selectors
   */
  StyleHatch.cacheSelectors = function () {
    StyleHatch.cache = {
      // General
      $body: $("body"),
      $html: $("html"),

      // Util header
      $util: $("header.util"),
      $header: $("header.site-header"),
      $siteNav: $("header.site-header ul.site-nav"),
      $featuredCollection: $(".featured-collection"),
      $instagramCollection: $(".instagram-collection"),

      $addToCartForm: $("#AddToCartForm"),
      $addToCartButton: $("#AddToCart"),
      $cartButton: $("#CartButton"),

      // Customer Pages
      $recoverPasswordLink: $("#RecoverPassword"),
      $hideRecoverPasswordLink: $("#HideRecoverPasswordLink"),
      $recoverPasswordForm: $("#RecoverPasswordForm"),
      $customerLoginForm: $("#CustomerLoginForm"),
      $passwordResetSuccess: $("#ResetSuccess"),
    };
  };

  StyleHatch.init = function () {
    var doc = document.documentElement;
    doc.setAttribute("data-useragent", navigator.userAgent);

    StyleHatch.cacheSelectors();

    // Set up width levels
    StyleHatch.largeMobile = 700;

    /**
     * Set up sections
     */
    var sections = new StyleHatch.Sections();
    // Fixed theme sections
    sections.register("promos-section", StyleHatch.PromosSection);
    sections.register("header-section", StyleHatch.HeaderSection);
    sections.register("footer-section", StyleHatch.FooterSection);
    // Index sections
    sections.register("slideshow-section", StyleHatch.SlideshowSection);
    sections.register("hero-video-section", StyleHatch.HeroVideoSection);
    sections.register(
      "featured-collection-section",
      StyleHatch.FeaturedCollectionSection
    );
    sections.register(
      "simple-collection-section",
      StyleHatch.SimpleCollectionSection
    );
    sections.register("featured-text-section", StyleHatch.PageSection);
    sections.register("custom-content-section", StyleHatch.PageSection);
    sections.register("instagram-section", StyleHatch.InstagramSection);
    sections.register("featured-blog-section", StyleHatch.GenericSection);
    sections.register("map", StyleHatch.Maps);
    // Template sections
    sections.register("product-template", StyleHatch.Product);
    sections.register("collection-template", StyleHatch.Collection);
    sections.register("collection-list-template", StyleHatch.Collection);
    sections.register("list-collections-template", StyleHatch.ListCollections);
    sections.register("blog-template", StyleHatch.BlogArticle);
    sections.register("article-template", StyleHatch.BlogArticle);
    sections.register("password-template", StyleHatch.Password);
    sections.register("cart-template", StyleHatch.Cart);

    if (StyleHatch.currencyConverter) {
      StyleHatch.CurrencyConverter.init();
    }

    if (StyleHatch.ajaxCartEnable) {
      StyleHatch.AjaxCart.init();
    }

    StyleHatch.loginForms();
    StyleHatch.videoLayout();
    StyleHatch.initTemplates();
  };

  /**
   * Section - Modules
   * ---------------------------------------------------------------------------
   * Set up core functionality for fixed global (all template) modules
   */

  /**
   * Promos - header
   */
  StyleHatch.PromosSection = (function () {
    function PromosSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      StyleHatch.Promos.init();
    }

    return PromosSection;
  })();
  StyleHatch.PromosSection.prototype = $.extend(
    {},
    StyleHatch.PromosSection.prototype,
    {
      onUnload: function () {
        StyleHatch.Promos.unload();
      },
      onBlockSelect: function (evt) {
        StyleHatch.Promos.blockSelect(evt);
      },
      onBlockDeselect: function (evt) {
        StyleHatch.Promos.blockDeselect(evt);
      },
    }
  );
  // Promos Class
  StyleHatch.Promos = (function () {
    var selectors = {
      body: "body",
      page: "#page",
      promos: "#shopify-section-promos",
      promoBar: "header.promo-bar",
      bottomContainer: ".promo-bar-container.bottom",
      popup: ".promo-popup",
    };

    var config = {};
    config = {
      scrollLock: false,
      fixToZIndex: 992,
      hideTimers: [],
      slideSpeed: 400,
    };

    var cache = {};

    function init() {
      cacheSelectors();

      config.scrollLock = cache.$promos.find(">*:first").data("scroll-lock");

      initPromoBars();
      initPopups();

      StyleHatch.Header.rebuildFixTo();
    }

    function cacheSelectors() {
      cache = {
        $body: $(selectors.body),
        $promos: $(selectors.promos),
        $promosContainer: $(selectors.promos).find(">*:first"),
        $promoBar: $(selectors.promoBar),
        $bottomContainer: $(selectors.bottomContainer),
        $popup: $(selectors.popup),
      };
    }

    // Core functions
    /*
     * Promo bar
     * Announcement bar
     */
    function initPromoBars() {
      if (cache.$promoBar.length) {
        // Loop through each
        cache.$promoBar.each(function () {
          var $promoBar = $(this);
          var hideDelay = $promoBar.data("hide-delay");
          var barPlacement = $promoBar.data("bar-placement");

          // Check for errors
          var $errors = $promoBar.find("div.errors");
          if ($errors.length) {
            $errors.prependTo($promoBar);
          }

          // Create and group together bottom bars
          if (barPlacement == "bottom") {
            if (!cache.$bottomContainer.length) {
              cache.$promosContainer.append(
                '<div class="promo-bar-container bottom"></div>'
              );
              cache.$bottomContainer = $(selectors.bottomContainer);
            }
            $promoBar.appendTo(cache.$bottomContainer);

            // Calculate height and offset bottom padding
            cache.$bottomContainer.resize(function () {
              var bottomHeight = $(this).height() + "px";
              cache.$body.css({
                "margin-bottom": bottomHeight,
              });
            });
          }

          if ($promoBar.hasClass("signup-bar")) {
            $promoBar.showPopup();
          }

          // Hide the bar after ms delay (hideDelay)
          if (hideDelay !== "no-delay") {
            config.hideTimers.push(
              setTimeout(function () {
                if (!$promoBar.data("pause-hide")) {
                  $promoBar.promoSlideUp();
                }
              }, hideDelay)
            );
          }
        });

        destroyFixTo();
        fixTo();
      }
    }
    function destroyFixTo() {
      if (cache.$promos.data("fixtoInstance")) {
        cache.$promos.fixTo("destroy");
      }
    }
    function refreshFixTo() {
      if (cache.$promos.data("fixtoInstance")) {
        cache.$promos.fixTo("refresh");
      }
    }
    function fixTo() {
      if (config.scrollLock) {
        cache.$promos.fixTo(selectors.page, {
          zIndex: config.fixToZIndex,
        });
      }
    }

    /*
     * Popup
     */
    function initPopups() {
      if (cache.$popup.length) {
        // Loop through each
        cache.$popup.each(function () {
          var $popup = $(this);
          var popupEnable = true,
            showDelay = $popup.data("show-delay"),
            homepageLimit = $popup.data("homepage-limit"),
            visitorLimit = $popup.data("visitor-limit"),
            isVisitor = $popup.data("visitor"),
            showFor = $popup.data("show-for");

          // Disable popup if "only enable for visitor" and customer
          if (visitorLimit == true && isVisitor == false) {
            popupEnable = false;
          }

          var $errors = $popup.find(".errors");
          if ($errors.length) {
            showDelay = 0;
          }

          var popupTimeout = setTimeout(function () {
            var windowWidth = $(window).width();
            switch (showFor) {
              case "mobile":
                if (windowWidth <= StyleHatch.largeMobile) {
                  $popup.showPopup();
                }
                break;
              case "desktop":
                if (windowWidth > StyleHatch.largeMobile) {
                  $popup.showPopup();
                }
                break;
              case "both":
                $popup.showPopup();
                break;
            }
          }, showDelay);
        });
      }
    }

    // Prototypes
    /*
     * Popups
     * - showPopup
     * - hidePopup
     */
    $.fn.extend({
      showPopup: function (force) {
        var $popup = $(this);
        var popupEnable = true,
          showDelay = $popup.data("show-delay"),
          showAgainDelay = $popup.data("show-again-delay"),
          homepageLimit = $popup.data("homepage-limit"),
          visitorLimit = $popup.data("visitor-limit"),
          isVisitor = $popup.data("visitor"),
          showFor = $popup.data("show-for"),
          type = $popup.data("type"),
          id = $popup.data("id");

        // Disable popup if "only enable for visitor" and customer
        if (visitorLimit == true && isVisitor == false) {
          popupEnable = false;
        }

        // Check to see if the cookie exists
        var cookieName = "popup-" + id;
        if ($.cookie(cookieName)) {
          popupEnable = false;
        }

        // Check for homepage limit
        if (homepageLimit && !cache.$body.hasClass("template-index")) {
          popupEnable = false;
        }

        if (window.self !== window.top && type == "popup") {
          popupEnable = false;
        }

        // Always show signup-bar popup if inside the editor
        if (force) {
          popupEnable = true;
        }

        // Check for errors to show the popup anyways
        var $errors = $popup.find(".errors");
        var formTags = getQueryString("contact%5Btags%5D");

        if ($errors.length && formTags.includes("popup")) {
          popupEnable = true;
          $popup.find("input#email").addClass("errors");
        }

        if ($errors.length && formTags.includes("signup-bar")) {
          popupEnable = true;
        }

        // Remove target=_blank on touch
        if (Modernizr.touchevents) {
          $popup.find("form").removeAttr("target");
        }

        if (popupEnable) {
          if (type == "popup") {
            $.magnificPopup.open({
              items: {
                src: $popup,
                type: "inline",
                showCloseBtn: false,
              },
              mainClass: "mfp-slideup",
              removalDelay: 300,
              callbacks: {
                close: function () {
                  $.cookie(cookieName, "shown", {
                    expires: showAgainDelay,
                    path: "/",
                  });
                },
              },
            });
          }

          if (type == "signup-bar") {
            if (force) {
              $popup.addClass("visible force");
            } else {
              $popup.addClass("visible");
            }
          }

          var $close = $popup.find(".icon-text");
          $close.on("click", function (e) {
            $popup.hidePopup();
            e.preventDefault();
          });

          // On click subscribe button
          var $form = $popup.find("form");
          $form.on("submit", function (e) {
            if (e.target.checkValidity()) {
              $popup.hidePopup();
              $(this).submit();
            } else {
              return false;
            }
          });
        }
      },
      hidePopup: function () {
        var $promos = $("#shopify-section-promos");
        var $popup = $(this);
        var type = $popup.data("type"),
          id = $popup.data("id");

        if (type == "popup") {
          $.magnificPopup.close();
        }

        if (type == "signup-bar") {
          var cookieName = "popup-" + id;

          $.cookie(cookieName, "shown", {
            expires: 60,
            path: "/",
          });

          // close all signup bars
          $(".promo-bar.signup-bar").each(function (i) {
            $(this).slideUp({
              duration: 400,
              progress: function () {
                StyleHatch.refreshFixTo();
              },
              complete: function () {
                // one final refresh call
                StyleHatch.refreshFixTo();
                $(this).removeClass("visible force");
              },
            });
          });
        }
      },
      promoSlideUp: function () {
        $(this).slideUp({
          duration: config.slideSpeed,
          progress: StyleHatch.refreshFixTo,
          complete: StyleHatch.refreshFixTo,
        });
      },
      promoSlideDown: function () {
        $(this).slideDown({
          duration: config.slideSpeed,
          progress: StyleHatch.refreshFixTo,
          complete: StyleHatch.refreshFixTo,
        });
      },
      // Simulated versions for the customize theme menu
      showMockPopup: function () {
        var $promos = $("#shopify-section-promos");
        if (!$(".mock-popup-container").length) {
          $promos
            .find(">*:first")
            .append('<div class="mock-popup-container"></div>');
        }
        var $mockPopupContainer = $(".mock-popup-container");
        var $popup = $(this);
        $popup.appendTo($mockPopupContainer);

        $mockPopupContainer.show();
        $popup.show();
      },
      hideMockPopup: function () {
        var $mockPopupContainer = $(".mock-popup-container");
        var $popup = $(this);
        $mockPopupContainer.hide();
        $popup.hide();
      },
    });

    function blockSelect(evt) {
      var $block = $("#block-" + evt.detail.blockId);
      var blockType = $block.data("type");

      // close any open popup
      $.magnificPopup.close();

      // make sure each block type opens
      switch (blockType) {
        case "announcement-bar":
          // Promo bars
          // Always show the bar when the block is selected
          $block.promoSlideDown();
          $block.attr("data-pause-hide", true);

          break;
        case "popup":
          $block.showMockPopup();
          break;
        case "signup-bar":
          $block.showPopup(true);
          break;
      }
      StyleHatch.Header.rebuildFixTo();
      StyleHatch.refreshFixTo();
    }
    function blockDeselect(evt) {
      var $block = $("#block-" + evt.detail.blockId);
      var blockType = $block.data("type");
      var showFor = $block.data("show-for");
      var windowWidth = $(window).width();

      // make sure each block type closes (if it should)
      switch (blockType) {
        case "announcement-bar":
          var $promoBar = $block;
          $promoBar.attr("data-pause-hide", false);

          var hideDelay = $promoBar.data("hide-delay");
          var barPlacement = $promoBar.data("bar-placement");
          var homepageLimit = $promoBar.data("homepage-limit");

          // Instantly hide any promo bar that was open for editing only (wrong size)
          if (showFor == "desktop" && windowWidth <= StyleHatch.largeMobile) {
            $block.promoSlideUp();
          } else if (
            showFor == "mobile" &&
            windowWidth > StyleHatch.largeMobile
          ) {
            $block.promoSlideUp();
          }

          // Hide the bar after ms delay (hideDelay)
          if (hideDelay !== "no-delay") {
            config.hideTimers.push(
              setTimeout(function () {
                if (!$promoBar.data("pause-hide")) {
                  $promoBar.promoSlideUp();
                }
              }, hideDelay)
            );
          }
          break;
        case "popup":
          $block.hideMockPopup();
          break;

        case "signup-bar":
          if (showFor == "desktop" && windowWidth <= StyleHatch.largeMobile) {
            $block.hidePopup();
            StyleHatch.refreshFixTo();
          }
          if (showFor == "mobile" && windowWidth > StyleHatch.largeMobile) {
            $block.hidePopup();
            StyleHatch.refreshFixTo();
          }
          break;
      }
      StyleHatch.Header.rebuildFixTo();
    }
    function unload() {
      // Clear out timers
      if (
        typeof config.hideTimers == "undefined" ||
        !(config.hideTimers instanceof Array)
      ) {
        config.hideTimers = [];
      } else {
        for (var i = 0; i < config.hideTimers.length; i++) {
          clearTimeout(config.hideTimers[i]);
        }
        config.hideTimers.length = 0;
      }

      // Clean up fixto
      destroyFixTo();
      StyleHatch.refreshFixTo();

      // Misc
      cache.$bottomContainer.remove();
      $.magnificPopup.close();
    }

    return {
      init: init,
      unload: unload,
      blockSelect: blockSelect,
      blockDeselect: blockDeselect,
      refreshFixTo: refreshFixTo,
    };
  })();

  /**
   * Header
   */
  StyleHatch.HeaderSection = (function () {
    function HeaderSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      StyleHatch.Header.init();
    }

    return HeaderSection;
  })();
  StyleHatch.HeaderSection.prototype = $.extend(
    {},
    StyleHatch.HeaderSection.prototype,
    {
      onUnload: function () {
        StyleHatch.Header.unload();
      },
    }
  );
  // Header Class
  StyleHatch.Header = (function () {
    var selectors = {
      htmlBody: "html, body",
      body: "body",
      page: "#page",
      section: "#shopify-section-header",
      promosSection: "#shopify-section-promos",
      util: "header.util",
      header: "header.site-header",
      siteNav: "header.site-header ul.site-nav",
      menuLink: ".menu-link",
      menuPanel: "#menu.panel",
      menuOverlay: ".mobile-menu-overlay",
    };

    var config = {};
    config = {
      blurTimer: {},
      blurTime: 2000,
      slideSpeed: 300,
      // Dropdowns
      dropdownActiveClass: "dropdown-hover",
      subDropdownActiveClass: "sub-dropdown-hover",
    };

    var cache = {};

    function init() {
      cacheSelectors();

      // Util
      initUtilHeader();
      bindUtilHeaderEvents();
      // Header
      initHeader();
      bindHeaderEvents();

      rebuildFixTo();
    }

    function cacheSelectors() {
      cache = {
        $htmlBody: $(selectors.htmlBody),
        $body: $(selectors.body),
        $page: $(selectors.page),
        $section: $(selectors.section),
        $promosSection: $(selectors.promosSection),
        $util: $(selectors.util),
        $header: $(selectors.header),
        $siteNav: $(selectors.siteNav),
        // Dropdowns
        $dropdownParent: $(selectors.siteNav).find("li.has-dropdown"),
        $defaultLink: $(selectors.siteNav).find("> li:not(.has-dropdown)"),
        $subMenuLinks: $(selectors.siteNav).find("li.has-dropdown a"),
        $subDropdownParent: $(selectors.siteNav).find("li.has-sub-dropdown"),
        // Util
        $search: $(selectors.util).find(".search-wrapper"),
        $searchLink: $(selectors.util).find("a.search"),
        $searchClose: $(selectors.util).find("form.search-bar button"),
        $searchInput: $(selectors.util).find("form.search-bar input"),
        // Panel menu
        $menuLink: $(selectors.menuLink),
        $menuPanel: $(selectors.menuPanel),
        $menuPanelDropdown: $(selectors.menuPanel).find("li.has-dropdown"),
        $menuPanelSubDropdown: $(selectors.menuPanel).find(
          "li.has-sub-dropdown"
        ),
      };
    }

    /*
     * Util header
     * ------------------------
     */
    function initUtilHeader() {
      // Add overlay
      if (!$(selectors.menuOverlay).length) {
        cache.$section.append('<div class="mobile-menu-overlay"></div>');
        cache.$menuOverlay = $(selectors.menuOverlay);
      }
    }
    /*
     * Search open/close
     */
    function openSearch() {
      cache.$search.slideDown({
        duration: config.slideSpeed,
        progress: function () {
          StyleHatch.refreshFixTo();
        },
        complete: function () {
          StyleHatch.refreshFixTo();
        },
      });
      cache.$searchInput.focus();
    }
    function closeSearch() {
      cache.$searchInput.blur();
      clearTimeout(config.blurTimer);
      cache.$search.slideUp({
        duration: config.slideSpeed,
        progress: function () {
          StyleHatch.refreshFixTo();
        },
        complete: function () {
          StyleHatch.refreshFixTo();
        },
      });
    }
    /*
     * Mobile panel open/close
     */
    $("#mobile-nav-click").click(function (e) {
      if (cache.$body.hasClass("panel-open")) {
        $("body").removeAttr("style");
        closePanelMenu();
      } else {
        openPanelMenu();
      }
    });
    $("#search-mobile").click(function (e) {
      if ($(".search-bar-mobile").css("display") === "block") {
        $(".search-bar-mobile").hide();
        $(".search-bar-mobile").find('input[type="search"]').blur();
        $("#gorgias-chat-container").show();
      } else {
        $(".search-bar-mobile").show();
        $(".search-bar-mobile").find('input[type="search"]').focus();
        $("#gorgias-chat-container").hide();
        // if we're showing the mobile search bar, we must make sure that users cannot scroll around to preserve the interaction of typing + search bar showing
        window.addEventListener("touchstart", function (e) {
          // the user touched the screen!
          var thisId = e.target.id;
          var thisClass = e.target.className;

          if (
            thisClass === "input-group-field" ||
            thisId === "submit-search" ||
            thisClass === "icon-wrapper"
          ) {
            // let things be, user is interacting with the search functionality
          } else {
            $(".search-bar-mobile").hide();
            $(".search-bar-mobile").find('input[type="search"]').blur();
            $("#gorgias-chat-container").show();
          }
        });
      }
    });
    function togglePanelMenu() {
      if (cache.$body.hasClass("panel-open")) {
        $("body").removeAttr("style");
        closePanelMenu();
      } else {
        openPanelMenu();
      }
    }
    function openPanelMenu() {
      cache.$htmlBody.addClass("panel-open");
      window.scrollTo(0, 0);
      cache.$menuPanel.attr("tabindex", "0");
      cache.$menuPanel.focus();
      $("#page").attr("style", "display:block;height:100%;");
      $("body").attr("style", "overflow-y:hidden !important");
    }
    function closePanelMenu() {
      cache.$htmlBody.addClass("panel-open-transition");
      cache.$htmlBody.removeClass("panel-open");
      cache.$menuPanel.removeAttr("tabindex");
      $("#page").removeAttr("style");
      cache.$menuPanel.attr();
      $("body").removeAttr("style");
      setTimeout(function () {
        cache.$htmlBody.removeClass("panel-open-transition");
      }, 400);
    }
    /*
     * Events
     */
    function bindUtilHeaderEvents() {
      // Search
      cache.$searchLink.on("click.search", function (e) {
        openSearch();
        e.preventDefault();
      });
      cache.$searchClose.on("click.search", function (e) {
        closeSearch();
        e.preventDefault();
      });
      cache.$searchInput.on("blur.search", function (e) {
        config.blurTimer = setTimeout(closeSearch, config.blurTime);
        e.preventDefault();
      });

      // Mobile panel menu
      cache.$menuLink.on("click.panel", function (e) {
        togglePanelMenu();
        e.preventDefault();
      });
      cache.$menuOverlay.on("click.panel", function (e) {
        togglePanelMenu();
        e.preventDefault();
      });

      // Collapsible panel navigation (subnav)
      cache.$menuPanelDropdown.on("click.panelDropdown", function (e) {
        // Slide up previous one(s)
        cache.$menuPanelDropdown.find("ul.dropdown").slideUp();
        cache.$menuPanelDropdown.find("> a").attr("aria-expanded", "false");
        cache.$menuPanelDropdown.removeClass("expanded");

        cache.$menuPanelDropdown
          .find("ul.dropdown")
          .attr("aria-hidden", "true");
        cache.$menuPanelDropdown.find("ul.dropdown a").attr("tabindex", "-1");

        // If it's not open slide down the menu
        // and don't allow the click
        if (!$(this).find("ul.dropdown").is(":visible")) {
          $(this).find("> a").attr("aria-expanded", "true");
          $(this).find("ul.dropdown").slideDown();
          $(this).find("ul.dropdown").attr("aria-hidden", "false");
          $(this).find("ul.dropdown > li > a").attr("tabindex", "0");
          $(this).addClass("expanded");
        }
      });

      cache.$menuPanelDropdown
        .find("> a")
        .on("click.panelDropdown", function (e) {
          if (!$(this).closest("li").hasClass("expanded")) {
            e.preventDefault();
          }
        });
      cache.$menuPanelDropdown
        .find("ul.dropdown li:not(.has-sub-dropdown) a")
        .on("click.panelDropdown", function (e) {
          e.stopPropagation();
        });

      // Collapsible panel navigation (sub-subnav)
      cache.$menuPanelSubDropdown.on("click.panelDropdown", function (e) {
        e.stopPropagation();
        cache.$menuPanelSubDropdown.find("ul.sub-dropdown").slideUp();
        cache.$menuPanelDropdown.find("> a").attr("aria-expanded", "false");
        cache.$menuPanelSubDropdown.removeClass("expanded");

        cache.$menuPanelDropdown
          .find("ul.sub-dropdown")
          .attr("aria-hidden", "true");
        cache.$menuPanelDropdown
          .find("ul.sub-dropdown a")
          .attr("tabindex", "-1");

        // If it's not open slide down the menu
        // and don't allow the click
        if (!$(this).find("ul.sub-dropdown").is(":visible")) {
          $(this).find("> a").attr("aria-expanded", "true");
          $(this).find("ul.sub-dropdown").slideDown();
          $(this).find("ul.sub-dropdown").attr("aria-hidden", "false");
          $(this).find("ul.sub-dropdown > li > a").attr("tabindex", "0");
          $(this).addClass("expanded");
        }
      });

      cache.$menuPanelSubDropdown
        .find("> a")
        .on("click.panelDropdown", function (e) {
          if (!$(this).closest("li").hasClass("expanded")) {
            e.preventDefault();
          }
        });
      cache.$menuPanelSubDropdown
        .find("ul.sub-dropdown a")
        .on("click.panelDropdown", function (e) {
          e.stopPropagation();
        });

      // Promo resize
      cache.$promosSection.resize(StyleHatch.refreshFixTo);
    }
    function unbindUtilHeaderEvents() {
      // Search
      clearTimeout(config.blurTimer);
      cache.$searchLink.off("click.search");
      cache.$searchClose.off("click.search");
      cache.$searchInput.off("blur.search");

      // Mobile panel menu
      cache.$menuLink.off("click.panel");
      //cache.$menuOverlay.off('click.panel');

      // Collapsible panel navigation
      cache.$menuPanelDropdown.off("click.panelDropdown");
      cache.$menuPanelDropdown.find("> a").off("click.panelDropdown");
      cache.$menuPanelDropdown
        .find("ul.dropdown li:not(.has-sub-dropdown) a")
        .off("click.panelDropdown");

      cache.$menuPanelSubDropdown.off("click.panelDropdown");
      cache.$menuPanelSubDropdown.find("> a").off("click.panelDropdown");
      cache.$menuPanelSubDropdown
        .find("ul.sub-dropdown a")
        .off("click.panelDropdown");

      // Promo resize
      cache.$promosSection.removeResize(StyleHatch.refreshFixTo);
    }

    /*
     * Header
     * ------------------------
     */
    function initHeader() {
      // Adds line breaks to really long subnav text links
      cache.$subMenuLinks.each(function () {
        var $link = $(this);
        var linkText = $link.text();
        var linkTextWrapped = wordWrapper(linkText, 24, "<br/>\n");

        // Apply wrapped text
        // $link.html(linkTextWrapped);
      });

      // Prevent Safari from reopening menu when browsing back
      hideDropdown(cache.$dropdownParent);
    }
    /*
     * Dropdown open / close
     */
    function showDropdown($el) {
      // Hide previous
      hideDropdown($("." + config.dropdownActiveClass));

      var blockWidth = 0;
      $(".site-nav li").each(function () {
        var width = $(this).width();
        blockWidth += width;
      });
      var lefty = $(".has-dropdown").eq(0).offset().left;
      // go through each dropdown div and if it has a block header, then we adjust the width to allow mega menu
      $(".dropdown-div").each(function () {
        if ($(this).find(".block-header").length != 0) {
          $(this).width(blockWidth);
          $(this).css("padding-right", "1em");
          $(this).css("left", lefty);
        }
      });

      $el.addClass(config.dropdownActiveClass);

      $el.find(".dropdown-div").find(".block-header").show();
      // Accessiblity
      $el.find("> a").attr("aria-expanded", "true");
      $el.find("ul.dropdown").attr("aria-hidden", "false");
      $el.find("ul.dropdown > li > a").attr("tabindex", "0");

      var $dropdown = $el.find("ul.dropdown");
      $dropdown.css({
        left: "auto",
      });
      var dropdownEnd = $dropdown.offset().left + $dropdown.outerWidth();

      // Account for page edge padding
      var pageWidth = $(window).width() - 20;

      // Without border
      /* comment out since we no longer use these classes
      var siteWidth = cache.$header.width();
      var logoOffset = cache.$header.find(".logo-nav-contain").offset().left;

      if (siteWidth + 40 > $(window).width()) {
        siteWidth = $(window).width();
        logoOffset = -20;
      }

      pageWidth = siteWidth + logoOffset + 1;
 */
      if (dropdownEnd > pageWidth) {
        var rightEdge = "-" + (dropdownEnd - pageWidth) + "px";
        $dropdown.css({
          left: rightEdge,
        });
      }

      setTimeout(function () {
        cache.$body.on("touchstart", function () {
          hideDropdown($el);
        });
      }, 250);
    }
    function hideDropdown($el) {
      $el.removeClass(config.dropdownActiveClass);
      cache.$body.off("touchstart");

      // Accessiblity
      $el.find("> a").attr("aria-expanded", "false");
      $el.find("ul.dropdown").attr("aria-hidden", "true");
      $el.find("ul.dropdown > li > a").attr("tabindex", "-1");
      $(".block-header").each(function () {
        $(this).hide();
      });
    }
    // Sub dropdowns
    function showSubDropdown($el) {
      hideDropdown($("." + config.subDropdownActiveClass));

      $el.addClass(config.subDropdownActiveClass);

      // Accessiblity
      $el.find("> a").attr("aria-expanded", "true");
      $el.find("ul.sub-dropdown").attr("aria-hidden", "false");
      $el.find("ul.sub-dropdown > li > a").attr("tabindex", "0");

      // Check if partially in view
      //log($el.find('.sub-dropdown').offset().left, $el.find('.sub-dropdown').width());

      // Show subdropdown to the left if there isn't enough room
      var dropdownOffsetEdge =
        $el.find(".sub-dropdown").offset().left +
        $el.find(".sub-dropdown").width();
      var windowWidth = $(window).width();
      if (dropdownOffsetEdge > windowWidth) {
        $el.addClass("alternate-align");
      } else {
        $el.removeClass("alternate-align");
      }
    }
    function hideSubDropdown($el) {
      $el.removeClass(config.subDropdownActiveClass);
      $el.removeClass("alternate-align");
      // Accessiblity
      $el.find("> a").attr("aria-expanded", "false");
      $el.find("ul.sub-dropdown").attr("aria-hidden", "true");
      $el.find("ul.sub-dropdown > li > a").attr("tabindex", "-1");
    }
    /*
     * Events
     */
    function bindHeaderEvents() {
      // Dropdown
      cache.$dropdownParent.on(
        "mouseenter.dropdown touchstart.dropdown focusin.dropdown",
        function (e) {
          var $el = $(this);

          if (!$el.hasClass(config.dropdownActiveClass)) {
            e.preventDefault();
            showDropdown($el);
          }
        }
      );
      cache.$dropdownParent.on("mouseleave.dropdown", function (e) {
        e.preventDefault();
        hideDropdown($(this));
      });
      cache.$subMenuLinks.on("touchstart.dropdown", function (e) {
        // Prevent touchstart on body from firing instead of link
        e.stopImmediatePropagation();
      });

      // Subdropdowns
      cache.$subDropdownParent.on(
        "mouseenter.subdropdown touchstart.subdropdown focusin.subdropdown",
        function (e) {
          var $el = $(this);

          if (!$el.hasClass(config.subDropdownActiveClass)) {
            e.preventDefault();
            showSubDropdown($el);
          }
        }
      );
      cache.$subDropdownParent.on("mouseleave.subdropdown", function () {
        hideSubDropdown($(this));
      });
      cache.$subDropdownParent.on("touchstart.subdropdown", function (e) {
        // Prevent touchstart on body from firing instead of link
        e.stopImmediatePropagation();
      });

      if ($("html").hasClass("touchevents")) {
        cache.$subDropdownParent.children("a").on("click", function (e) {
          var $el = $(this);

          if (!$el.hasClass(config.subDropdownActiveClass)) {
            e.preventDefault();
            showSubDropdown($el);
          }
        });
      }

      // Focus out detect tabbing outside of dropdown or subdropdown
      cache.$subMenuLinks.on("focusout.dropdown", function (e) {
        if (e.relatedTarget == null) {
          hideDropdown($("." + config.dropdownActiveClass));
        } else {
          if (
            $(e.target).closest("li.has-dropdown")[0] !==
            $(e.relatedTarget).closest("li.has-dropdown")[0]
          ) {
            hideDropdown($("." + config.dropdownActiveClass));
          }
          if (
            $(e.target).closest("li.has-sub-dropdown")[0] !==
            $(e.relatedTarget).closest("li.has-sub-dropdown")[0]
          ) {
            hideSubDropdown($("." + config.subDropdownActiveClass));
          }
        }
      });
    }
    function unbindHeaderEvents() {
      // Dropdown
      cache.$dropdownParent.off(
        "mouseenter.dropdown touchstart.dropdown focusin.dropdown"
      );
      cache.$dropdownParent.off("mouseleave.dropdown");
      cache.$subMenuLinks.off("touchstart.dropdown");

      // Subdropdowns
      cache.$subDropdownParent.off(
        "mouseenter.subdropdown touchstart.subdropdown focusin.subdropdown"
      );
      cache.$subDropdownParent.off("mouseleave.subdropdown");
      cache.$subDropdownParent.off("touchstart.subdropdown");

      // Focus out detect tabbing outside of dropdown or subdropdown
      cache.$subMenuLinks.off("focusout.dropdown");
    }

    /*
     * fixTo - Complete header
     */
    function createFixTo() {
      var $headerSection = cache.$section;
      var $promosSection = cache.$promosSection;
      var $header = cache.$header;
      var $util = cache.$util;

      // Lock the util or header to the top on scroll
      var scrollLock = $header.data("scroll-lock");
      if (scrollLock == "util" || scrollLock == "header") {
        var mindElements = "";
        if ($promosSection.data("fixtoInstance")) {
          mindElements = "#shopify-section-promos, #shopify-section-promo-bar";
        }
        $util.fixTo("#page", {
          zIndex: 1000,
          mind: mindElements,
          top: 43,
        });
      }
      if (scrollLock == "header") {
        var mindElements = "header.util";
        if ($promosSection.data("fixtoInstance")) {
          mindElements =
            "header.util, #shopify-section-promos, #shopify-section-promo-bar";
        }
        $headerSection.fixTo("#page", {
          zIndex: 990,
          mind: mindElements,
        });
        $headerSection.resize(function () {
          if ($(this).width() <= 700) {
            $headerSection.fixTo("stop");
          } else {
            $headerSection.fixTo("start");
          }
        });
      }
    }
    function destroyFixTo() {
      // Destroy header locks
      var $fixToElements = $("header.util, #shopify-section-header").filter(
        function () {
          return $(this).data("fixtoInstance");
        }
      );
      if ($fixToElements.length) {
        $fixToElements.fixTo("destroy");
      }
    }
    function rebuildFixTo() {
      cacheSelectors();
      destroyFixTo();
      createFixTo();
    }

    function unload() {
      // Util
      closePanelMenu();
      unbindUtilHeaderEvents();
      // Header
      unbindHeaderEvents();
      destroyFixTo();
    }

    return {
      init: init,
      unload: unload,
      openSearch: openSearch,
      closeSearch: closeSearch,
      togglePanelMenu: togglePanelMenu,
      openPanelMenu: openPanelMenu,
      closePanelMenu: closePanelMenu,
      rebuildFixTo: rebuildFixTo,
    };
  })();

  /**
   * Footer
   * Global section
   */
  StyleHatch.FooterSection = (function () {
    function FooterSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      StyleHatch.Footer.init($container);
    }

    return FooterSection;
  })();
  StyleHatch.FooterSection.prototype = $.extend(
    {},
    StyleHatch.FooterSection.prototype,
    {
      onUnload: function (evt) {
        StyleHatch.Footer.unload(evt);
      },
    }
  );
  // Footer class
  StyleHatch.Footer = (function () {
    function init($container) {
      var $nestedMenu = $container.find("ul.nested-menu");
      $nestedMenu.initNestedMenu();
    }
    function unload(evt) {
      $nestedMenu.destroyNestedMenu();
    }

    return {
      init: init,
      unload: unload,
    };
  })();

  /**
   * Slideshow
   */
  StyleHatch.SlideshowSection = (function () {
    function SlideshowSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      StyleHatch.Slideshow.init($container);
    }

    return SlideshowSection;
  })();
  StyleHatch.SlideshowSection.prototype = $.extend(
    {},
    StyleHatch.SlideshowSection.prototype,
    {
      onUnload: function (evt) {
        StyleHatch.Slideshow.unload(evt);
      },
      onBlockSelect: function (evt) {
        StyleHatch.Slideshow.blockSelect(evt);
      },
      onBlockDeselect: function (evt) {
        StyleHatch.Slideshow.blockDeselect(evt);
      },
    }
  );
  // Slideshow Class
  StyleHatch.Slideshow = (function () {
    // Initialization
    function init($container) {
      var $carousel = $container.find(".slideshow-carousel");

      // Preload mobile or desktop slide images based on width
      var mobileWidth = 700;
      var $slideItem = $carousel.find(".slide__item");
      $(window).on("resize", function () {
        $slideItem.each(function (i) {
          var $responsiveImg;
          if ($(window).width() > mobileWidth) {
            $responsiveImg = $(this).find("img.slide__image-desktop");
          } else {
            $responsiveImg = $(this).find("img.slide__image-mobile");
            if ($responsiveImg.length < 1) {
              $responsiveImg = $(this).find("img.slide__image-desktop");
            }
          }

          if ($responsiveImg.hasClass("lazymanual")) {
            $responsiveImg
              .attr("src", $responsiveImg.attr("data-preload"))
              .removeAttr("data-preload");
            $responsiveImg.removeClass("lazymanual").addClass("lazyload");
          }
        });
      });
      $(window).trigger("resize");

      var flickityOptions = $carousel.data("flickity-options");
      // Pass options from data attribute object
      $carousel.flickity(flickityOptions);
      $carousel.parent().find(".flickity-page-dots.placeholder").remove();

      // Load YouTube videos
      var $videoSlides = $container.find(".slide__item-video");
      $videoSlides.each(function () {
        var $slideVideo = $(this).find(".slide__item-image");
        var videoId = $(this).data("video-id");
        var autoplayMobile = $(this).data("mobile-autoplay");
        var playsinline = 0;
        if (autoplayMobile) {
          playsinline = 1;
        }

        $slideVideo.YTPlayer({
          fitToBackground: false,
          videoId: videoId,
          repeat: true,
          mute: true,
          playerVars: {
            rel: 0,
            mute: 1,
            playsinline: playsinline,
            autoplay: 1,
          },
          callback: function () {
            $(window).trigger("resize");
          },
        });
      });
    }

    function blockSelect(evt) {
      var $block = $("#block-" + evt.detail.blockId);
      var $carousel = $block.closest(".slideshow-carousel");
      var slideIndex = $block.data("slide-index");
      // Pause flickity and select the current block
      $carousel.flickity("pausePlayer");
      $carousel.flickity("select", slideIndex, true, true);
      // Lazyload all images
      $carousel.find("img").removeClass(".lazymanual").addClass("lazyload");
    }
    function blockDeselect(evt) {
      var $block = $("#block-" + evt.detail.blockId);
      var $carousel = $block.closest(".slideshow-carousel");
      // Unpause player
      $carousel.flickity("unpausePlayer");
    }
    // Unload
    function unload(evt) {
      var $section = $(".slideshow-" + evt.detail.sectionId);
      var $carousel = $section.find(".slideshow-carousel");
      // Destroy flickity to be rebuilt
      $carousel.flickity("destroy");

      // Destroy YouTube
      var $slideVideo = $section.find(".slide__item-video .slide__item-image");
      // Destroy
      $slideVideo
        .removeData("yt-init")
        .removeData("ytPlayer")
        .removeClass("loaded");

      $(window).off("resize.YTplayer" + $slideVideo.ID);
      $(window).off("scroll.YTplayer" + $slideVideo.ID);

      $slideVideo.$body = null;
      $slideVideo.$node = null;
      $slideVideo.$YTPlayerString = null;
      $slideVideo.player = null;
    }

    // Public methods
    return {
      init: init,
      unload: unload,
      blockSelect: blockSelect,
      blockDeselect: blockDeselect,
    };
  })();

  /**
   * Hero Video
   */
  StyleHatch.HeroVideoSection = (function () {
    function HeroVideoSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");

      StyleHatch.HeroVideo.init($container);
    }

    return HeroVideoSection;
  })();
  StyleHatch.HeroVideoSection.prototype = $.extend(
    {},
    StyleHatch.HeroVideoSection.prototype,
    {
      onUnload: function (evt) {
        StyleHatch.HeroVideo.unload(evt);
      },
    }
  );
  // Slideshow Class
  StyleHatch.HeroVideo = (function () {
    // Initialization
    function init($container) {
      var $heroVideo = $container.find(".wrapper");
      var videoId = $container.data("video-id");
      var autoplayMobile = $container.data("mobile-autoplay");
      var playsinline = 0;
      if (autoplayMobile) {
        playsinline = 1;
      }
      $heroVideo.removeData("ytPlayer");

      $heroVideo.YTPlayer({
        fitToBackground: false,
        videoId: videoId,
        repeat: true,
        mute: true,
        playerVars: {
          rel: 0,
          mute: 1,
          playsinline: playsinline,
          autoplay: 1,
        },
      });
    }

    // Unload
    function unload(evt) {
      var $section = $(".slideshow-" + evt.detail.sectionId);
      var $heroVideo = $section.find(".wrapper");
      // Destroy
      $heroVideo
        .removeData("yt-init")
        .removeData("ytPlayer")
        .removeClass("loaded");
      $heroVideo.find(".ytplayer-container .ytplayer-shield").remove();
    }

    // Public methods
    return {
      init: init,
      unload: unload,
    };
  })();

  /**
   * Maps
   */
  StyleHatch.Maps = (function () {
    var config = {
      zoom: 14,
    };
    var apiStatus = null;
    var apiKey = null;
    var apiKeyReset = false;
    var mapsToLoad = [];

    var mapStyles = {
      standard: [],
      silver: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
      ],
      retro: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#ebe3cd",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#523735",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f1e6",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9b2a6",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#dcd2be",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ae9e90",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#93817c",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#a5b076",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#447530",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f1e6",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#fdfcf8",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#f8c967",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#e9bc62",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#e98d58",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#db8555",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#806b63",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8f7d77",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ebe3cd",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#b9d3c2",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#92998d",
            },
          ],
        },
      ],
      dark: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#181818",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1b1b1b",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#2c2c2c",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8a8a8a",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#373737",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#3c3c3c",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e4e4e",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d",
            },
          ],
        },
      ],
      night: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#242f3e",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#746855",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#242f3e",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#263c3f",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6b9a76",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#38414e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#212a37",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9ca5b3",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#746855",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#1f2835",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f3d19c",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#2f3948",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#17263c",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#515c6d",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#17263c",
            },
          ],
        },
      ],
      aubergine: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8ec3b9",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1a3646",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#64779e",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#334e87",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6f9ba5",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3C7680",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#304a7d",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#2c6675",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#255763",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#b0d5ce",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#3a4762",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#0e1626",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4e6d70",
            },
          ],
        },
      ],
    };

    var errors = {
      addressNoResults: StyleHatch.Strings.addressNoResults,
      addressQueryLimit: StyleHatch.Strings.addressQueryLimit,
      addressError: StyleHatch.Strings.addressError,
      authError: StyleHatch.Strings.authError,
    };

    var selectors = {
      section: '[data-section-type="maps"]',
      map: "[data-map]",
      mapOverlay: "[data-map-overlay]",
    };

    var classes = {
      mapError: "map-selection--load-error",
      errorMsg: "map-section__errors errors text-center",
    };

    // Global Google function for auth errors
    window.gm_authFailure = function () {
      if (!Shopify.designMode) {
        log("Google Maps authentication error", window.google, apiStatus);
        return;
      }

      $(selectors.section).addClass(classes.mapError);
      $(selectors.map).remove();
      $(selectors.mapOverlay).after(
        '<div class="' +
          classes.errorMsg +
          '">' +
          StyleHatch.Strings.authError +
          "</div>"
      );
    };

    function Map(container) {
      this.$container = $(container);
      this.$map = this.$container.find(selectors.map);
      this.key = this.$map.data("api-key");

      if (this.key != apiKey) {
        apiKey = this.key;
        apiStatus = null;
        apiKeyReset = true;
      }

      if (typeof this.key === "undefined") {
        return;
      }

      if (apiStatus === "loaded") {
        this.createMap();
      } else {
        mapsToLoad.push(this);

        if (apiStatus !== "loading") {
          apiStatus = "loading";
          if (typeof window.google === "undefined" || apiKeyReset) {
            $.getScript(
              "https://maps.googleapis.com/maps/api/js?key=" + this.key
            ).then(function () {
              apiStatus = "loaded";
              apiKeyReset = false;
              initAllMaps();
            });
          }
        }
      }
    }

    function initAllMaps() {
      $.each(mapsToLoad, function (index, instance) {
        instance.createMap();
      });
    }

    function geolocate($map) {
      var deferred = $.Deferred();
      var geocoder = new google.maps.Geocoder();
      var address = $map.data("address-setting");

      geocoder.geocode({ address: address }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          deferred.reject(status);
        }

        deferred.resolve(results);
      });

      return deferred;
    }

    Map.prototype = $.extend({}, Map.prototype, {
      createMap: function () {
        var $map = this.$map;
        var mapStyle = $map.data("map-style");

        return geolocate($map)
          .then(
            function (results) {
              var mapOptions = {
                zoom: config.zoom,
                center: results[0].geometry.location,
                draggable: false,
                clickableIcons: false,
                scrollwheel: false,
                disableDoubleClickZoom: true,
                disableDefaultUI: true,
                styles: mapStyles[mapStyle],
              };

              var map = (this.map = new google.maps.Map($map[0], mapOptions));
              var center = (this.center = map.getCenter());

              //eslint-disable-next-line no-unused-vars
              var marker = new google.maps.Marker({
                map: map,
                position: map.getCenter(),
              });

              google.maps.event.addDomListener(
                window,
                "resize",
                slate.utils.debounce(function () {
                  google.maps.event.trigger(map, "resize");
                  map.setCenter(center);
                  $map.removeAttr("style");
                }, 250)
              );
            }.bind(this)
          )
          .fail(function () {
            var errorMessage;

            switch (status) {
              case "ZERO_RESULTS":
                errorMessage = errors.addressNoResults;
                break;
              case "OVER_QUERY_LIMIT":
                errorMessage = errors.addresQueryLimit;
                break;
              case "REQUEST_DENIED":
                errorMessage = errors.authError;
                break;
              default:
                errorMessage = errors.addressError;
                break;
            }

            // Show errors only to merchant in the editor.
            if (Shopify.designMode) {
              $map
                .parent()
                .addClass(classes.mapError)
                .append(
                  '<div class="' +
                    classes.errorMsg +
                    '">' +
                    errorMessage +
                    "</div>"
                );
            }
          });
      },

      onUnload: function () {
        if (this.$map.length === 0) {
          return;
        }
        google.maps.event.clearListeners(this.map, "resize");
      },
    });

    return Map;
  })();

  /**
   * Page Section - any section that loads pages
   */
  StyleHatch.PageSection = (function () {
    function PageSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      StyleHatch.Page.init($container);
    }

    return PageSection;
  })();
  // Featured Text Class
  StyleHatch.Page = (function () {
    // Initialization
    function init($container) {
      // Apply fitVids
      $container.fitVids();
      // Possibly check for oembed data
    }

    // Unload
    function unload(evt) {
      //log('unload Page');
    }

    // Public methods
    return {
      init: init,
      unload: unload,
    };
  })();

  /**
   * Sections - Collection
   * ---------------------------------------------------------------------------
   * Feature collection
   */
  StyleHatch.FeaturedCollectionSection = (function () {
    function FeaturedCollectionSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    return FeaturedCollectionSection;
  })();
  StyleHatch.FeaturedCollectionSection.prototype = $.extend(
    {},
    StyleHatch.FeaturedCollectionSection.prototype,
    {
      onUnload: function (evt) {
        var $container = $("#section-" + evt.detail.sectionId);
        var id = $container.attr("data-section-id");
        $container.destroyProductBox();
      },
    }
  );

  StyleHatch.SimpleCollectionSection = (function () {
    function SimpleCollectionSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    return SimpleCollectionSection;
  })();
  StyleHatch.SimpleCollectionSection.prototype = $.extend(
    {},
    StyleHatch.SimpleCollectionSection.prototype,
    {
      onUnload: function (evt) {
        var $container = $("#section-" + evt.detail.sectionId);
        var id = $container.attr("data-section-id");

        $container.destroyProductBox();
      },
    }
  );

  /**
   * Instagram - instagram-section
   */

  StyleHatch.instagrams = {};
  StyleHatch.InstagramSection = (function () {
    function InstagramSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");
      var instagram = (this.instagram = "#Instagram-" + id);

      // Only support IE9 and above
      if ($("html").hasClass("lt-ie9")) {
        return false;
      }

      var $shotContainer = $container.find(".instagram-container");
      var $profileLink = $container.find("header a.button, footer a.button");
      var imageCount = $container.data("image-count");
      var accessToken = $container.data("instagram-access-token");
      var apiURL =
        "https://api.instagram.com/v1/users/self/media/recent/?access_token=" +
        accessToken +
        "&count=20";
      // Set how long the localStorage is valid for 12 hours
      var expireTime = 1000 * 60 * 60 * 12; // ms * s * m * 12 hours

      // Helper Text
      var addAccessToken = StyleHatch.Strings.instagramAddToken;
      var invalidAccessToken = StyleHatch.Strings.instagramInvalidToken;
      var rateLimitAccessToken = StyleHatch.Strings.instagramRateLimitToken;

      // AJAX call to load Instagram API data
      var getData = function () {
        // Check if access token exists
        if (accessToken) {
          $.ajax({
            url: apiURL,
            dataType: "jsonp",
            timeout: 5000,
            success: function (data) {
              switch (data.meta.code) {
                case 400:
                  if (Shopify.designMode) {
                    $shotContainer.attr("data-helper-text", invalidAccessToken);
                    storeWithExpiration.set(accessToken, data, expireTime);
                    $container.show();
                  }
                  break;
                case 429:
                  if (Shopify.designMode) {
                    $shotContainer.attr(
                      "data-helper-text",
                      rateLimitAccessToken
                    );
                    $container.show();
                  }
                  break;
                default:
                  loadImages(data);
                  storeWithExpiration.set(accessToken, data, expireTime);
              }
            },
          });
        } else {
          if (Shopify.designMode) {
            // Show helper with details of adding token
            $shotContainer.attr("data-helper-text", addAccessToken);
            $container.show();
          }
        }
      };

      // Load in all the recent media in the Instagram data
      var loadImages = function (data) {
        // Check to ensure valid data
        if (data.data) {
          if (data.data.length < imageCount) {
            var dataCount = data.data.length;
            var settingsCount = imageCount;
            var lastIndex = settingsCount - (settingsCount - dataCount);
            imageCount = data.data.length;

            // Remove the extra holders
            $container.find(".box").each(function (i) {
              if (i >= lastIndex) {
                $(this).hide();
              }
            });
          }
          for (var i = 0; i < imageCount; i++) {
            var images = data.data[i].images,
              // Thumbnail
              thumbnail = images.thumbnail.url,
              thumbnailWidth = images.thumbnail.width,
              // Low Resolution
              low_resolution = images.low_resolution.url,
              low_resolutionWidth = images.low_resolution.width,
              // Standard Resolution
              standard_resolution = images.standard_resolution.url,
              standard_resolutionWidth = images.standard_resolution.width;

            var link = data.data[i].link;
            var likes = data.data[i].likes.count;
            var comments = data.data[i].comments.count;

            var caption = "";
            if (data.data[i].caption) {
              caption = data.data[i].caption.text;
            }

            var $shot = $container.find(".box-" + i);
            var $shotImageContainer = $shot.find("figure > a");
            var $shotLinks = $shot.find("figure > a, li > a");
            var $shotCaption = $shot.find("figcaption > p");
            var $shotLikes = $shot.find("a.likes span.label");
            var $shotComments = $shot.find("a.comments span.label");

            // Add image
            $shotImageContainer.html('<div class="card__image lazyload">');
            var $shotImage = $shotImageContainer.find(".card__image");
            $shotImage.attr("data-sizes", "auto");
            $shotImage.attr(
              "data-bgset",
              thumbnail +
                " " +
                thumbnailWidth +
                "w, " +
                low_resolution +
                " " +
                low_resolutionWidth +
                "w, " +
                standard_resolution +
                " " +
                standard_resolutionWidth +
                "w"
            );

            // Set shot data
            $shotLinks.attr("href", link);
            $shotCaption.html(caption);
            $shotLikes.text(likes);
            $shotComments.text(comments);
          }
          var instagramFeed =
            "https://www.instagram.com/" + data.data[0].user.username;
          $profileLink.attr("href", instagramFeed);
          $profileLink.attr("target", "_blank");

          $container.show();
          $shotContainer.addClass("loaded");
        }
      };

      // localStorage - check to see if the api data exists and is current
      if (storeWithExpiration.get(accessToken) && !Shopify.designMode) {
        var data = storeWithExpiration.get(accessToken);
        loadImages(data);
      } else {
        getData();
      }

      StyleHatch.instagrams[instagram] = this;
      //$container.show();
    }

    return InstagramSection;
  })();
  StyleHatch.InstagramSection.prototype = $.extend(
    {},
    StyleHatch.InstagramSection.prototype,
    {
      onUnload: function () {
        delete StyleHatch.instagrams[this.instagram];
      },
    }
  );

  /**
   * GenericSection
   */
  StyleHatch.GenericSection = (function () {
    function GenericSection(container) {
      var $container = (this.$container = $(container));
      var id = $container.attr("data-section-id");

      StyleHatch.cacheSelectors();
    }

    return GenericSection;
  })();

  /**
   * Section - Templates
   * ---------------------------------------------------------------------------
   * Set up core functionality for template based sections
   */

  // Product Class
  StyleHatch.Product = (function () {
    function Product(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr("data-section-id");

      this.settings = {
        // Breakpoints from src/stylesheets/global/variables.scss.liquid
        enableHistoryState: $container.data("enable-history-state") || false,
        enableSwatch: $container.data("enable-swatch") || false,
        imageSize: "394x",
        imageZoomSize: null,
        namespace: ".product-" + sectionId,
        sectionId: sectionId,
        zoomEnabled: false,
        lightboxEnabled: false,
        productImageLightboxData: [],
      };

      this.selectors = {
        addToCartForm: "#AddToCartForm-" + sectionId,
        addToCart: "#AddToCart-" + sectionId,
        addToCartText: "#AddToCartText-" + sectionId,
        comparePrice: "#ComparePrice-" + sectionId,
        originalPrice: "#ProductPrice-" + sectionId,
        startingAtPrice: "#ProductPrice-" + sectionId + "-starting-at",
        // originalPriceContainer: "#ProductPrice-" + sectionId + "-container",
        SKU: ".variant-sku",
        originalSelectorId: "#ProductSelect-" + sectionId,
        productFeaturedImage: "#FeaturedImage-" + sectionId,
        productImageWrap: ".featured-container-" + sectionId,
        productPrices: ".product-single__price-" + sectionId,
        productThumbImages: ".product-single__thumbnail--" + sectionId,
        productPhoto: "#ProductPhoto-" + sectionId,
        productImage: "#ProductImage-" + sectionId,
        productThumbs: "#ProductThumbs-" + sectionId,
        quantityWrap: ".quantity-" + sectionId,
        quantity: ".quantity-select-" + sectionId,
        cartError: ".cart-error-" + sectionId,
        singleOptionSelector: ".single-option-selector-" + sectionId,
        cartButtons: "#CartButtons-" + sectionId,
        paymentButtonContainer: "#PaymentButtonContainer-" + sectionId,
        productSizeGuideLink: "a.product-size-guide-" + sectionId,
        productSizeGuideContent: "#product-size-guide-content-" + sectionId,
      };

      this._initSlider();

      // Stop parsing if we don't have the product json script tag when loading
      // section in the Theme Editor
      if (!$("#ProductJson-" + sectionId).html()) {
        return;
      }

      this.productSingleObject = JSON.parse(
        document.getElementById("ProductJson-" + sectionId).innerHTML
      );

      this.variantAvailability = JSON.parse(
        document.getElementById("AvailabilityJson-" + sectionId).innerHTML
      );

      this.settings.zoomEnabled = $(this.selectors.productImageWrap).hasClass(
        "featured-zoom"
      );
      if (Modernizr.objectfit) {
        this.settings.lightboxEnabled = $(this.selectors.productImageWrap).data(
          "lightbox"
        );
      }
      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }

      this._initVariants();
      this._initQuanitySelect();

      if ($(this.selectors.productSizeGuideLink).length) {
        $(this.selectors.productSizeGuideLink).magnificPopup({
          items: {
            src: $(this.selectors.productSizeGuideContent),
            type: "inline",
          },
        });
      }
    }

    Product.prototype = $.extend({}, Product.prototype, {
      _initVariants: function () {
        var options = {
          $container: this.$container,
          enableHistoryState:
            this.$container.data("enable-history-state") || false,
          enableSwatch: this.$container.data("enable-swatch"),
          singleOptionSelector: this.selectors.singleOptionSelector,
          originalSelectorId: this.selectors.originalSelectorId,
          product: this.productSingleObject,
          variantAvailability: this.variantAvailability,
        };
        this.variants = new slate.Variants(options);
        this.$container.on(
          "variantChange" + this.settings.namespace,
          this._updateAddToCart.bind(this)
        );
        this.$container.on(
          "variantImageChange" + this.settings.namespace,
          this._updateImages.bind(this)
        );
        this.$container.on(
          "variantPriceChange" + this.settings.namespace,
          this._updatePrice.bind(this)
        );
        this.$container.on(
          "variantSKUChange" + this.settings.namespace,
          this._updateSKU.bind(this)
        );

        if (options.enableSwatch) {
          this.$container.on(
            "variantChange" + this.settings.namespace,
            this._updateSwatches.bind(this)
          );
        }
      },

      _initQuanitySelect: function () {
        // Quantity Selector
        var $quantitySelect = $(this.selectors.quantity);
        $quantitySelect.each(function () {
          var $el = $(this);
          var $quantityDown = $el.find(".adjust-minus");
          var $quantityUp = $el.find(".adjust-plus");
          var $quantity = $el.find("input.quantity");

          var quantity = $quantity.val();

          $quantityDown.on("click", function (e) {
            quantity = $quantity.val();
            if (quantity > 1) {
              quantity--;
              $quantity.val(quantity);
            }
            e.preventDefault();
          });

          $quantityUp.on("click", function (e) {
            quantity = $quantity.val();
            quantity++;
            $quantity.val(quantity);

            e.preventDefault();
          });
        });
      },

      _initSlider: function () {
        var $imageSlider = this.$container.find(".product-image--slider");
        if ($imageSlider.length) {
          var sliderOptions = JSON.parse($imageSlider.data("flickity-options"));
          var enabled = $imageSlider.data("slider-enabled");
          var zoomEnabled = $imageSlider.data("zoom");
          var lightboxEnabled = $imageSlider.data("lightbox");
          var $initial = $imageSlider.find("[data-initial-image]");
          var initialIndex = $initial
            .parent()
            .find(".product-image--cell")
            .index($initial);
          sliderOptions.initialIndex = initialIndex;
          if (!enabled) {
            sliderOptions.draggable = false;
            sliderOptions.selectedAttraction = 1;
            sliderOptions.friction = 1;
          }

          $initial.removeAttr("data-initial-image");
          $imageSlider.flickity(sliderOptions);

          if (!Modernizr.touchevents && zoomEnabled) {
            var $easyzoom = $(".product-image--cell").easyZoom();
            $imageSlider
              .on("dragStart.flickity", function (event) {
                var $zoom = $(event.currentTarget).find(".easyzoom-flyout");
                $zoom.addClass("hidden");
              })
              .on("dragEnd.flickity", function (event) {
                var $zoom = $(event.currentTarget).find(".easyzoom-flyout");
                $zoom.removeClass("hidden");
              });
          }

          $imageSlider.on("dragStart.flickity", function (event, pointer) {
            document.ontouchmove = function (e) {
              e.preventDefault();
            };
          });
          $imageSlider.on("dragEnd.flickity", function (event, pointer) {
            document.ontouchmove = function (e) {
              return true;
            };
          });
          $imageSlider.find("a").on("click", function (e) {
            e.preventDefault();
          });

          if (lightboxEnabled && Modernizr.objectfit) {
            $imageSlider.on("staticClick.flickity", function () {
              $imageSlider.flickity("toggleFullscreen");
            });
            $imageSlider.on(
              "fullscreenChange.flickity",
              function (event, isFullscreen) {
                if (isFullscreen) {
                  $imageSlider.parent().addClass("is-fullscreen");
                } else {
                  $imageSlider.parent().removeClass("is-fullscreen");
                }
              }
            );
          }
        }

        // Flickity thumb slider
        var $thumbSlider = this.$container.find(".product-thumb--slider");
        if ($thumbSlider.length) {
          var sliderOptions = $thumbSlider.data("flickity-options");
          var enabled = $thumbSlider.data("slider-enabled");

          // If the grouped thumbnails option is turned on
          if (enabled) {
            var $initial = $thumbSlider.find("[data-initial-image]");
            var initialIndex = $initial
              .parent()
              .find(".product-thumb--cell")
              .index($initial);
            sliderOptions.initialIndex = initialIndex;

            $initial.removeAttr("data-initial-image");
            $thumbSlider.flickity(sliderOptions);
            $thumbSlider.find("a").on("click", function (e) {
              e.preventDefault();
            });
            $thumbSlider.on("dragStart.flickity", function (event, pointer) {
              document.ontouchmove = function (e) {
                e.preventDefault();
              };
            });
            $thumbSlider.on("dragEnd.flickity", function (event, pointer) {
              document.ontouchmove = function (e) {
                return true;
              };
            });
          } else {
            var $initial = $thumbSlider.find("[data-initial-image]");

            $initial.addClass("is-nav-selected");
            $initial.removeAttr("data-initial-image");
            $thumbSlider.find("a").on("click", function (e) {
              var $thumb = $(this);
              var $cell = $thumb.parent();
              var id = $cell.data("image-id");
              var selector = '[data-image-id="' + id + '"]';
              $imageSlider.flickity("selectCell", selector, false, true);

              $cell
                .parent()
                .find("." + "is-nav-selected")
                .removeClass("is-nav-selected");
              $cell.addClass("is-nav-selected");
              e.preventDefault();
            });

            // On slide change update thumbnail
            $imageSlider.on("change.flickity", function (event, index) {
              var $slider = $(this);
              var $cell = $slider.find(".product-image--cell").eq(index);
              var imageId = $cell.data("image-id");

              $thumbSlider
                .find("." + "is-nav-selected")
                .removeClass("is-nav-selected");
              var $activeThumb = $thumbSlider.find(
                '[data-image-id="' + imageId + '"]'
              );
              $activeThumb.addClass("is-nav-selected");
            });
          }

          // IE fix for object-fit
          if (!Modernizr.objectfit) {
            $thumbSlider.find(".product-thumb--cell a").each(function () {
              var $container = $(this);
              var imgUrl = $container.find("img").prop("src");

              $container.css({
                "background-image": "url(" + imgUrl + ")",
              });

              $container.addClass("fallback-object-fit");
            });
          }
        }

        // Basic non flickity thumbnails
        var $thumbs = this.$container.find(".thumbnails");
        if ($thumbs.length) {
          $thumbs.find("a").on("click", function (e) {
            var $thumb = $(this);
            var id = $thumb.data("image-id");
            var selector = '[data-image-id="' + id + '"]';
            $imageSlider.flickity("selectCell", selector, false, true);

            $thumb
              .parent()
              .parent()
              .find("." + "active")
              .removeClass("active");
            $thumb.addClass("active");

            e.preventDefault();
          });

          // On slide change update thumbnail
          $imageSlider.on("change.flickity", function (event, index) {
            var $slider = $(this);
            var $cell = $slider.find(".product-image--cell").eq(index);
            var imageId = $cell.data("image-id");

            $thumbs.find("." + "active").removeClass("active");
            var $activeThumb = $thumbs.find(
              '[data-image-id="' + imageId + '"]'
            );
            $activeThumb.addClass("active");

            if ($thumbs.data("enable-group") && $thumbs.is(":visible")) {
              setTimeout(function () {
                $activeThumb.scrollIntoView();
              }, 200);
            }
          });

          // Resize thumbnail container on slider height change
          if ($thumbs.data("enable-group")) {
            $thumbs.css({
              "overflow-y": "scroll",
              position: "relative",
            });

            $imageSlider.resize(function () {
              $thumbs.height($(this).find(".flickity-viewport").height());
            });
            setTimeout(function () {
              $thumbs.find("a.active").scrollIntoView();
            }, 200);

            $thumbs.find("li").each(function (i) {
              $(this)
                .delay(i * 100)
                .fadeTo(200, 1);
            });
          }
        }
      },

      _updateAddToCart: function (evt) {
        var variant = evt.variant;

        if (!variant) {
          $(this.selectors.addToCart)
            .addClass("disabled")
            .prop("disabled", true);
          $(this.selectors.addToCartText).text(StyleHatch.Strings.soldOut);
          $(this.selectors.productPrices)
            .addClass("visibility-hidden")
            .attr("aria-hidden", "false");
          if (dynamicCheckout) {
            $(this.selectors.cartButtons).removeClass("cart-buttons__enabled");
          }

          return;
        }

        var variantTitle = variant.title;
        // we have to get title + sold out and see if it is now sold out based on custom inventory lookup
        var soldOutTitle = variantTitle + " (SOLD OUT)";
        var soldOut = 0;

        $('label[for="SingleOptionSelector-0"]')
          .parent()
          .find("select option")
          .each(function () {
            if (soldOutTitle === $(this).text()) {
              soldOut = 1;
            }
          });

        var productTitle = $("h1").text().trim();
        var dynamicCheckout = $(this.selectors.addToCartForm).data(
          "dynamic-checkout"
        );

        $(this.selectors.cartError).hide();
        $(this.selectors.productPrices)
          .removeClass("visibility-hidden")
          .attr("aria-hidden", "true");

        const availability = this.variantAvailability?.[variant.id];

        if (
          (variant.available && soldOut === 0 && availability.in_stock) ||
          availability.oversell
        ) {
          $(this.selectors.addToCart)
            .removeClass("disabled")
            .prop("disabled", false);
          $(this.selectors.addToCartText).text(StyleHatch.Strings.addToCart);
          //  $(this.selectors.quantityWrap).removeAttr('style');

          showBulkAtc(availability);

          if (dynamicCheckout) {
            $(this.selectors.cartButtons).addClass("cart-buttons__enabled");
          }
          // hide the substitution
          $(".reg_va_holder").hide();
          // show delarea w/ proper text
          $(".online-icon.delivery").attr(
            "src",
            "https://cdn.shopify.com/s/files/1/0743/6343/t/211/assets/DeliveryTruckIcon.png?v=122457683641422656801674559938"
          );
          $(".flex-delivery span").text("Free Shipping Available $59+");
          $(".flex-delivery span").css("color", "black");
        } else {
          // The variant doesn't exist, disable submit button and change the text.
          // This may be an error or notice that a specific variant is not available.
          $(".flex-delivery span").text("Not Available Online");
          $(".flex-delivery span").css("color", "grey");
          $(".flex-delivery span").css("opacity", ".8");
          $(".online-icon.delivery").attr(
            "src",
            "https://cdn.shopify.com/s/files/1/0743/6343/files/DeliveryTruckCancel.png?v=1653215829"
          );
          $("#tomit_inventory_list").css("display", "inline-block");
          $(this.selectors.addToCart)
            .addClass("disabled")
            .prop("disabled", true);

          const currentAtcText = $(this.selectors.addToCartText).text().trim();

          if (!currentAtcText.toLowerCase().includes("coming soon")) {
            $(this.selectors.addToCartText).text(StyleHatch.Strings.soldOut);
          }

          //   $(this.selectors.quantityWrap).css('visibility','hidden');
          // we need to also hide the bulk button and dynamic checkout button
          $("#AddToCartBulk-product-template").css("display", "none");
          if (dynamicCheckout) {
            $(this.selectors.cartButtons).removeClass("cart-buttons__enabled");
          }
          // we also need to show the relevant next best flavor instead
          var variant_title = variant.title;
          // hide all my containers first
          $(".reg_va_holder").hide();
          // show matching container
          $(".reg_va_container").each(function () {
            var reg_title = $(this).attr("reg-va-title");
            if (reg_title === variant_title) {
              $(this).parent().show();
            }
          });
        }

        $(".selected-product").css("display", "block");
      },

      _updateSwatches: function (evt) {
        var currentVariant = evt.variant;
        var $swatch = $(evt.currentTarget).find("[type=radio]");
        var $radioWrapper = $(evt.currentTarget).find(".radio-wrapper");
        var Product = this;

        $swatch.each(function () {
          var $swatch = $(this);

          var optionPosition = $swatch.data("position");
          var currentOption = "option" + optionPosition;
          var otherOptions = ["option1", "option2", "option3"].filter(function (
            option
          ) {
            return option != currentOption;
          });

          var available = false;
          Product.productSingleObject.variants.forEach(function (variant) {
            if (!variant.available) {
              return;
            }

            if (variant[currentOption] !== $swatch.val()) {
              return;
            }

            if (variant[otherOptions[0]] !== currentVariant[otherOptions[0]]) {
              return;
            }

            if (variant[otherOptions[1]] !== currentVariant[otherOptions[1]]) {
              return;
            }

            available = true;
          });

          if (optionPosition !== 1) {
            if (available) {
              $swatch.parent().removeClass("soldout");
            } else {
              $swatch.parent().addClass("soldout");
            }
          }
        });

        $radioWrapper.each(function () {
          var $radioWrapper = $(this);
          var currentOption = "option" + $radioWrapper.data("option-index");
          var $labelValue = $radioWrapper.find(
            ".single-option-radio__label--value"
          );

          if ($labelValue.length) {
            var value = currentVariant[currentOption];
            $labelValue.text(value);
          }
        });
      },

      _updateImages: function (evt) {
        var variant = evt.variant;

        if (!variant || !variant.featured_image) {
          return;
        }

        var sizedImgUrl = theme.Images.getSizedImageUrl(
          variant.featured_image.src,
          this.settings.imageSize
        );
        var zoomSizedImgUrl;

        if (this.settings.zoomEnabled) {
          zoomSizedImgUrl = theme.Images.getSizedImageUrl(
            variant.featured_image.src,
            this.settings.imageZoomSize
          );
        }

        var $thumbnail = $(
          this.selectors.productThumbImages +
            '[data-image-id="' +
            variant.featured_image.id +
            '"]'
        );

        // Slider
        var $imageSlider = this.$container.find(".product-image--slider");
        if ($imageSlider.length) {
          var selector = '[data-image-id="' + variant.featured_image.id + '"]';
          $imageSlider.flickity("selectCell", selector, false, true);
        }
      },

      _updatePrice: function (evt) {
        var variant = evt.variant;

        // Update the product price
        // const startingAtPrice = $(this.selectors.startingAtPrice)?.html()?.trim();
        const formattedPrice = theme.Currency.formatMoney(
          variant.price,
          StyleHatch.currencyFormat
        );

        $(this.selectors.originalPrice).html(formattedPrice);

        // if (startingAtPrice === formattedPrice) {
        //   $(this.selectors.originalPriceContainer).hide();
        // } else {
        //   $(this.selectors.originalPriceContainer).show();
        // }

        // Apply any currency conversions
        if (StyleHatch.currencyConverter) {
          // clear out previous currency attributes
          removeDataAttributes($(this.selectors.originalPrice));
          Currency.convertAll(
            StyleHatch.shopCurrency,
            $("[name=currencies]").val()
          );
          $(".selected-currency").text(Currency.currentCurrency);
        }

        // Update and show the product's compare price if necessary
        if (variant.compare_at_price > variant.price) {
          $(this.selectors.comparePrice)
            .find("span.money")
            .html(
              theme.Currency.formatMoney(
                variant.compare_at_price,
                StyleHatch.currencyFormat
              )
            );
          $(this.selectors.comparePrice).css({ display: "inline" });
        } else {
          $(this.selectors.comparePrice).css({ display: "none" });
        }
      },

      _updateSKU: function (evt) {
        var variant = evt.variant;

        // Update the sku
        $(this.selectors.SKU).html(variant.sku);
      },

      onUnload: function () {
        this.$container.off(this.settings.namespace);
        // destroys on close
        $.magnificPopup.close();
        if (this.settings.zoomEnabled) {
          _destroyZoom($(this.selectors.productImageWrap));
        }
        if (StyleHatch.ajaxCartEnable) {
          StyleHatch.AjaxCart.unload();
        }
        this.$container.destroyProductBox();
      },
    });

    function _enableZoom($el) {
      var $easyzoom = $el.easyZoom();
    }

    function _destroyZoom($el) {
      var easyZoomApi = $el.easyZoom().data("easyZoom");
      easyZoomApi.teardown();
    }

    return Product;
  })();

  // Collection (template) Class
  StyleHatch.Collection = (function () {
    var constants = {
      SORT_BY: "sort_by",
      DEFAULT_SORT: "title-ascending",
      VIEW: "view",
    };

    var selectors = {
      sortSelection: "#SortBy",
      defaultSort: ".sort-by__default-sort",
      viewChange: ".change-view",
      advancedFilter: ".advanced-filter a",
      filterCollection: ".mobile-aside-container > a.button.simple",
      mobileAside: ".mobile-aside-container aside",
      productBox: ".box.product .image-table",
      nestedMenu: "ul.nested-menu",
    };

    function Collection(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr("data-section-id");

      this.$sortSelect = $(selectors.sortSelection, $container);
      this.defaultSort = this._getDefaultSortValue();

      this.$viewButton = $(selectors.viewChange);

      this.$sortSelect.on("change", this._onSortChange.bind(this));
      this.$viewButton.on("click", this._onViewChange);

      this.$productbox = $(selectors.productBox, $container);

      this._initSidebar();
      this._initAdvancedTags();

      $container.productBox();

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    Collection.prototype = $.extend({}, Collection.prototype, {
      _onSortChange: function (evt) {
        var query = "";

        this.sort = this._getSortValue();

        if (this.sort !== this.defaultSort) {
          query = [constants.SORT_BY + "=" + this.sort];
        }

        var url = document.URL;
        var hasParams = url.indexOf("?") > -1;

        if (hasParams) {
          document.location.href = replaceUrlParam(
            url,
            constants.SORT_BY,
            this.sort
          );
        } else {
          var search = (document.location.search = query.length
            ? "?" + query
            : "");
          document.location.href = this.$filterSelect.val() + search;
        }
      },
      _getSortValue: function () {
        return this.$sortSelect.val() || this.defaultSort;
      },
      _getDefaultSortValue: function () {
        return (
          $(selectors.defaultSort, this.$container).val() ||
          constants.DEFAULT_SORT
        );
      },
      _onViewChange: function (evt) {
        var query = "";

        var view = $(this).data("view");
        var url = document.URL;
        var hasParams = url.indexOf("?") > -1;

        if (hasParams) {
          window.location = replaceUrlParam(url, "view", view);
        } else {
          window.location = url + "?view=" + view;
        }

        evt.preventDefault();
      },
      _initSidebar: function () {
        $(selectors.filterCollection).on("click", function (e) {
          $(selectors.mobileAside).slideToggle();
          e.preventDefault();
        });

        this.$container.find(selectors.nestedMenu).initNestedMenu();
      },
      _initAdvancedTags: function () {
        var $filters = $(selectors.advancedFilter),
          $tag,
          tagGroup,
          tagHandle,
          $activeTagInGroup;

        $filters.on("click", function (e) {
          $tag = $(this).parent();
          tagGroup = $tag.data("group");
          tagHandle = $tag.data("handle");
          $activeTagInGroup = $('.active[data-group="' + tagGroup + '"]');

          // If the tag clicked is not already active and its group contains an active tag
          // we will swap tag within the group
          if (!$tag.hasClass("active") && $activeTagInGroup.size()) {
            e.preventDefault();
            location.href = location.href
              // swap tag
              .replace($activeTagInGroup.data("handle"), tagHandle)
              // go back to page 1
              .replace(/(&page=\d+)|(page=\d+&)|(\?page=\d+$)/, "");
          }
        });
      },
      onUnload: function () {
        this.$sortSelect.off("change");
        this.$viewButton.off("click");
        $(selectors.advancedFilter).off("click");
        this.$container.destroyProductBox();
        this.$container.find(selectors.nestedMenu).destroyNestedMenu();
      },
    });

    return Collection;
  })();

  // List collections (template) Class
  StyleHatch.ListCollections = (function () {
    var selectors = {
      productBox: ".box .image-table",
    };

    function ListCollections(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr("data-section-id");
      var layout = $container.data("layout");
      var $cardImage = $container.find(".card__image");

      this.$productbox = $(selectors.productBox, $container);

      if (layout == "preview") {
        $container.productBox();
      }

      if (StyleHatch.currencyConverter) {
        StyleHatch.CurrencyConverter.init();
      }
    }

    ListCollections.prototype = $.extend({}, ListCollections.prototype, {
      onUnload: function () {
        $container.destroyProductBox();
      },
    });

    return ListCollections;
  })();

  // Blog and Article (template) Class
  StyleHatch.BlogArticle = (function () {
    var selectors = {
      filterCollection: ".mobile-aside-container > a.button.simple",
      mobileAside: ".mobile-aside-container aside",
      nestedMenu: "ul.nested-menu",
    };

    function BlogArticle(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr("data-section-id");
      this._initSidebar();
      StyleHatch.videoLayout();
    }

    BlogArticle.prototype = $.extend({}, BlogArticle.prototype, {
      _initSidebar: function () {
        $(selectors.filterCollection).on("click", function (e) {
          $(selectors.mobileAside).slideToggle();
          e.preventDefault();
        });

        this.$container.find(selectors.nestedMenu).initNestedMenu();
      },
      onUnload: function () {
        $(selectors.filterCollection).off("click");
        this.$container.find(selectors.nestedMenu).destroyNestedMenu();
      },
    });

    return BlogArticle;
  })();

  // Password (template) Class
  StyleHatch.Password = (function () {
    function Password(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr("data-section-id");

      var $loginForm = $("#login_form");

      $(".login-popup").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: "mfp-fade",
        closeBtnInside: false,
        callbacks: {
          afterClose: function () {
            $("a").blur();
            $loginForm.find(".errors").remove();
          },
        },
      });

      // On MailChimp form submit
      $("#mc-embedded-subscribe-form").on("submit", function () {
        $("p.signup-message").hide();
        $("p.thanks-message").show();
        $(this).find(".input-row").hide();
      });

      // If error in password form
      if ($loginForm.find(".errors").length > 0) {
        $(".login-popup").magnificPopup("open");
      }
    }

    Password.prototype = $.extend({}, Password.prototype, {
      onUnload: function () {
        // destroys on close
        $.magnificPopup.close();
        $("#mc-embedded-subscribe-form").off("submit");
      },
    });

    return Password;
  })();

  // Cart (template) Class
  StyleHatch.Cart = (function () {
    function Cart(container) {
      var $container = (this.$container = $(container));
      var sectionId = $container.attr("data-section-id");
      StyleHatch.quantitySelect();
    }

    Cart.prototype = $.extend({}, Cart.prototype, {
      onUnload: function () {},
    });

    return Cart;
  })();

  /**
   * Classes - complex functionality
   * ---------------------------------------------------------------------------
   * AjaxCart
   * Currency
   */

  /*
   * Add product to cart without page refresh
   */
  StyleHatch.AjaxCart = (function () {
    var selectors = {
      body: "body",
      util: "header.util",
      cartPreview: "header.util .cart-preview",
      addToCartForm: "[data-AddToCartForm] > form",
      addToCartButton: "[data-AddToCartForm]",
      cartButton: "[data-CartButton]",
      cartCount: "#CartCount",
      cartCountDesk: "#CartCount-Desktop",
      cartCost: "#CartCost",
    };
    var config = {
      addURL: "/cart/add.js",
      cartURL: "/cart.js",
      clearURL: "/cart/clear.js",
    };
    var cache = {};
    function cacheSelectors() {
      cache = {
        $body: $(selectors.body),
        $util: $(selectors.util),
        $cartPreview: $(selectors.cartPreview),
        $addToCartForm: $(selectors.addToCartForm),
        $addToCartButton: $(selectors.addToCartButton),
        $cartButton: $(selectors.cartButton),
        $cartCount: $(selectors.cartCount),
        $cartCountDesk: $(selectors.cartCountDesk),
        $cartCost: $(selectors.cartCost),
      };
    }

    function init() {
      cacheSelectors();
      bindEvents();
    }

    function submitCart($form) {
      var $form = $form;
      var productTitle = $("h1").text().trim();
      var variantTitle = $(".single-option-selector option:selected").val();

      var $cartError = $form.find(".cart-error");
      // Change button to added to cart and disabled
      var cartButtonText = $form.find("[data-AddToCartText]").html();
      var cartButtonAddedText = $form
        .find("[data-AddToCartText]")
        .attr("data-added");
      var cartButtonAddingText = $form
        .find("[data-AddToCartText]")
        .attr("data-adding");

      $form.find("[data-AddToCart]").addClass("added").prop("disabled", true);
      $form.find("[data-AddToCartText]").html(cartButtonAddingText);

      $cartError.hide();
      // before we post anything, we need to be sure that it is not tobacco or spearmint
      var addToCart = 1;
      // if (productTitle === 'Esco Bars Mesh 2500 Puff Disposable Vape' && (variantTitle === 'Tobacco' || variantTitle === 'Spearmint')) {
      // // now that we have identified we are esco bar and a limited flavor, we need to check the current cart
      // // loop through cart and get SKUs; check quantity and see if 1 more unit will be above the threshold
      //   $('.cart-item-titles').each(function() {
      //     var SKU = $(this).attr('item-data-sku');
      //     var input = parseInt($(this).find('input').val());
      //     if (SKU.indexOf('EB-T5') > -1 && variantTitle === 'Tobacco') {
      //       if (input >= 8) {
      //         addToCart = 0;
      //         alert('Due to popular demand, we are limiting orders to 8 Esco Bar Tobaccos or less.');
      //       }
      //     }
      //     else if (SKU.indexOf('EB-S5') && variantTitle === 'Spearmint') {
      //      if (input >= 15) {
      //        addToCart = 0;
      //        alert('Due to popular demand, we are limiting orders to 15 Esco Bar Spearmints or less.');
      //      }
      //     }
      //   });
      // }
      if (addToCart == 1) {
        updateVitalsStickyAddToCartStyles();

        $.post(
          "/cart/add.js",
          $form.serialize(),
          function (data) {
            // Last product added data
            const parsedData = JSON.parse(data);

            // Try adding the USB cable after an item is added, this will insure that it shows up in the cart when it is updated.
            processCartRules(parsedData, () => refreshCart({ $form }));
          },
          "text"
        ).error(function (data) {
          if (typeof data != "undefined" && typeof data.status != "undefined") {
            var responseText = JSON.parse(data.responseText);
            $cartError.html(
              "<strong>" +
                responseText.message +
                ":</strong> <em>" +
                responseText.description +
                "<em>"
            );
            $cartError.slideDown();
          }
        });
        return false;
        // manually submit the form
        // $form.addClass('noAJAX');
        // $form.submit();
        // Change cart button text back
        // Auto hide after 6000ms
      }
      var resetCartButton;
      resetCartButton = setTimeout(function () {
        $form
          .find("[data-AddToCart]")
          .removeClass("added")
          .prop("disabled", false);
        $form.find("[data-AddToCartText]").html(cartButtonText);
      }, 500);
    }

    function clearCart() {
      $.post(config.clearURL);
    }

    function updateCartButton(cartData) {
      var $cartButton = cache.$cartButton;
      var $cartCount = cache.$cartCount;
      var $cartCost = cache.$cartCost;
      var $cartCountDesk = cache.$cartCountDesk;

      var itemCount = cartData.item_count;
      var totalPrice = theme.Currency.formatMoney(
        cartData.total_price,
        StyleHatch.currencyFormat
      );

      $cartCount.text(itemCount);
      $cartCountDesk.text(itemCount);
      $(".h2-item-count").text(itemCount);
      $cartCost.removeClass("money");
      $cartCost.html('<span class="money">' + totalPrice + "</span>");

      // If Currency convertor has been added
      if (StyleHatch.currencyConverter) {
        Currency.convertAll(
          StyleHatch.shopCurrency,
          jQuery("[name=currencies]").val()
        );
      }
    }
    function showCartPreview(productData, cartData) {
      var $util = cache.$util;
      var $cartPreview = cache.$cartPreview;

      clearTimeout(cache.hideCartPreview);
      cache.$cartPreview.hide();

      // Cart Data
      var itemCount = cartData.item_count;
      var totalPrice = theme.Currency.formatMoney(
        cartData.total_price,
        StyleHatch.currencyFormat
      );

      // Recent Added Product Data
      var productData = JSON.parse(productData);
      var productTitle = productData.product_title;
      var productVariant = productData.variant_options;
      var productImage = productData.image;
      var productURL = productData.url;
      var productPrice = theme.Currency.formatMoney(
        productData.price,
        StyleHatch.currencyFormat
      );
      var productQuantity = productData.quantity;
      var productTotal = theme.Currency.formatMoney(
        productData.line_price,
        StyleHatch.currencyFormat
      );

      // Set Product Details
      var $productImage = $cartPreview.find(".product-image").empty();
      $productImage.append(
        '<img src="' + productImage + '" alt="' + productTitle + '">'
      );
      $productImage.attr("href", productURL);

      var $productTitle = $cartPreview.find(".product-title");
      $productTitle.html(productTitle);
      $productTitle.attr("href", productURL);

      var $productVarient = $cartPreview.find(".product-variant").empty();
      $.each(productVariant, function () {
        var variantStr = this;
        if (variantStr.toLowerCase().indexOf("default title") < 0) {
          $productVarient.show();
          $productVarient.append("<li>" + variantStr + "</li>");
        } else {
          $productVarient.hide();
        }
      });

      var $productPrice = $cartPreview.find(".product-price");
      $productPrice.removeClass("money");
      $productPrice.html('<span class="money">' + productPrice + "</span>");

      // Set Cart Totals
      var $itemCount = $cartPreview.find(".item-count");
      $itemCount.text(itemCount);

      if (itemCount > 1) {
        $cartPreview.find(".count.plural").show();
        $cartPreview.find(".count.singular").hide();
      } else {
        $cartPreview.find(".count.plural").hide();
        $cartPreview.find(".count.singular").show();
      }

      var $totalPrice = $cartPreview.find(".total-price");
      $totalPrice.html('<span class="money">' + totalPrice + "</span>");

      var utilHeight = $util.height();
      $cartPreview.css({
        top: utilHeight,
      });

      // Fade in the preview
      $cartPreview.fadeIn(300);

      // Auto hide after 6000ms
      cache.hideCartPreview = setTimeout(function () {
        $cartPreview.fadeOut(300);
      }, 6000);

      $cartPreview.find("a.continue-shopping").on("click", function (e) {
        $cartPreview.fadeOut(300);
        e.preventDefault();
      });

      // If Currency convertor has been added
      if (StyleHatch.currencyConverter) {
        Currency.convertAll(
          StyleHatch.shopCurrency,
          jQuery("[name=currencies]").val()
        );
      }
    }

    /*
     * Events
     */
    function bindEvents() {
      cache.$addToCartForm.each(function () {
        $(this).on("submit", function (e) {
          var $form = $(this);
          submitCart($form);
          e.preventDefault();
        });
      });
    }
    function unbindEvents() {
      cache.$addToCartForm.off("submit");
    }

    function unload() {
      unbindEvents();
      clearTimeout(cache.hideCartPreview);
      cache.$cartPreview.hide();
    }

    return {
      init: init,
      clearCart: clearCart,
      unload: unload,
    };
  })();

  /*
   * Currency converter
   */
  StyleHatch.CurrencyConverter = (function () {
    var selectors = {
      body: "body",
      money: "span.money",
    };
    var config = {
      enabled: false,
    };
    var cache = {};
    function cacheSelectors() {
      cache = {
        $body: $(selectors.body),
        $money: $(selectors.money),
      };
    }

    // Initialization
    function init() {
      cacheSelectors();
      convert();
    }

    // Methods
    function convert() {
      // Get current currency based on cookie
      config.cookieCurrency = Currency.cookie.read();

      // Make sure customer account pages have proper spans
      $("span.money span.money").each(function () {
        $(this).parents(selectors.money).removeClass("money");
      });

      /* Saving the current price */
      cache.$money.each(function () {
        if (Currency.currentCurrency !== "") {
          $(this).attr(
            "data-currency-" + Currency.currentCurrency,
            $(this).html()
          );
        } else {
          $(this).attr(
            "data-currency-" + StyleHatch.shopCurrency,
            $(this).html()
          );
        }
      });

      // If there's no cookie.
      if (config.cookieCurrency == null) {
        if (StyleHatch.shopCurrency !== StyleHatch.defaultCurrency) {
          Currency.convertAll(
            StyleHatch.shopCurrency,
            StyleHatch.defaultCurrency
          );
        } else {
          Currency.currentCurrency = StyleHatch.defaultCurrency;
        }
      } else if (
        $("[name=currencies]").size() &&
        $(
          "[name=currencies] option[value=" + config.cookieCurrency + "]"
        ).size() === 0
      ) {
        // If the cookie value does not correspond to any value in the currency dropdown.
        Currency.currentCurrency = StyleHatch.shopCurrency;
        Currency.cookie.write(StyleHatch.shopCurrency);
      } else if (config.cookieCurrency === StyleHatch.shopCurrency) {
        Currency.currentCurrency = StyleHatch.shopCurrency;
      } else {
        Currency.convertAll(StyleHatch.shopCurrency, config.cookieCurrency);
      }

      // On currency change
      $("[name=currencies]")
        .val(Currency.currentCurrency)
        .change(function () {
          var newCurrency = $(this).val();
          Currency.convertAll(Currency.currentCurrency, newCurrency);
          $(".selected-currency").text(Currency.currentCurrency);

          // If the currency is the store currency, hide the cart disclaimer
          if ($("p.currency-at-checkout").length > 0) {
            if (Currency.currentCurrency == StyleHatch.shopCurrency) {
              $("p.currency-at-checkout").hide();
            } else {
              $("p.currency-at-checkout").show();
            }
          }
        });

      // Update selected currency
      $("[name=currencies]").val(Currency.currentCurrency).change();
    }

    // Public methods
    return {
      init: init,
      config: config,
      convert: convert,
    };
  })();

  /**
   * Slate & Theme Functionality
   * ------------------------------------------------------------------------------
   */
  window.theme = window.theme || {};
  window.slate = window.slate || {};

  /**
   * Image Helper Functions
   * -----------------------------------------------------------------------------
   * A collection of functions that help with basic image operations.
   *
   */
  theme.Images = (function () {
    /**
     * Preloads an image in memory and uses the browsers cache to store it until needed.
     *
     * @param {Array} images - A list of image urls
     * @param {String} size - A shopify image size attribute
     */

    function preload(images, size) {
      if (typeof images === "string") {
        images = [images];
      }

      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        this.loadImage(this.getSizedImageUrl(image, size));
      }
    }

    /**
     * Loads and caches an image in the browsers cache.
     * @param {string} path - An image url
     */
    function loadImage(path) {
      new Image().src = path;
    }

    /**
     * Swaps the src of an image for another OR returns the imageURL to the callback function
     * @param image
     * @param element
     * @param callback
     */
    function switchImage(image, element, callback) {
      var size = this.imageSize(element.src);
      var imageUrl = this.getSizedImageUrl(image.src, size);

      if (callback) {
        callback(imageUrl, image, element); // eslint-disable-line callback-return
      } else {
        element.src = imageUrl;
      }
    }

    /**
     * +++ Useful
     * Find the Shopify image attribute size
     *
     * @param {string} src
     * @returns {null}
     */
    function imageSize(src) {
      var match = src.match(
        /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
      );

      if (match !== null) {
        return match[1];
      } else {
        return null;
      }
    }

    /**
     * +++ Useful
     * Adds a Shopify size attribute to a URL
     *
     * @param src
     * @param size
     * @returns {*}
     */
    function getSizedImageUrl(src, size) {
      if (size == null) {
        return src;
      }

      if (size === "master") {
        return this.removeProtocol(src);
      }

      var match = src.match(
        /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
      );

      if (match != null) {
        var prefix = src.split(match[0]);
        var suffix = match[0];

        return this.removeProtocol(prefix[0] + "_" + size + suffix);
      }

      return null;
    }

    function removeProtocol(path) {
      return path.replace(/http(s)?:/, "");
    }

    return {
      preload: preload,
      loadImage: loadImage,
      switchImage: switchImage,
      imageSize: imageSize,
      getSizedImageUrl: getSizedImageUrl,
      removeProtocol: removeProtocol,
    };
  })();

  /**
   * Currency Helpers
   * -----------------------------------------------------------------------------
   * A collection of useful functions that help with currency formatting
   *
   * Current contents
   * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
   *
   * Alternatives
   * - Accounting.js - http://openexchangerates.github.io/accounting.js/
   *
   */

  theme.Currency = (function () {
    var moneyFormat = "${{amount}}"; // eslint-disable-line camelcase

    function formatMoney(cents, format) {
      if (typeof cents === "string") {
        cents = cents.replace(".", "");
      }
      var value = "";
      var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
      var formatString = format || moneyFormat;

      function formatWithDelimiters(number, precision, thousands, decimal) {
        precision = slate.utils.defaultTo(precision, 2);
        thousands = slate.utils.defaultTo(thousands, ",");
        decimal = slate.utils.defaultTo(decimal, ".");

        if (isNaN(number) || number == null) {
          return 0;
        }

        number = (number / 100.0).toFixed(precision);

        var parts = number.split(".");
        var dollarsAmount = parts[0].replace(
          /(\d)(?=(\d\d\d)+(?!\d))/g,
          "$1" + thousands
        );
        var centsAmount = parts[1] ? decimal + parts[1] : "";

        return dollarsAmount + centsAmount;
      }

      switch (formatString.match(placeholderRegex)[1]) {
        case "amount":
          value = formatWithDelimiters(cents, 2);
          break;
        case "amount_no_decimals":
          value = formatWithDelimiters(cents, 0);
          break;
        case "amount_with_comma_separator":
          value = formatWithDelimiters(cents, 2, ".", ",");
          break;
        case "amount_no_decimals_with_comma_separator":
          value = formatWithDelimiters(cents, 0, ".", ",");
          break;
        case "amount_no_decimals_with_space_separator":
          value = formatWithDelimiters(cents, 0, " ");
          break;
      }

      return formatString.replace(placeholderRegex, value);
    }

    return {
      formatMoney: formatMoney,
    };
  })();

  /**
   * Utility helpers
   * -----------------------------------------------------------------------------
   * A collection of useful functions for dealing with arrays and objects
   *
   * @namespace utils
   */

  slate.utils = {
    /**
     * Return an object from an array of objects that matches the provided key and value
     *
     * @param {array} array - Array of objects
     * @param {string} key - Key to match the value against
     * @param {string} value - Value to get match of
     */
    findInstance: function (array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
    },

    /**
     * Remove an object from an array of objects by matching the provided key and value
     *
     * @param {array} array - Array of objects
     * @param {string} key - Key to match the value against
     * @param {string} value - Value to get match of
     */
    removeInstance: function (array, key, value) {
      var i = array.length;
      while (i--) {
        if (array[i][key] === value) {
          array.splice(i, 1);
          break;
        }
      }

      return array;
    },

    /**
     * _.compact from lodash
     * Remove empty/false items from array
     * Source: https://github.com/lodash/lodash/blob/master/compact.js
     *
     * @param {array} array
     */
    compact: function (array) {
      var index = -1;
      var length = array == null ? 0 : array.length;
      var resIndex = 0;
      var result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    },

    /**
     * _.defaultTo from lodash
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
     *
     * @param {*} value - Value to check
     * @param {*} defaultValue - Default value
     * @returns {*} - Returns the resolved value
     */
    defaultTo: function (value, defaultValue) {
      return value == null || value !== value ? defaultValue : value;
    },

    /**
     * _.debounce from underscore
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     *
     * @param {*} func - Function to call
     * @param {*} wait - ms delay (250)
     * @param {*} immediate - bool
     */

    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
  };

  /**
   * Variant Selection scripts
   * ------------------------------------------------------------------------------
   *
   * Handles change events from the variant inputs in any `cart/add` forms that may
   * exist. Also updates the master select and triggers updates when the variants
   * price or image changes.
   *
   * @namespace variants
   */

  slate.Variants = (function () {
    /**
     * Variant constructor
     *
     * @param {object} options - Settings from `product.js`
     */
    function Variants(options) {
      this.$container = options.$container;
      this.product = options.product;
      this.singleOptionSelector = options.singleOptionSelector;
      this.originalSelectorId = options.originalSelectorId;
      this.enableHistoryState = options.enableHistoryState;
      this.enableSwatch = options.enableSwatch;
      this.variantAvailability = options.variantAvailability;
      this.currentVariant = this._getVariantFromOptions();

      $(this.singleOptionSelector, this.$container).on(
        "change",
        this._onSelectChange.bind(this)
      );
    }

    Variants.prototype = $.extend({}, Variants.prototype, {
      /**
       * Get the currently selected options from add-to-cart form. Works with all
       * form input elements.
       *
       * @return {array} options - Values of currently selected variants
       */
      _getCurrentOptions: function () {
        var currentOptions = $.map(
          $(this.singleOptionSelector, this.$container),
          function (element) {
            var $element = $(element);
            var type = $element.attr("type");
            var currentOption = {};

            if (type === "radio" || type === "checkbox") {
              if ($element[0].checked) {
                currentOption.value = $element.val();
                currentOption.index = $element.data("index");

                return currentOption;
              } else {
                return false;
              }
            } else {
              currentOption.value = $element.val();
              currentOption.index = $element.data("index");

              return currentOption;
            }
          }
        );

        // remove any unchecked input values if using radio buttons or checkboxes
        currentOptions = slate.utils.compact(currentOptions);

        return currentOptions;
      },

      /**
       * Find variant based on selected values.
       *
       * @param  {array} selectedValues - Values of variant inputs
       * @return {object || undefined} found - Variant object from product.variants
       */
      _getVariantFromOptions: function () {
        var selectedValues = this._getCurrentOptions();
        var variants = this.product.variants;
        var found = false;

        variants.forEach(function (variant) {
          var satisfied = true;
          var options = variant.options;

          selectedValues.forEach(function (option) {
            if (satisfied) {
              satisfied = option.value === variant[option.index];
            }
          });

          if (satisfied) {
            found = variant;
          }
        });

        return found || null;
      },

      /**
       * Event handler for when a variant input changes.
       */
      _onSelectChange: function () {
        /*
        if ($(".flavor-list")[0]) {
          var flavorFound = 0;
          var flavor = $(".single-option-selector option:selected")
            .attr("value")
            .toLowerCase();
          flavor = flavor.replace(/ /g, "-");
          flavor = flavor
            .replace(/"/g, "")
            .replace(/'/g, "")
            .replace(/\(|\)/g, "");
            // for certain devices, we need to replace the % if it is in the flavor title
            flavor = flavor.replace('%','');
          var flavorFound = 0;
        //  console.log('my new flavor is ' + flavor);
          // if my product is Binaries Cabin and we have a 5% only variant, we must auto select it if it's not already selected
          var productId = $('#ProductSection-product-template').attr('data-productid');
          if (productId === '6812436201537') {
            console.log('my flavor is ' + flavor);
            // now that we know it's binaries, we have to look to see if it has 5 only in the flavor name
            // if the current mg is undefined, it needs to be reset to 3%
            var currentmg = $('select[data-index="option2"] option:selected').attr('value');
           console.log(currentmg);
            
            if (typeof(currentmg) === 'undefined') {
            $('select[data-index="option2"]').find('option').eq(0).prop('selected',true);
            }
            if (flavor.indexOf('5-only') > -1) {
              console.log('I think have 5 only in title');
              // flavor contains 5 only description and now we need to make sure the second lookup is selected
              $('select[data-index="option2"]').find('option').eq(1).prop('selected',true);
            }
          }
          /*
          $(".flavor-list li").each(function () {
            var thisFlavor = $(this).attr("class");
            if (thisFlavor === flavor) {
              var desc = $(this).find(".flavor-desc").text();
              $(".flavor-holder").text(desc);
              flavorFound = 1;
            }
          });
          if (flavorFound === 1) {
            $(".flavor-holder").removeAttr("style");
          } else {
            $(".flavor-holder").hide();
          }
          
        }
        */

        var variant = this._getVariantFromOptions();

        this.$container.trigger({
          type: "variantChange",
          variant: variant,
        });

        if (!variant) {
          return;
        }

        $(".variant-selector-label").removeClass("variant-selector-text-white");

        this._updateMasterSelect(variant);
        this._updateImages(variant);
        this._updatePrice(variant);
        this._updateSKU(variant);
        this.currentVariant = variant;
        this._updatePaymentButton(variant);

        if (this.enableHistoryState) {
          this._updateHistoryState(variant);
        }

        if ($(".sticky-select").length > 0) {
          var selectedOption = $(
            ".single-option-selector option:selected"
          ).attr("value");
          var productTitle = $("h1").text().trim();

          var selectedText = $(
            ".single-option-selector option:selected"
          ).text();

          const availability = this.variantAvailability?.[variant.id];

          if (selectedText.indexOf("SOLD OUT") > -1) {
            $(".stickyATC").text("SOLD OUT");
            $(".stickyATC").addClass("soldout");
            // we also need to make sure the buttons are also showing sold out as well because of custom inventory functions
            $("#AddToCart-product-template").addClass("disabled");
            $("#AddToCart-product-template").find("span").text("SOLD OUT");
            $("#AddToCart-product-template").attr("disabled", "disabled");
            $("#AddToCartBulk-product-template").attr("display", "none");
          } else {
            $(".stickyATC").text("ADD TO CART");
            $(".stickyATC").removeClass("soldout");
            $("#AddToCart-product-template").removeClass("disabled");
            $("#AddToCart-product-template").find("span").text("ADD TO CART");
            $("#AddToCart-product-template").removeAttr("disabled");
            showBulkAtc(availability);
          }
          if (selectedText.indexOf("SOLD OUT") > -1) {
            // now that we have identified this is tobacco esco bar, we show a pop up
            $(".prod-variant-sold-out").text(
              productTitle + " " + selectedOption
            );
            if (
              $($('.cart-up-inner-flex[data-variant-id="' + variant.id + '"]'))
                .length > 0
            ) {
              soldoutPop(selectedOption, variant.id);
              setTimeout(function () {
                let flexContainer = document.querySelector(
                  ".product-up-info.active"
                );

                if (flexContainer) {
                  let initialHeight = flexContainer.offsetHeight;
                  let initialWidth = flexContainer.offsetWidth;
                  flexContainer.style.height = initialHeight + "px";

                  $(".product-up-info").each(function () {
                    if ($(this).hasClass("carts")) {
                    } else {
                      $(this).css("height", flexContainer.offsetHeight);
                      $(this).css("width", flexContainer.offsetWidth);
                    }
                  });
                } else {
                  console.error("Element not found.");
                }
              }, 500);
            }
          }
          $(".sticky-select option").each(function () {
            var thisVal = $(this).attr("value");
            if (selectedOption === thisVal) {
              $(this).prop("selected", true);
              $(this).attr("selected", "selected");
              //  $('.sticky-select').change();
            } else {
              $(this).prop("selected", false);
              $(this).removeAttr("selected");
            }
          });
        }
      },

      /**
       * Trigger event when variant image changes
       *
       * @param  {object} variant - Currently selected variant
       * @return {event}  variantImageChange
       */
      _updateImages: function (variant) {
        this.$container.trigger({
          type: "variantImageChange",
          variant: variant,
        });
      },

      /**
       * Trigger event when variant price changes.
       *
       * @param  {object} variant - Currently selected variant
       * @return {event} variantPriceChange
       */
      _updatePrice: function (variant) {
        this.$container.trigger({
          type: "variantPriceChange",
          variant: variant,
        });
      },

      /**
       * Trigger event when variant sku changes.
       *
       * @param  {object} variant - Currently selected variant
       * @return {event} variantSKUChange
       */
      _updateSKU: function (variant) {
        if (this.currentVariant != undefined) {
          if (variant.sku === this.currentVariant.sku) {
            return;
          }
        }

        this.$container.trigger({
          type: "variantSKUChange",
          variant: variant,
        });
      },

      _updatePaymentButton: function (variant) {
        if (this.currentVariant != undefined) {
          const paymentButton = document.querySelector(".payment-button");

          if (paymentButton) {
            paymentButton.removeAttribute("class", "visually-hidden");
          }
        } else {
          document
            .querySelector(".payment-button")
            .setAttribute("class", "visually-hidden");
        }
      },

      /**
       * Update history state for product deeplinking
       *
       * @param  {variant} variant - Currently selected variant
       * @return {k}         [description]
       */
      _updateHistoryState: function (variant) {
        if (!history.replaceState || !variant) {
          return;
        }

        var newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?variant=" +
          variant.id;
        window.history.replaceState({ path: newurl }, "", newurl);
      },

      /**
       * Update hidden master select of variant change
       *
       * @param  {variant} variant - Currently selected variant
       */
      _updateMasterSelect: function (variant) {
        $(this.originalSelectorId, this.$container)[0].value = variant.id;
      },
    });

    return Variants;
  })();

  /**
   * Global functionality
   * ---------------------------------------------------------------------------
   */

  /*
   * Basic plugins to handle responsive product images
   */
  $.fn.extend({
    // product grid item click events
    productBox: function () {
      var $productBox = $(this).find(".box.product figure");
      $productBox.on("click", function (e) {
        // go to product URL unless clicking on vendor link
        if ($(e.target).is(".vendor") || $(e.target).parent().is(".vendor")) {
          // log('is vendor');
        } else {
          e.preventDefault();
          var productURL = $(this).find("a").attr("href");
          // Open link in new window for tabs
          if (e.shiftKey || e.ctrlKey || e.metaKey) {
            window.open(productURL, "_blank");
          } else {
            window.location = productURL;
          }
        }
      });
      // IE fix for object-fit
      if (!Modernizr.objectfit) {
        $productBox.find(".product_card__image-wrapper").each(function () {
          var $container = $(this),
            $altImg = $container.find(".product_card__image.alt"),
            imgUrl = $container.find("img").prop("src");
          $altImg.hide();
          $container.addClass("ie-fallback lazyload");
        });
      }
    },
    // remove product box
    destroyProductBox: function () {
      var $productBox = $(this).find(".box.product figure");
      $productBox.off("click");
    },

    // Nested menu
    initNestedMenu: function () {
      var $nestedNav = $(this);
      var $nestedLink = $nestedNav.find('a[aria-haspopup="true"]');

      var _closeCurrentChild = function ($menu) {
        var $expandedItem = $menu.find("li.has-dropdown.expanded");
        if ($expandedItem.length > 0) {
          $expandedItem.removeClass("expanded");

          var $expandedItemLink = $expandedItem.find("> a");
          $expandedItemLink.attr("aria-expanded", "false");

          var $dropdown = $expandedItem.find("> ul.dropdown");
          $dropdown.attr("aria-hidden", "true");
          $dropdown.slideUp();

          var $dropdownLinks = $dropdown.find("a");
          $dropdownLinks.attr("tabindex", "-1");
          _closeCurrentGrandchild($menu);
        }
      };
      var _closeCurrentGrandchild = function ($menu) {
        var $expandedItem = $menu.find("li.has-sub-dropdown.expanded");
        if ($expandedItem.length > 0) {
          $expandedItem.removeClass("expanded");

          var $expandedItemLink = $expandedItem.find("> a");
          $expandedItemLink.attr("aria-expanded", "false");

          var $dropdown = $expandedItem.find("> ul.sub-dropdown");
          $dropdown.attr("aria-hidden", "true");
          $dropdown.slideUp();

          var $dropdownLinks = $dropdown.find("a");
          $dropdownLinks.attr("tabindex", "-1");
          _closeCurrentGrandchild($menu);
        }
      };

      $nestedLink.on("click", function (e) {
        var $el = $(this);
        var $parentItem = $el.parent();
        var $dropdown = $parentItem.find("> ul");
        var $dropdownLinks = $parentItem.find("> ul > li > a");
        var $menu = $el.closest("ul.nested-menu");

        if ($el.attr("aria-expanded") !== "true") {
          e.preventDefault();

          if ($parentItem.hasClass("has-dropdown")) {
            // child level
            _closeCurrentChild($menu);
          } else {
            // grandchild level
            _closeCurrentGrandchild($menu);
          }

          // Element changes
          $el.attr("aria-expanded", "true");

          // Parent changes
          $parentItem.addClass("expanded");

          // Dropdown changes
          $dropdown.attr("aria-hidden", "false");
          $dropdownLinks.attr("tabindex", "0");
          $dropdown.slideDown();
        }
      });
    },
    destroyNestedMenu: function () {
      var $nestedNav = $(this);
      var $nestedLink = $nestedNav.find('a[aria-haspopup="true"]');
      $nestedLink.off("click");
    },
  });
  /*
   * Refresh all fixTo elements
   * - called when elements slide in/out
   */
  StyleHatch.refreshFixTo = function () {
    StyleHatch.Promos.refreshFixTo();
    var $fixToElements = $("*").filter(function () {
      return $(this).data("fixtoInstance");
    });
    // Only refresh the ones _running
    $fixToElements.each(function (i) {
      if ($(this).data("fixto-instance")._running) {
        $(this).fixTo("refresh");
      }
    });
  };
  // Apply fitvids
  StyleHatch.videoLayout = function () {
    $(".rte").fitVids();
  };
  // Customer account logins
  StyleHatch.loginForms = function () {
    function showRecoverPasswordForm() {
      StyleHatch.cache.$recoverPasswordForm.show();
      StyleHatch.cache.$customerLoginForm.hide();
    }

    function hideRecoverPasswordForm() {
      StyleHatch.cache.$recoverPasswordForm.hide();
      StyleHatch.cache.$customerLoginForm.show();
    }

    StyleHatch.cache.$recoverPasswordLink.on("click", function (evt) {
      evt.preventDefault();
      showRecoverPasswordForm();
      StyleHatch.updateHash("recover");
    });

    StyleHatch.cache.$hideRecoverPasswordLink.on("click", function (evt) {
      evt.preventDefault();
      hideRecoverPasswordForm();
      StyleHatch.updateHash();
    });

    // Allow deep linking to recover password form
    if (StyleHatch.getHash() == "#recover") {
      showRecoverPasswordForm();
    }
  };

  // Template specific initalization
  StyleHatch.initTemplates = function () {
    var $body = StyleHatch.cache.$body;

    // Grab the template name from the body
    var template = $body.data("template");

    // Execute specific functionality
    switch (template) {
      case "addresses":
        StyleHatch.initCustomerAddressTemplate();
        break;

      default:
      //log('Template: Default');
    }
  };
  // Customer Address Page
  StyleHatch.initCustomerAddressTemplate = function () {
    if (StyleHatch.addressJSValidation) {
      var $submit = $('.customer-address input[type="submit"]');

      $submit.on("click", function (e) {
        var $form = $(this).closest("form");

        // Required fields
        var $lastName = $form.find('input[name="address[last_name]"]');
        var $address1 = $form.find('input[name="address[address1]"]');
        var $city = $form.find('input[name="address[city]"]');
        var $country = $form.find('select[name="address[country]"]');
        var $province = $form.find('select[name="address[province]"]');
        var $zip = $form.find('input[name="address[zip]"]');

        if (!$lastName.val()) {
          $lastName.addClass("required");
        }
        if (!$address1.val()) {
          $address1.addClass("required");
        }
        if (!$city.val()) {
          $city.addClass("required");
        }
        if ($country.val() == "---") {
          $country.addClass("required");
        }

        // Check to see if province is showing
        if ($province.closest(".input-row").is(":visible")) {
          if (
            !$province.val() ||
            $province.val() == "---" ||
            $province.val() == ""
          ) {
            $province.addClass("required");
          }
        }

        if (!$zip.val()) {
          $zip.addClass("required");
        }

        // Check for focus to clear required
        var $required = $form.find("input.required, select.required");
        $required.on("focus", function () {
          $(this).removeClass("required");
        });

        // If any required inputs are still here prevent submission
        if ($required.length > 0) {
          $form.find("div.errors").parent().show();
          e.preventDefault();
        } else {
          $form.find("div.errors").parent().hide();
        }
      });
    }
  };
  // Utilities
  StyleHatch.updateHash = function (hash) {
    if (hash) {
      window.location.hash = "#" + hash;
      $("#" + hash)
        .attr("tabindex", -1)
        .focus();
    } else {
      window.location.hash = "";
    }
  };
  StyleHatch.getHash = function () {
    return window.location.hash;
  };
  // Still used by cart page
  StyleHatch.quantitySelect = function () {
    // Quantity Selector
    var $quantitySelect = $(".quantity-select");
    $quantitySelect.each(function () {
      var $el = $(this);
      var $quantityDown = $el.find(".adjust-minus");
      var $quantityUp = $el.find(".adjust-plus");
      var $quantity = $el.find("input.quantity");

      var quantity = $quantity.val();

      $quantityDown.on("click", function (e) {
        quantity = $quantity.val();
        if (quantity > 1) {
          quantity--;
          $quantity.val(quantity);
        }
        e.preventDefault();
      });

      $quantityUp.on("click", function (e) {
        quantity = $quantity.val();
        quantity++;
        $quantity.val(quantity);

        e.preventDefault();
      });
    });
  };
  // Reset passwords (store accounts)
  StyleHatch.resetPasswordSuccess = function () {
    StyleHatch.cache.$passwordResetSuccess.show();
  };

  /**
   * Primary Initialization
   * ---------------------------------------------------------------------------
   */
  $(document).ready(function () {
    StyleHatch.init();
  });
})(jq223);

$(document).ready(function () {
  Shopify.Cart = Shopify.Cart || {};
  Shopify.Cart.Attribute = {};

  Shopify.Cart.Attribute.set = function () {
    $.ajax({
      type: "POST",
      url: "/cart/update.js",
      data: { attributes: { "Free amber Device": "Yes" } },
      dataType: "json",
    });
  };

  Shopify.Cart.Attribute.remove = function () {
    $.ajax({
      type: "POST",
      url: "/cart/update.js",
      data: { attributes: { "Free amber Device": "" } },
      dataType: "json",
    });
  };

  $("#freeDevice").click(function () {
    if ($(this).is(":checked")) {
      Shopify.Cart.Attribute.set();
    } else {
      Shopify.Cart.Attribute.remove();
    }
  });
});
const selectVariantByClickingImage = {
  // Create variant images from productJson object
  _createVariantImage: function (product) {
    const variantImageObject = {};
    product.variants.forEach((variant) => {
      if (
        typeof variant.featured_image !== "undefined" &&
        variant.featured_image !== null
      ) {
        const variantImage = variant.featured_image.src
          .split("?")[0]
          .replace(/http(s)?:/, "");
        variantImageObject[variantImage] =
          variantImageObject[variantImage] || {};
        product.options.forEach((option, index) => {
          const optionValue = variant.options[index];
          const optionKey = `option-${index}`;
          if (
            typeof variantImageObject[variantImage][optionKey] === "undefined"
          ) {
            variantImageObject[variantImage][optionKey] = optionValue;
          } else {
            const oldValue = variantImageObject[variantImage][optionKey];
            if (oldValue !== null && oldValue !== optionValue) {
              variantImageObject[variantImage][optionKey] = null;
            }
          }
        });
      }
    });
    return variantImageObject;
  },
  _updateVariant: function (event, id, product, variantImages) {
    const arrImage = event.target.src
      .split("?")[0]
      .replace(/http(s)?:/, "")
      .split(".");
    const strExtention = arrImage.pop();
    const strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/, "");
    const strNewImage = `${arrImage.join(".")}.${strRemaining}.${strExtention}`;
    // HC fixing issues with selected images 07 Sep '21

    /*     if (typeof variantImages[strNewImage] !== 'undefined') {
      product.variants.forEach((option, index) => {
        const optionValue = variantImages[strNewImage][`option-${index}`];
        if (optionValue !== null && optionValue !== undefined) {
          const selects = document.querySelectorAll('#'+ id + ' [class*=single-option-selector]');
          console.log(selects[index])
          const options = selects[index].options;
          
          for (let option, n = 0; (option = options[n]); n += 1) {
            if (option.value === optionValue) {
              selects[index].selectedIndex = n;
              selects[index].dispatchEvent(new Event('change'));
              break;
            }
          }
        }
      });
          }
    product.variants.forEach((option, index) => {
      const optionValue = variantImages[strNewImage][`option-${index}`];
      if (optionValue !== null && typeof optionValue !== undefined) {
        document.querySelector(`input[value="${optionValue}"]`).click();
      } 
    }); */
  },
  _selectVariant: function () {
    const productJson = document.querySelectorAll("[id^=ProductJson-");
    if (productJson.length > 0) {
      productJson.forEach((product) => {
        const sectionId = product.id.replace(
          "ProductJson-",
          "shopify-section-"
        );
        const thumbnails = document.querySelectorAll(
          "#" + sectionId + ' img[src*="/products/"]'
        );
        if (thumbnails.length > 1) {
          const productObject = JSON.parse(product.innerHTML);
          const variantImages = this._createVariantImage(productObject);
          // need to check variants > 1
          if (productObject.variants.length > 1) {
            thumbnails.forEach((thumbnail) => {
              thumbnail.addEventListener("click", (e) =>
                this._updateVariant(e, sectionId, productObject, variantImages)
              );
            });
          }
        }
      });
    }
  },
};

if (document.readyState !== "loading") {
  selectVariantByClickingImage._selectVariant();
} else {
  document.addEventListener(
    "DOMContentLoaded",
    selectVariantByClickingImage._selectVariant()
  );
}

$(document).on("click", ".slider-close", function (e) {
  $(".slider-main").hide();
  $(".inner-cart").hide();
  $("body").removeAttr("style");
  $("html").removeAttr("style");
  $(".grey-parent").hide();
});
$("#CartButton, #CartButton-Desktop").click(function (e) {
  e.preventDefault();
  $("body").css("overflow", "hidden");
  showCart();
  // get cart details so we can determine if upsell needed
  jQuery.getJSON("/cart.js", function (cart) {
    determineUpsell(cart);
  });
});

$(document).on("keyup", ".slider-quantity", function (e) {
  e.preventDefault();
  $(this).attr("value", $(this).val());
  var thisSlider = $(this);
  var variantID = $(this).parent().parent().attr("data-variant-id");
  var currentQty = parseInt($(this).attr("value"));
  var prodTitle = $(this)
    .parent()
    .parent()
    .parent()
    .find(".cart-item-product-title")
    .text();

  if (currentQty === 0) {
    $(this).parent().parent().parent().parent().remove();
  }
  if (prodTitle.indexOf("10 Pack") > -1) {
    if (currentQty === 3 || currentQty > 3) {
      alert("Sorry you cannot add more than three 10 packs to your cart");
      var currentQty = 3;
    }
  } else if (prodTitle.indexOf("10 Pack") === -1) {
  }

  $.ajax({
    type: "POST",
    url: "/cart/change.js",
    cache: false,
    data: { quantity: currentQty, id: variantID },
    dataType: "json",
    success: function (data) {
      thisSlider
        .parent()
        .parent()
        .find(".input-wrapper")
        .find(".slider-quantity")
        .attr("value", currentQty);

      processCartRules(undefined, () =>
        refreshCart({ isAdded: currentQty > 0 })
      );
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log("error");
      console.log(xhr.status);
      console.log(thrownError);
    },
  });
});
$(document).on("change", ".slider-quantity", function () {
  // $(".inner-cart").load(location.href + " .inner-cart");
});
$(document).on("blur", ".slider-quantity", function () {
  // $(".inner-cart").load(location.href + " .inner-cart");
});
$(document).on("click", ".adjust-slider", function (e) {
  e.preventDefault();
  var thisSlider = $(this);
  var variantID = $(this).parent().parent().attr("data-variant-id");
  var currentQty = parseInt(
    $(this).parent().parent().find(".input-wrapper").find("input").attr("value")
  );

  var prodTitle = $(this)
    .parent()
    .parent()
    .parent()
    .find(".cart-item-product-title")
    .text();

  if ($(this).hasClass("minus")) {
    // subtract from variant quantity
    var newQty = currentQty - 1;
    if (newQty === 0) {
      $(this).parent().parent().parent().parent().remove();
    }
  } else if ($(this).hasClass("plus") && prodTitle.indexOf("10 Pack") > -1) {
    if (currentQty === 3 || currentQty > 3) {
      alert("Sorry you cannot add more than three 10 packs to your cart");
      var newQty = 3;
    } else {
      var newQty = currentQty + 1;
    }
  } else if ($(this).hasClass("plus") && prodTitle.indexOf("10 Pack") === -1) {
    var newQty = currentQty + 1;
  }

  let addedText = undefined;
  if (newQty <= 0) {
    addedText = "Removed item from cart";
  } else if (currentQty > newQty) {
    addedText = "Subtracted item from cart";
  }

  $.ajax({
    type: "POST",
    url: "/cart/change.js",
    cache: false,
    data: { quantity: newQty, id: variantID },
    dataType: "json",
    success: function (data) {
      thisSlider
        .parent()
        .parent()
        .find(".input-wrapper")
        .find(".slider-quantity")
        .attr("value", newQty);

      processCartRules(undefined, () => refreshCart({ addedText: addedText }));
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log("error");
      console.log(xhr.status);
      console.log(thrownError);
    },
  });
});

function removeUsbFromCartDrawer() {
  $(".cart-item-titles").each(function () {
    const sku = $(this).attr("item-data-sku");
    if (sku.indexOf(CUTWOOD_USB_SKU) > -1) {
      $(this).parent().remove();
    }
  });
}

function processCartRules(cartAddData, onSuccess) {
  try {
    // before we head to checkout, we need to see if cuttwood is in the cart and if so, apply a free charger
    // loop through SKUs to see if any of them contain MASTER-CW

    const CUTWOOD_USB_VARIANT_ID = 40476957147201; // prod
    // const CUTWOOD_USB_VARIANT_ID = 47364303421608; //dev

    let cutwoodAdded = false;
    if (cartAddData && cartAddData.sku) {
      const sku = cartAddData.sku;
      cutwoodAdded =
        sku.indexOf(CUTWOOD_PRODUCT_SKU_STARTS_WITH) > -1 &&
        sku !== `MASTER-${CUTWOOD_USB_SKU}`;
    }

    if (!cutwoodAdded) {
      $(".cart-item-titles").each(function () {
        const sku = $(this).attr("item-data-sku");
        if (
          sku.indexOf(CUTWOOD_PRODUCT_SKU_STARTS_WITH) > -1 &&
          sku !== `MASTER-${CUTWOOD_USB_SKU}`
        ) {
          cutwoodAdded = true;
        }
      });
    }

    let usbExists = false;
    $(".cart-item-titles").each(function () {
      const sku = $(this).attr("item-data-sku");
      if (sku.indexOf(CUTWOOD_USB_SKU) > -1) {
        usbExists = true;
      }
    });

    if (cutwoodAdded === true && usbExists === false) {
      const addChargerData = {
        items: [
          {
            id: CUTWOOD_USB_VARIANT_ID,
            quantity: 1,
          },
        ],
      };

      // Make the AJAX request to add the item to the cart
      $.ajax({
        type: "POST",
        url: "/cart/add.js",
        data: addChargerData,
        dataType: "json",
        success: function (cart) {
          onSuccess && onSuccess();
        },
        error: function (xhr, status, error) {
          // Handle error, maybe the product variant is out of stock or other issue
          alert("Failed to add Cutwood USB cable to cart. Please try again.");
        },
      });
    } else if (cutwoodAdded === false && usbExists === true) {
      const removeChargerData = {
        updates: {
          [CUTWOOD_USB_VARIANT_ID]: 0,
        },
      };

      // Make the AJAX request to update the cart quantity
      $.ajax({
        type: "POST",
        url: "/cart/update.js",
        data: removeChargerData,
        dataType: "json", // explicitly set the expected response type to JSON
        success: function (cart) {
          removeUsbFromCartDrawer();
          onSuccess && onSuccess();
        },
        error: function (xhr, status, error) {
          console.error({ error });
          alert(
            "Failed to update item quantity. Please check the console for more details."
          );
        },
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    onSuccess && onSuccess();
  }
}

$(document).on("click", "#slider-checkout", function (e) {
  e.preventDefault();

  if ($(".low-inventory").length > 0) {
    var showDiv = "";
    $(".low-inventory").each(function (i) {
      var showUp = $(this).css("display");
      if (showUp === "block") {
        showDiv = "block";
        // basically do nothing since it is showing something already
      }
    });
    $(".cart-item-slider.regular").hide();
    if (
      $(".low-inventory.YesSir").length != $(".low-inventory").length &&
      showDiv != ""
    ) {
      alert("Please pick an option above - one of your items is low on stock");
    } else {
      var showing = "";
      $(".low-inventory").each(function (i) {
        var showUp = $(this).css("display");
        if (showUp === "block") {
          showing = "block";
          // basically do nothing since it is showing something already
        }
      });
      if (showing === "") {
        $(".cart-upsell").hide();
        $(".low-inventory").eq(0).show();
        $(".go-back-cart").show();
        $(".cart-items-slider").attr(
          "style",
          "background-color:white;max-height:100vh;z-index:5;"
        );
      }
    }
  } else {
    processCartRules(undefined, () => (window.location.href = "/checkout"));
  }
});

$(document).on("click", ".continue-shopping", function (e) {
  e.preventDefault();
  $(".slider-close").click();
});

function findScreen() {
  $("html").css("overflow-y", "hidden");
  var screenPos = $(document).scrollTop();
  //    $('#sliderCart').removeAttr('style');
  // $("#sliderCart").css("top", screenPos + "px");
  $(".grey-parent").fadeIn("slow");
  $(".grey-parent").css("top", screenPos + "px");
  $(".grey-parent").css("overflow", "hidden");
}

function updateShopfiyCart(item) {
  $.ajax({
    type: "POST",
    url: "/cart/change.js",
    cache: false,
    data: item,
    dataType: "json",
    success: function (data) {
      processCartRules(undefined, () => refreshCart({ isAdded: false }));
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log("error");
      console.log(xhr.status);
      console.log(thrownError);
    },
  });
}

// $(document).on("click", ".d8-button", function (e) {
//   var items = $(".d8-item").each(function (index, obj) {
//     console.log(index);
//     const variantId = $(this).attr("data-variant-id");
//     $(this).parent().parent().remove();

//     updateShopfiyCart({ quantity: 0, id: variantId });
//   });
// });

$(document).on("click", ".remove-item", function (e) {
  e.preventDefault();
  $(this).parent().parent().remove();
  var newQty = 0;
  var variantID = $(this)
    .parent()
    .find(".quantity-select")
    .attr("data-variant-id");

  updateShopfiyCart({ quantity: newQty, id: variantID });
});

$(".x-abs").click(function (e) {
  e.preventDefault();
  $(".discount-box").hide();
  localStorage["discountClose"] = "yes";
});
var discountC = localStorage["discountClose"] || "no";
if (discountC === "yes") {
  $(".discount-box").hide();
} else {
  $(".discount-box").show();
}

$("#zip-text-input").click(function () {
  $(".text-input__label").addClass("subheading--mini");
  $(".text-input__label").addClass("text-input__label--float");
});
$(".location-switch, #data-zipcode").click(function () {
  $(".Modal").addClass("ReactModal__Overlay--after-open");
  $(".text-input-button-container").show();
  $(".location-success").hide();
  $("#gorgias-chat-container").hide();
});
$(".Modal__closer-circle, #close-btn-pop").click(function () {
  $(".Modal").removeClass("ReactModal__Overlay--after-open");
  $("#gorgias-chat-container").show();
});

$("#AddToCartBulk-product-template").click(function (e) {
  e.preventDefault();
  var variant = $("#ProductSelect-product-template option:selected").attr(
    "value"
  );
  var quantity = 10;

  $.ajax({
    type: "POST",
    url: "/cart/add.js",
    cache: false,
    data: { quantity: quantity, id: variant },
    dataType: "json",
    success: function (data) {
      processCartRules(data, () => refreshCart({}));
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(
        "Unable to add items in bulk.  Please try again or add them individually."
      );
    },
  });
});

function setCollectionAtcAction() {
  $(".collection-ATC")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      e.stopPropagation();

      const variant = $(this).attr("data-variant-id");

      const data = {
        id: variant,
        quantity: 1,
      };

      jQuery.ajax({
        type: "POST",
        url: "/cart/add.js",
        data: data,
        dataType: "json",
        success: function (data) {
          processCartRules(data, () => refreshCart({}));
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log("error");
          console.log(xhr.status);
          alert(thrownError);
        },
      });
    });
}

setCollectionAtcAction();

$("#me-pick").click(function (e) {
  e.preventDefault();
  $(".low-inventory-flex").eq(0).hide();
  $(".low-inventory-selection").css("display", "flex");
});
$(".low-inventory-selection .low-inventory-button").click(function () {
  if ($(this).hasClass("selected")) {
    $(this).removeClass("selected");
  } else {
    $(this).addClass("selected");
  }
});
$("body").on("click", ".other-options", function (e) {
  e.preventDefault();
  $(this).parent().parent().find(".more-options").show();
});
$("body").on("click", ".approve-option", function (e) {
  e.preventDefault();
  $(this).addClass("completed");
  $(this).parent().parent().addClass("YesSir");
  var replacedProduct = $(this)
    .parent()
    .parent()
    .find(".cart-item-slider.substitute")
    .attr("data-sku");
  var replacedProductName =
    $(this)
      .parent()
      .parent()
      .find(".cart-item-slider.substitute")
      .find(".cart-item-titles")
      .find(".cart-item-product-title")
      .find("b")
      .text() +
    " - " +
    $(this)
      .parent()
      .parent()
      .find(".cart-item-slider.substitute")
      .find(".cart-item-titles")
      .find(".variant.cart-slide-variant")
      .text();
  if ($(".approve-option.completed").length === $(".approve-option").length) {
    $(this).parent().parent().addClass("success");
    $(this).parent().parent().find(".success-msg").css("display", "flex");
  }
  var optionLocator = $(this);
  var newQty = 0;
  var variantID = $(this)
    .parent()
    .parent()
    .find(".cart-item-slider.substitute")
    .attr("data-variant-id");
  $.ajax({
    type: "POST",
    url: "/cart/change.js",
    cache: false,
    data: { quantity: newQty, id: variantID },
    dataType: "json",
    success: function (data) {
      var newRepQty = parseInt(
        optionLocator
          .parent()
          .parent()
          .find(".cart-item-slider.replacement")
          .find(".low-inv-quant")
          .text()
          .replace("+", "")
      );
      var newvarID = optionLocator
        .parent()
        .parent()
        .find(".cart-item-slider.replacement")
        .attr("data-variant-id");
      $.ajax({
        type: "POST",
        url: "/cart/add.js",
        data: {
          quantity: newRepQty,
          id: newvarID,
          properties: {
            "_Replaced Product Name": replacedProductName,
            "_Replaced SKU": replacedProduct,
          },
        },
        dataType: "json",
        success: function (data) {
          if (
            $(".approve-option.completed").length ===
            $(".approve-option").length
          ) {
            var OrderNotes = $("#order-notes").attr("value");

            if (OrderNotes === "") {
              window.location.href = "/checkout";
            } else {
              // add order notes, then checkout
              $.post(
                "/cart/update.js",
                { note: OrderNotes },
                null,
                "json"
              ).done(function (d) {
                window.location.href = "/checkout";
              });
            }
          } else {
            var newIndex = 0;
            $(".approve-option").each(function (i) {
              if ($(this).hasClass("completed")) {
                $(this).parent().parent().hide();
                newIndex = i + 1;
              } else if (i === newIndex) {
                $(this).parent().parent().show();
              }
            });
          }
        },
      });
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log("error");
      console.log(xhr.status);
      console.log(thrownError);
    },
  });
});
$("body").on("click", ".go-back-cart", function () {
  // first get index of low inventory and length to see where we are in the process
  if ($(".low-inventory").length === 1) {
    $(".low-inventory").hide();
    $(".cart-item-slider.regular").show();
  } else {
    // loop through each low inventory and see which one is open
    $(".low-inventory").each(function (i) {
      if ($(this).css("display") === "block") {
        // if it's the first one, go back to cart
        if (i === 0) {
          $(".low-inventory").hide();
          $(".cart-item-slider.regular").show();
        } else {
          var newIndex = i - 1;
          $(this).hide();
          $(".low-inventory").eq(newIndex).show();
        }
      }
    });
  }
});
$("body").on(
  "click",
  ".Pick-for-me, .Contact-me, .remove-me, .wait-until",
  function () {
    var text = $(this).text();
    if (text === "Pick for me") {
      // add notes to hidden input to be added to cart attributes later
      var currentNotes = $("#order-notes").attr("value");
      var pickMesku = $(this)
        .parent()
        .parent()
        .find(".cart-item-slider.substitute")
        .attr("data-sku");
      var note =
        pickMesku +
        "\n" +
        "Let us pick a comparable item" +
        "\n-------------------------------\n";
      var newNotes = currentNotes + note;
      // add note to order notes
      $("#order-notes").attr("value", newNotes);
      lowinvCheck($(this));
    } else if (text === "Contact me") {
      // add notes to hidden input to be added to cart attributes later
      var currentNotes = $("#order-notes").attr("value");
      var pickMesku = $(this)
        .parent()
        .parent()
        .find(".cart-item-slider.substitute")
        .attr("data-sku");
      var note =
        pickMesku +
        "\n" +
        "Contact me about replacement options" +
        "\n-------------------------------\n";
      var newNotes = currentNotes + note;
      // add note to order notes
      $("#order-notes").attr("value", newNotes);
      lowinvCheck($(this));
    } else if (text === "Remove item (if unavailable)") {
      // add notes to hidden input to be added to cart attributes later
      var currentNotes = $("#order-notes").attr("value");
      var pickMesku = $(this)
        .parent()
        .parent()
        .find(".cart-item-slider.substitute")
        .attr("data-sku");
      var note =
        pickMesku +
        "\n" +
        "Please remove this item from my order" +
        "\n-------------------------------\n";
      var newNotes = currentNotes + note;
      // add note to order notes
      $("#order-notes").attr("value", newNotes);
      lowinvCheck($(this));
    } else if (text === "Wait until back in stock") {
      // add notes to hidden input to be added to cart attributes later
      var currentNotes = $("#order-notes").attr("value");
      var pickMesku = $(this)
        .parent()
        .parent()
        .find(".cart-item-slider.substitute")
        .attr("data-sku");
      var note =
        pickMesku +
        "\n" +
        "Wait for product to be back in stock" +
        "\n-------------------------------\n";
      var newNotes = currentNotes + note;
      // add note to order notes
      $("#order-notes").attr("value", newNotes);
      lowinvCheck($(this));
    }
    // standard way of handling this; either moving onto next low inventory item or compiling notes, updating cart attributes and going to checkout
    function lowinvCheck(inventorybox) {
      inventorybox
        .parent()
        .parent()
        .find(".pick-options")
        .find(".approve-option")
        .addClass("completed");
      inventorybox.parent().parent().addClass("YesSir");
      if ($(".low-inventory").length != $(".low-inventory.YesSir").length) {
        var newIndex = 0;
        $(".approve-option").each(function (i) {
          if ($(this).hasClass("completed")) {
            $(this).parent().parent().hide();
            newIndex = i + 1;
          } else if (i === newIndex) {
            $(this).parent().parent().show();
          }
        });
      } else {
        inventorybox.parent().parent().addClass("success");
        inventorybox
          .parent()
          .parent()
          .find(".success-msg")
          .css("display", "flex");
        var OrderNotes = $("#order-notes").attr("value");
        if (OrderNotes === "") {
          window.location.href = "/checkout";
        } else {
          // add order notes, then checkout
          $.post("/cart/update.js", { note: OrderNotes }, null, "json").done(
            function (d) {
              window.location.href = "/checkout";
            }
          );
        }
      }
    }
  }
);

$(".AddOrder-Sub").click(function (e) {
  e.preventDefault();
  var variant = $(this).attr("new-variant-id");
  var quantity = 1;
  $.ajax({
    type: "POST",
    url: "/cart/add.js",
    cache: false,
    data: { quantity: quantity, id: variant },
    dataType: "json",
    success: function (data) {
      jQuery.getJSON("/cart.js", function (cart) {
        // now have access to Shopify cart object
        determineUpsell(cart);
        if (cart.item_count != 0) {
          $("#CartCount").text(cart.item_count);
          $("#CartCount-Desktop").text(cart.item_count);
          $(".h2-item-count").text(data.item_count);
        } else {
          $("#CartCount").text("");
          $("#CartCount-Desktop").text("");
          $(".h2-item-count").text("");
        }
        var total = cart.total_price.toString();
        var newTotal =
          "$" +
          total.substring(0, total.length - 2) +
          "." +
          total.substring(total.length - 2, total.length);
        if (total == 0) {
          $("#CartCost").text("");
          $("#CartCost-Desktop").text("");
        } else {
          $("#CartCost").text(newTotal);
          $("#CartCost-Desktop").text(newTotal);
        }
      });
      //  $(".inner-cart").load(location.href + " .inner-cart");
      // if ($(".inner-cart").css("display") === "none") {
      //   $(".inner-cart").fadeIn("slow");
      // }
      // if ($(".slider-main").css("display") === "none") {
      //   $(".slider-main").show();
      // }
      // $("body").css("overflow-y", "hidden");
      // findScreen();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log("error");
      console.log(xhr.status);
      alert(thrownError);
    },
  });
});
$("body").on("click", ".grey-parent", function (e) {
  $(".slider-close").click();
});
// set left wrapper and right wrapper as same height
function adjustUtil() {
  var leftWHeight = $(".util.desktop-only")
    .find(".wrapper")
    .find(".left-wrapper")
    .height();
  $(".util.desktop-only")
    .find(".wrapper")
    .find(".right-wrapper")
    .height(leftWHeight);
}

adjustUtil();
$(window).on("resize", function () {
  adjustUtil();
});

$(".mobile-aside-container").click(function (e) {
  e.preventDefault();
  if ($(".aside-bar").css("display") === "none") {
    $(".aside-bar").show();
  } else {
    $(".aside-bar").hide();
  }
});

function runGeo(city, zip, state, abb) {
  var delarea = "";
  $("#data-city").text(city);
  $("#data-state").text(abb);
  $("#data-zipcode").text(zip);
  $(".user-state").text(abb);
  $("#user-zipcode-desktop").text(zip);
  $("#popup-city").text(city + ", ");
  $("#popup-state").text(abb);
  $("#popup-zip").text(zip);

  delarea = $("#del-area").html();
  localStorage["delivery-info"] = $("#del-area").html();
  $("#del-area").show();

  if (PICK_UP_AVAILABLE_STATES.includes(state)) {
    $("#delivery_available_wrapper").show();
    $(".layout-4.social .richtext").removeAttr("style");
    showPickupAvailable();
  } else {
    $(".inline-notification.error").show();
    $("#delivery_available_wrapper").hide();
    $(".layout-4.social .richtext").css("visibility", "hidden");
    $("#tomit_inventory_list").hide();
    $("#tomit_inventory_list").removeAttr("style");
  }

  const isRestrictedState = isRestrictedStateCheck(state);

  if (isRestrictedState) {
    showShippingUnavailable(state);
  }

  for (const restricted_area of restriction_list) {
    const is_restricted = checkServiceAlert(restricted_area.zip_list, zip, () =>
      showShippingUnavailable(restricted_area.service_area)
    );

    if (is_restricted) {
      break;
    }
  }
}

const updateCityText = function (geoipResponse) {
  /*
   * It's possible that we won't have any names for this city.
   * For language codes with a special character such as pt-BR,
   * replace names.en with names['pt-BR'].
   */
  const cityName = geoipResponse.city.names.en || "your city";
  const zipName = geoipResponse.postal.code || "your zip";
  const stateName = geoipResponse.subdivisions[0].names.en || "your state";
  const stateAbb = geoipResponse.subdivisions[0].iso_code || "ZA";
  localStorage["myZip"] = zipName;
  localStorage["myCity"] = cityName;
  localStorage["myState"] = stateName;
  localStorage["myAbb"] = stateAbb;

  runGeo(cityName, zipName, stateName, stateAbb);
};

const fillInPage = (function () {
  const onSuccess = function (geoipResponse) {
    updateCityText(geoipResponse);
  };

  // If we get an error, we will display an error message
  const onError = function (error) {
    $("#del-area").text("Available online");
    $("#del-area").show();
  };

  return function () {
    if (typeof geoip2 !== "undefined") {
      geoip2.city(onSuccess, onError);
    } else {
      $("#del-area").text("Available online");
      $("#del-area").show();
    }
  };
})();

const customerZip = localStorage["myZip"];
const customerCity = localStorage["myCity"];
const customerState = localStorage["myState"];
const customerAbb = localStorage["myAbb"];
if (
  customerZip != "your city" &&
  customerCity != "your city" &&
  customerState != "your state" &&
  customerZip != "null" &&
  customerCity != "null" &&
  customerState != "null" &&
  customerZip != "undefined" &&
  customerState != "undefined" &&
  customerCity != "undefined" &&
  typeof customerState != "undefined" &&
  typeof customerZip != "undefined"
) {
  runGeo(customerCity, customerZip, customerState, customerAbb);
} else {
  fillInPage();
}

$(".product-thumb--cell img").click(function (e) {
  const container = $(this).parent();
  var thumbAlt = $(this).attr("alt");
  var selectedTitle = container.attr("data-title");

  var variantImage = false;
  $(".single-option-selector-product-template option").each(function () {
    var optionValue = $(this).attr("value").trim();
    if (selectedTitle === optionValue) {
      variantImage = true;
    }
  });

  if (variantImage) {
    $(".single-option-selector-product-template option:selected").prop(
      "selected",
      false
    );
    $(".single-option-selector-product-template option:selected").removeAttr(
      "selected"
    );

    $(".single-option-selector-product-template option").each(function () {
      var optionValue = $(this).attr("value").trim();
      if (selectedTitle === optionValue) {
        $(this).prop("selected", true);
        $(this).attr("selected", "selected");
        $(".single-option-selector").change();
      } else {
        $(this).prop("selected", false);
        $(this).removeAttr("selected");
      }
    });
  } else {
    // we still have to show it as featured image, even if change didn't happen
    $(".card__image-container").each(function (i) {
      var featuredAlt = $(this).find("img").attr("alt");
      if (featuredAlt === thumbAlt) {
        $(this).click();

        $(".product-image--slider").flickity().flickity("select", i);
      }
    });
  }
});

$("body").on("change", "#recommended-product-select", function (e) {
  // if we added a cuttwood to cart already, let's allow them to add another flavor
  $(".cart-upsell-buy").removeClass("already-added");
  $(".cart-upsell-buy").text("ADD TO CART");
});

$("body").on("click", ".cart-upsell-buy", function (e) {
  e.preventDefault();
  if ($(this).hasClass("already-added")) {
    alert("You already added this to your cart");
  } else {
    var variant = $("#recommended-product-select option:selected").attr(
      "data-variant-id"
    );
    var image = $("#recommended-product-select option:selected").attr(
      "data-img-src"
    );
    var quantity = 1;
    $.ajax({
      type: "POST",
      url: "/cart/add.js",
      cache: false,
      data: { quantity: quantity, id: variant },
      dataType: "json",
      success: function (data) {
        // now that they have added it to the cart, we need to show a success message and allow them to remove it if needed
        $(".cart-upsell-buy").text("ADDED TO CART");
        $(".cart-upsell-buy").addClass("already-added");

        var productTitle = $(
          "#recommended-product-select option:selected"
        ).attr("data-product-title");

        var variantTitle = $(
          "#recommended-product-select option:selected"
        ).attr("value");
        if (variantTitle === "Default Title") {
          variantTitle = "";
        }

        var variantSKU = $("#recommended-product-select option:selected").attr(
          "data-sku"
        );
        var variantPrice = $(
          "#recommended-product-select option:selected"
        ).attr("data-variant-price");

        var buildHtml =
          '<div class="cart-item-slider regular" data-tags="N/A" style="overlow-y:none; padding:0.5em 0"><a class="image-url-cart" href="/products/cuttwood-dipsosable-vape"><img class="cart-item-image" src="' +
          image +
          '"></a><div class="cart-item-titles" item-data-sku="' +
          variantSKU +
          '"><p class="cart-item-product-title"><b>' +
          productTitle +
          '</b></p><span class="variantcart-slide-variant">' +
          variantTitle +
          '</span><div class="td cart-item-price" data-handle="cuttwood-dipsosable-vape"><span class="money actual" actual-price="999">' +
          variantPrice +
          '</span><div></div></div><div class="quantity-select cart-items" data-variant-id="' +
          variant +
          '"><div class="button-wrapper"><button class="adjust-slider minus">-</button></div><div class="input-wrapper"><input type="text"class="slider-quantity" min="1" pattern="[0-9]*" value="1"></div><div class="button-wrapper"><button class="adjust-slider plus">+</button></div></div><a href="#" class="remove-item"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.28125 3.28125L3.86719 12.6562C3.89502 13.1979 4.28906 13.5938 4.80469 13.5938H10.1953C10.713 13.5938 11.0997 13.1979 11.1328 12.6562L11.7188 3.28125" stroke="#8F8F8F" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.34375 3.28125H12.6562H2.34375Z" fill="#8F8F8F"></path><path d="M2.34375 3.28125H12.6562" stroke="#8F8F8F" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M9.60938 5.15625L9.375 11.7188M5.625 3.28125V2.10938C5.62473 2.01697 5.64273 1.92541 5.67797 1.83998C5.71321 1.75455 5.76499 1.67693 5.83034 1.61159C5.89568 1.54624 5.9733 1.49446 6.05873 1.45922C6.14416 1.42398 6.23571 1.40598 6.32812 1.40625H8.67188C8.76429 1.40598 8.85584 1.42398 8.94127 1.45922C9.0267 1.49446 9.10432 1.54624 9.16966 1.61159C9.23501 1.67693 9.28679 1.75455 9.32203 1.83998C9.35727 1.92541 9.37527 2.01697 9.375 2.10938V3.28125H5.625ZM7.5 5.15625V11.7188V5.15625ZM5.39062 5.15625L5.625 11.7188L5.39062 5.15625Z" stroke="#8F8F8F" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>';
        // we need to update all the quantities
        var currentQty = parseInt($(".h2-item-count").text().trim());
        var newQty = currentQty + 1;
        // now lets update all the type of quantities
        $(".h2-item-count").text(newQty);
        $("#CartCount").text(newQty);
        // now that we built html, let's append it to bottom of the cart
        $(buildHtml).insertAfter(".cart-upsell");

        updateCartTotals();
      },
    });
  }
});

$(".block-header").click(function (e) {
  var link = $(this).attr("linky");
  window.location.href = link;
});

// this function helps us determine if the products in the cart are USB-C relevant and if they already have a USB-C charging calbe in their cart; if products are
/// usb-c relevant and the cord isn't in their cart already, it will show the upsell
function determineUpsell(cartDeets) {
  var upsellExist = 0;
  var USBexist = 0;
  $.each(cartDeets.items, function () {
    var itemHandle = $(this)[0]["handle"];

    if (itemHandle === "cuttwood-dipsosable-vape") {
      upsellExist = 1;
    }
  });
  if (upsellExist === 0) {
    // since charging cable doesn't exist and we have USB relevant products in cart, we need to show the upsell
    // $('.cart-upsell').show();
  } else {
    // $('.cart-upsell').hide();
  }
}

// detemrine if URL is collection page and if so, we must calculate product info height accordingly
// var currentURL = window.location.href;
// if (
//   currentURL.indexOf("collection") > -1 ||
//   currentURL.indexOf("search") > -1
// ) {
//   // capture window width so we can compare when it changes
//   var currentWinWidth = $(window).width();
//   // resizeBoxes();
//   // if the window is resized, we need to remove the position on the button and then recalculate size
//   $(window).on("resize", function () {
//     //    console.log('window was resized, need to rerun things');
//     // only if window is resized above or below 769
//     var newWinWidth = $(window).width();
//     if (currentWinWidth != newWinWidth) {
//       if (currentURL.indexOf("collection") > -1) {
//         $(".box.product figcaption").each(function () {
//           // strip height from box and remove positioning from button
//           $(this).removeAttr("style");
//           // $(this).find(".collection-ATC").removeAttr("style");
//           // $(this).find(".a-button").removeAttr("style");
//         });
//       } else {
//         $(".box.product figure").each(function () {
//           // strip height from box and remove positioning from button
//           $(this).removeAttr("style");
//           // $(this).find(".collection-ATC").removeAttr("style");
//           // $(this).find(".a-button").removeAttr("style");
//         });
//       }

//       // resizeBoxes();
//     }
//   });

//   function resizeBoxes() {
//     // since product info can differ in height, we must set it uniform across the page
//     setTimeout(function () {
//       var maxBoxHeight = 0;
//       if (currentURL.indexOf("collection") > -1) {
//         $(".box.product figcaption").each(function (i) {
//           var thisHeight = $(this).height();
//           if (thisHeight > maxBoxHeight) {
//             maxBoxHeight = thisHeight;
//           }
//         });
//       } else {
//         $(".box.product figure").each(function (i) {
//           var thisHeight = $(this).height();
//           if (thisHeight > maxBoxHeight) {
//             maxBoxHeight = thisHeight;
//           }
//         });
//       }

//       // Workaround for very tall images which push all of the buttons down
//       if (maxBoxHeight > 500) {
//         maxBoxHeight = 500;
//       }

//       // console.log('my height is this' + maxBoxHeight);
//       // after we detemrine max box height, set it for all boxes
//       if (currentURL.indexOf("collection") > -1) {
//         $(".box.product figcaption").each(function () {
//           $(this).height(maxBoxHeight);
//           // $(this).find(".collection-ATC").css("position", "absolute");
//           // $(this).find(".a-button").css("position", "absolute");
//         });
//       } else {
//         $(".box.product figure").each(function () {
//           $(this).height(maxBoxHeight);
//           // $(this).find(".collection-ATC").css("position", "absolute");
//           // $(this).find(".a-button").css("position", "absolute");
//         });
//       }
//     }, 550);
//   }
// }

// Needs to be updated in both theme.js plus checkout.js
const D8_RESTRICTED_STATES = new Set([
  "ak",
  "co",
  "de",
  "id",
  "ia",
  "mn",
  "mo",
  "ny",
  "nd",
  "ri",
  "sc",
]);

function hideD8Products(state) {
  if (D8_RESTRICTED_STATES.has(state.toLocaleLowerCase())) {
    $(".d8-restricted").toggle(false);
  } else {
    $(".d8-restricted").toggle(true);
  }
}

$(window).on("load", function () {
  const state = localStorage["myAbb"];

  hideD8Products(state);

  if (PICK_UP_AVAILABLE_STATES.includes(state)) {
    $("#delivery_available_wrapper").show();
  } else {
    $("#delivery_available_wrapper").hide();
  }
});

// if user clicks update in the zip code pop up, we need to call USPS postal code program to update their location
$("#updateZip").click(function (e) {
  e.preventDefault();

  var zipcode = $("#text-input-zipcode").val();
  if (zipcode === "" || zipcode.length < 5 || zipcode.length > 5) {
    alert("Please enter a valid zip code");
    return;
  }

  var settings = {
    url:
      "http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup%20&XML=%3CCityStateLookupRequest%20USERID=%22200DEKST0793%22%3E%3CZipCode%20ID=%20%220%22%3E%20%3CZip5%3E" +
      zipcode +
      "%3C/Zip5%3E%3C/ZipCode%3E%3C/CityStateLookupRequest%3E",
    method: "POST",
    timeout: 0,
    processData: false,
  };

  $.ajax(settings).done(function (response) {
    var xml = new XMLSerializer().serializeToString(response.documentElement);

    if (xml.indexOf("<error>") > -1 || xml.indexOf("<Error>") > -1) {
      alert("Sorry, that zip code is not valid. Please try again");
    } else {
      var findZip = xml.indexOf("<Zip5>");
      var zip = xml.substring(findZip + 6, findZip + 11);

      var findState = xml.indexOf("<State>");
      var state = xml.substring(findState + 7, findState + 9);

      // Hides d8 products after the state is set
      hideD8Products(state);

      var findCity = xml.indexOf("<City>");
      var city = xml.substring(findCity + 6, xml.indexOf("</City"));
      city = city.toLowerCase();
      city =
        city.substring(0, 1).toUpperCase() + city.substring(1, city.length);

      localStorage["myZip"] = zip;
      localStorage["myCity"] = city;
      localStorage["myAbb"] = state;

      $("#data-city").text(city);
      $("#data-state").text(state);
      $("#data-zipcode").text(zip);
      $(".user-state").text(state);
      $("#user-zipcode-desktop").text(zip);
      $("#popup-city").text(city + ", ");
      $("#popup-state").text(state);
      $("#popup-zip").text(zip);
      $(".green-box").show();

      if (PICK_UP_AVAILABLE_STATES.includes(state)) {
        showPickupAvailable();
        $("#delivery_available_wrapper").show();
      } else {
        showDeliveryAvailable();
        $("#delivery_available_wrapper").hide();
      }

      const isRestrictedState = isRestrictedStateCheck(state);

      if (isRestrictedState) {
        showShippingUnavailable(name);
      }

      for (const restricted_area of restriction_list) {
        const is_restricted = checkServiceAlert(
          restricted_area.zip_list,
          zip,
          () => showShippingUnavailable(restricted_area.service_area)
        );

        if (is_restricted) {
          break;
        }
      }
    }
  });
});

function isRestrictedStateCheck(state) {
  for (const allowed_state of allowed_states) {
    if (allowed_state.abbreviation === state.toLowerCase()) {
      return false;
    }
  }

  return true;
}

// $(window).on("scroll", function () {
//   $("#shopify-section-header").removeAttr("style");
//   $("#shopify-section-header").attr(
//     "style",
//     "top:43px;z-index:990;position:sticky;"
//   );
//   if ($(window).width() < 769) {
//     $("#shopify-section-header-util").attr(
//       "style",
//       "top:43px;z-index:990;position:sticky;"
//     );
//   } else {
//     $("#shopify-section-header-util").removeAttr("style");
//   }
// });

$(".sticky-select").change(function (e) {
  var optionSelected = $(this).find("option:selected").text();
  var optionValue = $(this).find("option:selected").attr("value");
  if (optionSelected.indexOf("SOLD OUT") > -1) {
    $(".stickyATC").text("SOLD OUT");
    $(".stickyATC").addClass("soldout");
  } else {
    $(".stickyATC").text("ADD TO CART");
    $(".stickyATC").removeClass("soldout");
  }
  $(".single-option-selector-product-template option").each(function () {
    var oValue = $(this).attr("value").trim();
    if (optionValue === oValue) {
      $(this).prop("selected", true);
      $(this).attr("selected", "selected");
      $(".single-option-selector").change();
    }
  });
});
$(".stickyATC").click(function (e) {
  e.preventDefault();
  if ($(this).text().indexOf("SOLD OUT") > -1) {
    alert("Sorry this item is out of stock. Please pick another flavor");
  } else {
    // click on regular ATC since we switched it
    $("#AddToCart-product-template").click();
  }
});

singleCar();

function singleCar() {
  $(".product-thumb--cell").each(function (i) {
    $(this).attr("class", "zproduct-thumb--cell");
    var clone = $(this).detach();
    $(".zproduct-thumb--slider").append(clone);
  });
  $(".zproduct-thumb--slider").flickity({
    imagesLoaded: true,
    lazyLoad: false,
    pageDots: false,
    groupCells: true,
    prevNextButtons: true,
  });
}
function doubleCar() {
  var counter = 0;
  var indexcounter = 0;
  $(".product-thumb--cell").each(function (i) {
    if (counter === 0) {
      $(this).attr("class", "zproduct-thumb--cell");
      var clone = $(this).detach();
      $(".zproduct-thumb--slider").append(clone);
    }

    if (counter === 1) {
      $(this).attr("class", "zproduct-thumb--cell-diff");
      var clone = $(this).detach();

      $(".zproduct-thumb--slider")
        .find(".zproduct-thumb--cell")
        .eq(indexcounter)
        .append(clone);
      indexcounter = indexcounter + 1;
    }
    if (counter === 0) {
      counter = 1;
    } else if (counter === 1) {
      counter = 0;
    }
  });
  $(".zproduct-thumb--cell").each(function (i) {
    $(this).attr("class", "product-thumb--cell");
  });
  $(".zproduct-thumb--cell-diff").each(function (i) {
    $(this).attr("class", "product-thumb--cell second");
  });
  $(".zproduct-thumb--slider").flickity({
    imagesLoaded: true,
    lazyLoad: false,
    pageDots: false,
    groupCells: true,
  });
}
$("#share-icon").click(function (e) {
  var screenWidth = $(window).width();
  var productTitle = $("h1").text().trim();
  var selectedOption = $(
    "#SingleOptionSelector-product-template-0 option:selected"
  ).attr("value");
  if (screenWidth < 769) {
    navigator
      .share({
        title: document.title,
        text:
          "Check this out: " + productTitle + " - " + selectedOption + "\n\n",
        url: window.location.href,
      })
      .then(() => console.log("Successful share! 🎉"))
      .catch((err) => console.error(err));
  } else {
    var copyText = window.location.href;
    navigator.clipboard.writeText(copyText);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Link Copied";
    // after some time we reset the text back
    setTimeout(function () {
      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Copy to clipboard";
    }, 1500);
  }
});
/*
if ($(".flavor-list")[0]){
  var currentFlav = $('.main-flav').attr('data-flavor');
  if ($('.flavor-holder').text() === '') {

  findFlavor(currentFlav);
  }
  else {
  // Not running flavor on page load because it already is populated by liquid
  }
  function findFlavor(currentflavor) {
            var flavorFound = 0;
  $('.flavor-list li').each(function() {
    var thisFlavor = $(this).attr('class');
    if (thisFlavor === currentflavor) {
      var desc = $(this).find('.flavor-desc').text();
      $('.flavor-holder').text(desc);
      flavorFound = 1;
    }
  });
            if (flavorFound === 1) {
       $('.flavor-holder').removeAttr('style');
    }
    else {
      $('.flavor-holder').hide();
    }
  }
  }
  */
if ($(".flavor-list")[0]) {
  $(".product-image--slider").on("change.flickity", function (event, index) {
    changeOptions();
  });
  $(".zproduct-thumb--slider").on("change.flickity", function (event, index) {
    changeOptions();
  });

  function changeOptions() {
    var alt = $(".product-image--cell.is-selected")
      .find("div")
      .find("a")
      .find("img")
      .attr("alt");

    var productTitle = $("h1").text().trim() + " - ";

    alt = alt.replace(productTitle, "");
    alt = alt.replace("- White Horse Vapor", "");
    alt = alt.trim();

    var goodImage = 0;
    $(".single-option-selector-product-template option").each(function () {
      var oValue = $(this).attr("value").trim();
      if (alt === oValue) {
        goodImage = 1;
      }
    });

    if (goodImage === 1) {
      $(".single-option-selector-product-template option:selected").prop(
        "selected",
        false
      );
      $(".single-option-selector-product-template option:selected").removeAttr(
        "selected"
      );

      $(".single-option-selector-product-template option").each(function () {
        var oValue = $(this).attr("value").trim();
        if (alt === oValue) {
          $(this).prop("selected", true);
          $(this).attr("selected", "selected");
          $(".single-option-selector").change();
        } else {
          $(this).prop("selected", false);
          $(this).removeAttr("selected");
        }
      });
    }
  }
}
$(window).on("load", function () {
  $("#elf-bar-icon").fadeIn("slow");
});

$(document).on("change", "#recommended-product-select", function (e) {
  // when the upsell dropdown changes, we must change the image
  var selectedOption = $(this).find(":selected");
  var attributeValue = selectedOption.attr("data-img-src");
  // update the image to be relevant to the variant
  $(".upsell-img img").attr("src", attributeValue);
});

// after we load all this content, we need to make sure the flickity viewport doesn't change heights for CLS purposes so we must make sure the min-height matches the current height

var height = 0;

// $("#ProductImageSlider-product-template")
//   .find(".product-image--cell")
//   .each(function () {
//     var thisHeight = parseInt($(this).css("height"));
//     if (thisHeight > height) {
//       height = thisHeight;
//       // console.log('i set my height to' + height + ' and my alt text is ' +  $(this).find('div').find('a').find('img').attr('alt'));
//     }
//   });
// var checkExist = setInterval(function () {
//   if (
//     $("#ProductImageSlider-product-template").find(".flickity-viewport").length
//   ) {
//     $("#ProductImageSlider-product-template")
//       .find(".flickity-viewport")
//       .css("min-height", height);

//     // Your function here

//     clearInterval(checkExist);
//   }
// }, 100); // check every 100ms

// when the page loads and we detect it's a mobile device, don't let people navigate with the main drop down links
var windowSize = parseInt($("body").css("width"));
if (windowSize < 769) {
  $(".has-dropdown a").click(function (e) {
    if ($(this).attr("tabindex") === "0") {
      // reroute
    } else {
      e.preventDefault();
    }
  });
}
/*
var viewportHeight = window.innerHeight - 2;
document.documentElement.style.setProperty('--vh', `${viewportHeight}px`);
$('#sliderCart').css('height',viewportHeight);

window.addEventListener('resize', () => {
  let viewportHeight = window.innerHeight - 2;
  document.documentElement.style.setProperty('--vh', `${viewportHeight}px`);
  $('#sliderCart').removeAttr('style');
  $('#sliderCart').css('height',viewportHeight);
});
*/
//code for closing our upsell pop up for Esco Bar 2500 Tobacco
document
  .querySelector(".popup-overlay")
  ?.addEventListener("click", function (event) {
    // Check if the clicked element is exactly the popup overlay
    if (event.target === this) {
      // Close/hide the popup
      this.style.display = "none";
      $("body").removeAttr("style");
      $("html").removeAttr("style");
    }
  });
// upsell code for if they click to buy Tobacco Trail on Esco Bar 2500 pop up
$(".product-upsell-buy").on("click", function () {
  // Get the variant ID from the data attribute
  var variantId = $(this).data("variant-id");

  // Data for the AJAX request
  var postData = {
    items: [
      {
        id: variantId,
        quantity: 1,
      },
    ],
  };

  // Make the AJAX request to add the item to the cart
  $.ajax({
    type: "POST",
    url: "/cart/add.js",
    data: JSON.stringify(postData),
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      jQuery.getJSON("/cart.js", function (cart) {
        if (cart.item_count != 0) {
          $("#CartCount").text(cart.item_count);
          $("#CartCount-Desktop").text(cart.item_count);
          $(".h2-item-count").text(cart.item_count);
        } else {
          $("#CartCount").text("");
          $("#CartCount-Desktop").text("");
          $(".h2-item-count").text("");
        }
        var total = cart.total_price.toString();
        var newTotal =
          "$" +
          total.substring(0, total.length - 2) +
          "." +
          total.substring(total.length - 2, total.length);
        if (total == 0) {
          $("#CartCost").text("");
          $("#CartCost-Desktop").text("");
        } else {
          var formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });

          var formattedCrossout = formatter.format(
            cart.original_total_price / 100
          );

          $("#CartCost").text(newTotal);
          $("#CartCost-Desktop").text(newTotal);
          if (cart.original_total_price > cart.total_price) {
            $(".inner-footer-slider-cart")
              .find(".money.compare-at")
              .text(formattedCrossout);
          }
          updateFreeShipping(cart.total_price, formatter);
        }
        var cartDataItems = cart.items;
        $.each(cartDataItems, function () {
          var match = 0;
          var sku = $(this)[0]["sku"];
          var handle = $(this)[0]["handle"];
          var price = $(this)[0]["price"];
          var image = $(this)[0]["image"];
          // now that we added the item, add to the total cart amount
          var formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });
          var PriceFormatted = formatter.format(price / 100);
          var product_title = $(this)[0]["product_title"];
          var variant_title = $(this)[0]["variant_title"];
          if (variant_title === null) {
            variant_title = "";
          }
          var variant_id = $(this)[0]["variant_id"];
          var quantity = $(this)[0]["quantity"];
          var key = $(this)[0]["key"];
          var img = $(this)[0]["image"];
          var url = $(this)[0]["url"];
          // look for that variant, update quantity, if not add the item to cart
          $(".cart-item-titles").each(function () {
            var item_sku = $(this).attr("item-data-sku");

            if (sku === item_sku) {
              // sku matches, update quantity only
              $(this)
                .find(".quantity-select")
                .find(".input-wrapper")
                .find("input")
                .attr("value", quantity);
              match = 1;
            }
          });
          // since variant still hasn't been found, we have to add it to cart ourselves
          if (match === 0) {
            var html =
              '<div class="cart-item-slider regular" style="overlow-y:none; padding:0.5em 0" data-tags=""><a class="image-url-cart" href="' +
              url +
              '"><img class="cart-item-image" src="' +
              img +
              '"></a><div class="cart-item-titles" item-data-sku="' +
              sku +
              '"><p class="cart-item-product-title"><b>' +
              product_title +
              '</b></p><span class="variant cart-slide-variant">' +
              variant_title +
              '</span><div class="td cart-item-price" data-handle="' +
              handle +
              '"><span class="money compare-at" actual-price=""></span><span class="money actual" actual-price="' +
              price +
              '">' +
              PriceFormatted +
              '</span><div></div></div><div class="quantity-select cart-items" data-variant-id="' +
              variant_id +
              '" data-item-id="' +
              key +
              '"> <div class="button-wrapper"><button class="adjust-slider minus">-</button></div><div class="input-wrapper"><input type="text" class="slider-quantity" min="1" pattern="[0-9]*" value="1"></div><div class="button-wrapper"><button class="adjust-slider plus">+</button></div></div><a href="#" class="remove-item"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.28125 3.28125L3.86719 12.6562C3.89502 13.1979 4.28906 13.5938 4.80469 13.5938H10.1953C10.713 13.5938 11.0997 13.1979 11.1328 12.6562L11.7188 3.28125" stroke="#8F8F8F" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.34375 3.28125H12.6562H2.34375Z" fill="#8F8F8F"></path><path d="M2.34375 3.28125H12.6562" stroke="#8F8F8F" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M9.60938 5.15625L9.375 11.7188M5.625 3.28125V2.10938C5.62473 2.01697 5.64273 1.92541 5.67797 1.83998C5.71321 1.75455 5.76499 1.67693 5.83034 1.61159C5.89568 1.54624 5.9733 1.49446 6.05873 1.45922C6.14416 1.42398 6.23571 1.40598 6.32812 1.40625H8.67188C8.76429 1.40598 8.85584 1.42398 8.94127 1.45922C9.0267 1.49446 9.10432 1.54624 9.16966 1.61159C9.23501 1.67693 9.28679 1.75455 9.32203 1.83998C9.35727 1.92541 9.37527 2.01697 9.375 2.10938V3.28125H5.625ZM7.5 5.15625V11.7188V5.15625ZM5.39062 5.15625L5.625 11.7188L5.39062 5.15625Z" stroke="#8F8F8F" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></div>';
            $(html).insertAfter(".cart-upsell");
          }
        });
        //  $(".inner-cart").load(location.href + " .inner-cart");
        // if ($(".inner-cart").css("display") === "none") {
        //   $(".inner-cart").fadeIn("slow");
        // }
        // if ($(".slider-main").css("display") === "none") {
        //   $(".slider-main").show();
        // }
        //  $('.popup-overlay').hide();

        // $("body").css("overflow-y", "hidden");
        // findScreen();
      });
    },
  });
});
// we need to make sure that if we load the tobacco page straight up, the pop up shows
var actualURL = window.location.href;
// as soon as the page loads, we can check to see if we have sold out content for that variant and if so, show the pop w/ relevant products
setTimeout(function () {
  var searchSoldOut = 0;
  if ($("#ProductSelect-product-template").length > 0) {
    // I can now pick the variant and see if has sold out text
    var variantText = $(
      "#SingleOptionSelector-product-template-0 option:selected"
    ).val();
    var actualText = $(
      "#SingleOptionSelector-product-template-0 option:selected"
    )
      .text()
      .trim();

    var variant = "";
    $("#ProductSelect-product-template option").each(function () {
      if (variantText === $(this).attr("data-variant-title")) {
        variant = parseInt($(this).val());
      }
    });

    if (actualText.indexOf("SOLD OUT") > -1) {
      searchSoldOut = 1;
    }
  }
  // we also have to make sure pop up content exist for this variant
  var popUpContent = 0;
  $(".cart-up-inner-flex.soldout").each(function () {
    var variant_id = parseInt($(this).attr("data-variant-id"));
    if (variant_id === variant) {
      // set popupcontent to 1 because content exist now and we know we can show it
      popUpContent = 1;
    }
  });

  if (
    actualURL.indexOf(variant) > -1 &&
    searchSoldOut === 1 &&
    popUpContent === 1
  ) {
    soldoutPop(variantText, variant);
  }
}, 150);
function soldoutPop(text, variant_id) {
  // before showing anything we need to dynamically change the title and variant name
  var prodTitle = $("h1").text();
  var variantTitle = text;
  $(".prod-variant-sold-out").text(prodTitle + " " + variantTitle);
  $("body").attr("style", "overflow: hidden !important");
  $("html").attr("style", "overflow:hidden;");
  $(".cart-up-inner-flex.soldout.active").removeClass("active");
  $('.cart-up-inner-flex[data-variant-id="' + variant_id + '"]').each(function (
    i
  ) {
    if (i === 0) {
      $(this).addClass("active");
    } else {
    }
  });
  $(".popup-overlay").show();
  setTimeout(function () {
    let flexContainer = document.querySelector(
      "cart-up-inner-flex.soldout.active. product-up-info"
    );

    if (flexContainer) {
      let initialHeight = flexContainer.offsetHeight;
      let initialWidth = flexContainer.offsetWidth;
      flexContainer.style.height = initialHeight + "px";
      $(".product-up-info").each(function () {
        if ($(this).hasClass("carts")) {
        } else {
          $(this).css("height", flexContainer.offsetHeight);
          $(this).css("width", flexContainer.offsetWidth);
        }
      });
    } else {
      console.error("Element not found.");
    }
  }, 500);
}

function showCart() {
  if ($(".inner-cart").css("display") === "none") {
    $(".inner-cart").fadeIn("slow");
  }

  if ($(".slider-main").css("display") === "none") {
    $(".slider-main").show();
  }
}

function afterAddAction(text) {
  $.toast({
    text: `${text} | <button style="
    background: none!important;
    border: none;
    padding: 0!important;
    font-size: 12px !important;
    font-weight: bold !important;
    /*optional*/
    font-family: arial, sans-serif;
    /*input has OS specific font-family*/
    color: #eeeeee;
    text-decoration: underline;
    cursor: pointer;" onclick="showCart()">
      View Cart
    </button>`, // Text that is to be shown in the toast

    showHideTransition: "fade", // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 1500, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: false, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: "bottom-center", // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    bgColor: "#444444", // Background color of the toast
    textColor: "#eeeeee", // Text color of the toast
    textAlign: "left", // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: "#9EC600", // Background color of the toast loader
  });
}

(function () {
  if (typeof productOptions != "undefined") {
    for (i = 0; i < productOptions.length; i++) {
      const vowels = ["a", "e", "i", "o", "u"];
      const firstOptionLetter = productOptions[i][i][0].toLowerCase();
      let indef = "a";

      if (vowels.includes(firstOptionLetter)) {
        indef = "an";
      }

      const select = document.querySelectorAll(".single-option-selector")[i];
      const options = select.querySelectorAll("option");

      if (options.length > 1) {
        let optionText = productOptions[i][i];

        if (
          !optionText.toLowerCase().startsWith("pick") &&
          !optionText.toLowerCase().startsWith("choose")
        ) {
          optionText = "Choose " + indef + " " + productOptions[i][i];
        }

        options[0].text = optionText;
      }
    }
  }
})();

function isTextClamped(element) {
  return element.scrollHeight > element.clientHeight;
}

$(document).ready(function () {
  const readMore = $("#read_more_container");

  if (readMore.length === 0) {
    return;
  }

  if (isTextClamped(readMore[0])) {
    const moreBtn = $("#morebtn");
    moreBtn.css("display", "block");
  }
});

function readMore() {
  const readMore = $("#read_more_container");
  const moreBtn = $("#morebtn");

  if (isTextClamped(readMore[0])) {
    moreBtn.text("Read less");
    readMore.removeClass("clamp_10_m5");
  } else {
    moreBtn.text("Read more");
    readMore.addClass("clamp_10_m5");
  }
}
