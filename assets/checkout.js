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

const restricted_states = [
  { type: "state", name: "Arkansas", abbreviation: "ar" },
  { type: "state", name: "⁠Utah", abbreviation: "ut" },
  { type: "state", name: "District of Columbia", abbreviation: "dc" },
  { type: "state", name: "⁠Maine", abbreviation: "me" },
  { type: "state", name: "⁠Oregon", abbreviation: "or" },
  { type: "state", name: "⁠New Hampshire", abbreviation: "nh" },
  // { type: "state", name: "⁠Maryland", abbreviation: "md" },
  { type: "state", name: "⁠Vermont", abbreviation: "vt" },
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
  return (
    "Unfortunately, we're not allowed to ship vapes to " +
    area +
    " because of regulations designed to block legitimate vape sales. Here's one workaround  - if you have friends and family living in other states, deliver it to them and they can ship it to you.  States that are most accessible include: Florida, Texas, West Virginia, Virginia, Rhode Island, Connecticut, Nebraska, Oklahoma, New Mexico, Michigan, Ohio, South Carolina, North Carolina, Tennessee, North Dakota, South Dakota, Idaho, Montana, and Washington State. 🫶🤝"
  );
}

function showPickupAvailable() {
  $(".intl-text.pickup").text(
    "Congratulations! Pick up and delivery are available in your area!"
  );
}

function showDeliveryAvailable() {
  $(".intl-text.pickup").text(
    "Congratulations! Delivery is available in your area!"
  );
}

function showShippingUnavailable(state) {
  const unavailable_text = getServiceAreaAlertText(state);
  $(".intl-text.pickup").text(unavailable_text);

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

function getServiceAreaAlert(area, e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  alert(getServiceAreaAlertText(area));
}

$(document).ready(function () {
  console.log("running custom scripts for checkout");

  $.fn.simulateClick = function () {
    return this.each(function () {
      if ("createEvent" in document) {
        var doc = this.ownerDocument,
          evt = doc.createEvent("MouseEvents");
        evt.initMouseEvent(
          "click",
          true,
          true,
          doc.defaultView,
          1,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        this.dispatchEvent(evt);
      } else {
        this.click(); // IE
      }
    });
  };
  /* disabling for now, turning off Excise on 4/25/23 per Dino request 
  setTimeout(function() {
    ExciseTaxCalc();
  },500);
  */

  // same day text update
  $('[data-shipping-method-label-title="Local Delivery"]').html(
    "Same Day Delivery"
  );
  $('[for="checkout_id_delivery-shipping"]').append(
    $(
      "<div style='padding-left:25px;'><div style='color:#8e8e8e;margin:10px 0;'>Rapid dispatch directly to your door from our regional fulfillment centers</div></div>"
    )
  );

  // if the page loads and province of Maine is selected, hit customer with alert message
  setTimeout(function () {
    if ($("#checkout_shipping_address_province").length > 0) {
      var province = $("#checkout_shipping_address_province").val();
      for (const state of restricted_states) {
        if (state.abbreviation !== province.toLowerCase()) {
          continue;
        }

        alert(getServiceAreaAlertText(state.name));
        break;
      }
    }
  }, 250);
  // pickup Logic

  var pickup = 0;
  $(".heading-3").each(function () {
    var text = $(this).text();
    if (text === "Pickup location") {
      pickup = 1;
    } else {
      // keep pickup 0
    }
  });
  if (pickup === 1) {
    $('div[data-summary-order-updates="true"]').hide();
  }
  // end pickup Logic

  // phone Number logic and Hawaii

  var myVar = localStorage["phoneNumber"];
  if (typeof myVar === "undefined") {
    // do nothing, no phone number for this user exists
  } else {
    $("#checkout_shipping_address_phone").val(myVar);
    $("#checkout_billing_address_phone").val(myVar);
  }

  $("#continue_button").click(function (e) {
    if (
      $(this).find("span").text().toLowerCase() ===
      "continue to shipping details"
    ) {
      if ($("#checkout_shipping_address_phone").length > 0) {
        localStorage["phoneNumber"] = $(
          "#checkout_shipping_address_phone"
        ).val(); // only strings
      }

      var city = $("#checkout_shipping_address_city").val();
      var province = $("#checkout_shipping_address_province").val();
      var zip = $("#checkout_shipping_address_zip").val();
      var country = $("#checkout_shipping_address_country").val();
      var totalDue = parseInt(
        $(".total-line__price")
          .find(".order-summary__emphasis")
          .attr("data-checkout-subtotal-price-target")
      );

      if (
        totalDue < 15000 &&
        country === "United States" &&
        (province === "HI" || province === "AK")
      ) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        alert(
          "Due to shipping limitations to Hawaii and Alaska, White Horse Vapor imposes a minimum order threshold of $150.00 in products to facilitate an order being sent to Hawaii and Alaska. Please verify that your cart is at the minimum purchase requirement before proceeding with checkout."
        );
      }

      if ($("#checkout_shipping_address_city").length > 0) {
        localStorage["myCity"] = $("#checkout_shipping_address_city").val(); // only strings
      }

      for (const state of restricted_states) {
        console.log({ state, province });
        if (state.abbreviation !== province.toLowerCase()) {
          continue;
        }

        getServiceAreaAlert(state.name, e);
        break;
      }

      for (const restricted_area of restriction_list) {
        const is_restricted = checkServiceAlert(
          restricted_area.zip_list,
          zip,
          () => getServiceAreaAlert(restricted_area.service_area, e)
        );

        if (is_restricted) {
          break;
        }
      }

      // if (D8_RESTRICTED_STATES.has(province.toLowerCase())) {
      //   const d8_restricted_line_items = [];
      //   for (const line_item of window.line_items) {
      //     const tags = line_item.tags.map((tag) => tag.toLowerCase());
      //     console.log({ tags: line_item.tags });

      //     if (tags.includes("delta8")) {
      //       d8_restricted_line_items.push(line_item);
      //     }
      //   }

      //   if (d8_restricted_line_items.length > 0) {
      //     const line_item_names = d8_restricted_line_items
      //       .map((line_item) => {
      //         return line_item.title;
      //       })
      //       .join(", ");

      //     e.preventDefault();
      //     e.stopPropagation();
      //     e.stopImmediatePropagation();
      //     alert(
      //       "Sorry, the address you entered is in a state where Delta 8-THC is not yet legal. We’re not allowed to ship that to you. Please remove the following items from your cart and try again: " +
      //         line_item_names
      //     );
      //   }
      // }
    }
  });

  // end of phone number and Hawaii Logic

  /// enhance pick up location details and po box validations

  $(".small-text").each(function () {
    var text = $(this).text();
    if (text === "1483 Mineral Spring Avenue, North Providence RI") {
      $(this).text("1483 Mineral Spring Avenue, North Providence RI 02904");
    }
  });

  $(document).on("change", 'input[type="radio"]', function () {
    var id = $(this).val();

    if (id === "delivery-pickup") {
      setTimeout(function () {
        $(".small-text").each(function () {
          var text = $(this).text();
          if (text === "1483 Mineral Spring Avenue, North Providence RI") {
            $(this).text(
              "1483 Mineral Spring Avenue, North Providence RI 02904"
            );
          }
        });
      }, 150);
    }
  });

  $("#continue_button").click(function (e) {
    if (
      $(this).find("span").text().toLowerCase() ===
      "continue to shipping details"
    ) {
      e.preventDefault();
      var address1 = $("#checkout_shipping_address_address1")
        .val()
        .toLowerCase();
      var address2 = $("#checkout_shipping_address_address2")
        .val()
        .toLowerCase();
      if (
        address1.indexOf("po box") > -1 ||
        address1.indexOf("p.o. box") > -1 ||
        address1.indexOf("p.o box") > -1 ||
        address1.indexOf("po. box") > -1 ||
        address1.indexOf("pobox") > -1 ||
        address1.indexOf("p.obox") > -1 ||
        address1.indexOf("post office box") > -1
      ) {
        alert(
          "Unfortunately we're not able to ship to P.O. BOXes. Please provide a residential or business address."
        );
        $("#checkout_shipping_address_address1").css("border", "2px solid red");
      } else if (
        address2.indexOf("po box") > -1 ||
        address2.indexOf("p.o. box") > -1 ||
        address2.indexOf("p.o box") > -1 ||
        address2.indexOf("po. box") > -1 ||
        address2.indexOf("pobox") > -1 ||
        address2.indexOf("p.obox") > -1 ||
        address2.indexOf("post office box") > -1
      ) {
        alert(
          "Unfortunately we're not able to ship to P.O. BOXes. Please provide a residential or business address."
        );
        $("#checkout_shipping_address_address2").css("border", "2px solid red");
      } else {
        $("#checkout_shipping_address_address2").css(
          "border",
          "1px solid #d9d9d9"
        );
        $("#checkout_shipping_address_address1").css(
          "border",
          "1px solid #d9d9d9"
        );
        localStorage["myAbb"] = $(
          "#checkout_shipping_address_province option:selected"
        ).attr("value");
        localStorage["myZip"] = $("#checkout_shipping_address_zip").val();
        $(this).simulateClick();
      }
    }
  });
  // end of pick up enhancement and po box validations

  // tax disclaimer
  if ($(".section--payment-method")) {
    $(".section--payment-method").append(
      '<img class="ssl" src="https://cdn.shopify.com/s/files/1/0743/6343/files/SSL.png?v=1665066189">'
    );
  }
  $(
    '<p style="margin-bottom:1em;">**Please note that your purchases may be subject to applicable taxes. We diligently adhere to state laws and regulations regarding taxation. Where required by law, all excise taxes are included in the purchase price.</p>'
  ).insertBefore($(".main__footer"));

  // end of tax disclaimer

  // pick up code logic
  var customerZip = localStorage["myZip"] || "defaultValue";
  var customState = localStorage["myAbb"] || "defaultState";

  $("#checkout_shipping_address_zip").change(function () {
    customerZip = $("#checkout_shipping_address_zip").val();
    localStorage["myZip"] = customerZip;
  });

  if (
    customState === "MA" ||
    customState === "RI" ||
    customState === "CT" ||
    customState === "NH" ||
    customState === "VT" ||
    customState === "ME" ||
    customState === "defaultState" ||
    customState === "undefined" ||
    typeof customState === "undefined" ||
    customState === "" ||
    customState === "NY" ||
    customState === "ZA"
  ) {
    // do nothing
  } else {
    $(".radio__label__primary").each(function () {
      var radioText = $(this).text().trim();
      if (radioText === "Pick up") {
        $(this).parent().parent().parent().hide();
      }
    });
  }
  /// setting state to geo location
  $("body").on("change", "#checkout_shipping_address_province", function () {
    $("#checkout_shipping_address_province option").each(function () {
      if ($(this).prop("selected") === true) {
        customState = $(this).attr("value");
        localStorage["myAbb"] = customState;
      } else {
        // don't assign state at all
      }
    });

    if (
      customState === "MA" ||
      customState === "RI" ||
      customState === "CT" ||
      customState === "NH" ||
      customState === "VT" ||
      customState === "ME" ||
      customState === "defaultState" ||
      customState === "ZA"
    ) {
      $(".radio__label__primary").each(function () {
        var radioText = $(this).text().trim();
        if (radioText === "Pick up") {
          $(this).parent().parent().parent().show();
        }
      });
    } else {
      $(".radio__label__primary").each(function () {
        var radioText = $(this).text().trim();
        if (radioText === "Pick up") {
          $(this).parent().parent().parent().hide();
        }
      });
    }
  });
  // end of pick up code logic

  // same day delivery logic
  /*
  var City = localStorage["myCity"] || "defaultCity";
  var State = localStorage["myState"] || "defaultState";
  var texasZips =
    "75010,75019,75023,75024,75025,75032,75038,75039,75040,75041,75042,75043,75044,75048,75050,75051,75052,75054,75057,75060,75061,75062,75063,75067,75074,75075,75080,75081,75082,75087,75088,75089,75093,75094,75104,75114,75115,75116,75125,75126,75134,75137,75141,75146,75149,75150,75152,75154,75159,75165,75172,75180,75181,75182,75201,75202,75203,75204,75205,75206,75207,75208,75209,75210,75211,75212,75214,75215,75216,75217,75218,75219,75220,75223,75224,75225,75226,75227,75228,75229,75230,75231,75232,75233,75234,75235,75236,75237,75238,75240,75241,75243,75244,75246,75247,75248,75249,75251,75252,75253,75254,75287,76001,76002,76006,76010,76011,76012,76013,76014,76015,76016,76017,76018,76021,76022,76034,76039,76040,76051,76053,76054,76063,76065,76118,76120,76155";
  $(".state-div").text(State);
  var sameDay = "no";
  var isSameDay = "no";
  var address = $(".address--tight").text().trim();
  // console.log(address);
  if (address.indexOf("TX") > -1) {
    var TXloc = address.indexOf("TX");
    var breakAddress = address.substring(TXloc, address.length);
    breakAddress = breakAddress.replace("TX ", "");
    breakAddress = breakAddress.substring(0, breakAddress.indexOf(","));
    breakAddress = breakAddress.trim();
    //    console.log('my breakAddress is ' + breakAddress);
  }
  var actualTotal;
  $(".order-summary__emphasis").each(function () {
    var subtotal = $(this).attr("data-checkout-subtotal-price-target");
    if (subtotal != null) {
      actualTotal = parseInt(subtotal);
    }
  });
  if (
    State === "RI" ||
    State === "MA" ||
    address.indexOf("RI") > -1 ||
    address.indexOf("MA") > -1
  ) {
    sameDay = "yes";
  }
  if (address.indexOf("TX") > -1 && texasZips.indexOf(breakAddress) > -1) {
    //    console.log('I am making this same day');
    sameDay = "yes";
  }
  if (sameDay === "no") {
    // check the tight address in case we ended up on payment page first
    if (address.indexOf("MA") > -1 || address.indexOf("RI") > -1) {
      sameDay = "yes";
    }
  }
  // console.log('same day is '+sameDay);
  var buttonText = $("#continue_button").find("span").text();
  //  console.log('button text is ' + buttonText);
  if (buttonText === "Continue to payment") {
    isSameDay = $(".customer-div").text().trim();

    if (isSameDay !== "Same Day Delivery") {
      //    console.log('running this');
      // take customer email and make sure they aren't same day
      var form = new FormData();
      var email_address = $("bdo").text();
      var order_count = 0;
      var variant_list = "";
      $(".product").each(function () {
        var variant_id = $(this).attr("data-variant-id");
        if (variant_id != null) {
          variant_list += variant_id + ",";
        }
      });
      variant_list = variant_list.substring(0, variant_list.length - 1);
      //   console.log('my variant is list is ' + variant_list);
      form.append("variants", variant_list);
      form.append("email", email_address);
      if (address.indexOf("MA") > -1 || address.indexOf("RI") > -1) {
        var settings = {
          url: "https://deksaws.com/get_customer_WH_AWS.php",
          method: "POST",
          timeout: 0,
          processData: false,
          mimeType: "multipart/form-data",
          contentType: false,
          data: form,
        };
      } else if (address.indexOf("TX") > -1) {
        var settings = {
          url: "https://deksaws.com/get_customer_WH_TX_V2.php",
          method: "POST",
          timeout: 0,
          processData: false,
          mimeType: "multipart/form-data",
          contentType: false,
          data: form,
        };
      }
      $.ajax(settings).done(function (response) {
        var order_count = response;
        // console.log(order_count);
        // console.log('this is my order count' + order_count);
        var state = $(".state-div").text();
        //     console.log('order count is ' + order_count);
        if (
          order_count >= 3 &&
          (state === "RI" || address.indexOf("RI") > -1)
        ) {
          isSameDay = "Same Day Delivery";
        }
        if (order_count >= 1 && texasZips.indexOf(breakAddress) > -1) {
          //  console.log('I am same day delivery');
          isSameDay = "Same Day Delivery";
        }
        /*       if (order_count >= 6 && (state === 'MA' || address.indexOf('MA') > -1)) {
      isSameDay = 'Same Day Delivery';
       } 
        //     console.log('same day within Ajax is ' + sameDay);
        if (sameDay === "no") {
          isSameDay = "No Same Day Delivery";
        }
        var subLength = 0;
        $(".total-line__price").each(function () {
          var subTotal = $(this)
            .find("span")
            .attr("data-checkout-subtotal-price-target");
          if (typeof subTotal !== "undefined") {
            subLength = subTotal.length;
          }
        });
        // console.log('my last same day is ' + isSameDay)
        $(".radio__label").each(function () {
          var radioText = $(this).find(".radio__label__primary").text().trim();
          if (radioText === "Same Day Delivery") {
            $(this).parent().parent().hide();
          } else {
            // do nothing, same day delivery available
          }
        });
      });
    }
  }
*/
  // end of same day delivery logic

  // excise tax and shipping settings
  var buttonText = $("#continue_button").find("span").text();
  // console.log('button text is ' + buttonText);
  // direction from Dino, set standard fulfillment as teh default option; it used to be Expedited Fulfillment
  if (buttonText.toLowerCase() === "continue to payment") {
    $(".radio__label").each(function () {
      var radioText = $(this).find(".radio__label__primary").text().trim();
      if (
        radioText === "Standard Fulfillment" ||
        $(this)
          .find(".radio__label__primary")
          .attr("data-shipping-method-label-title") === "Standard Fulfillment"
      ) {
        $(this)
          .parent()
          .parent()
          .find("radio__input")
          .find("input")
          .prop("checked", true);
        $(this).parent().find(".radio__input").find("input").simulateClick();
      }
    });
  }
  // turning off this Excise Tax as requested 02/06/23
  // turning vape tax back on per Dino 4/18/23
  /* disabling for now, turning off Excise on 4/25/23 per Dino request 
  function ExciseTaxCalc() {
    // before we get started, we need to make sure that the state div is up-to-date
    var currentState = localStorage["myAbb"];
    if (currentState != $('.state-div').text()) {
      // set the state div to the correct state
      $('.state-div').text(currentState);
    }
    var buttonText = $("#continue_button").find("span").text();
     if ($("#continue_button").find("span").text() === "Continue to shipping details") {
  var selectedState = $(
        "#checkout_shipping_address_province option:selected"
      ).attr("value");
   //   console.log('I think this state is selected' + selectedState);
    } else {
      var selectedState = $(".state-div").text();
    }
   // alert('my select state is ' + selectedState);
    if (selectedState) {
      localStorage["myAbb"] = selectedState;
     //       console.log('my state is ' + selectedState);
      if (selectedState === "NC" || selectedState === "WI" || selectedState === "OH" || selectedState === "WV" || selectedState === "CT" || selectedState === "VA" || selectedState === "KY" || selectedState === "NV" || selectedState === "CO" || selectedState === "IL" || selectedState === "IN" || selectedState === "WA" || selectedState === "CA" || selectedState === "NY" || selectedState === "MN" || selectedState === "WY") {
       
        if ($(".total-line.total-line--taxes").length > 1) {
          // dont clone or duplicate tax line, this one already exist
        } else {
          // duplicate line and call it vape taxes
          var newTax = $(".total-line.total-line--taxes").clone();
          newTax.appendTo($(".total-line-table__tbody"));
          $(".total-line.total-line--taxes")
            .eq(1)
            .find(".total-line__name")
            .text("**Vape Tax (" + selectedState + ")");
          // figure out excise taxes
        }
          var origTotal = parseInt($('.total-line--subtotal').find('.total-line__price').find('.order-summary__emphasis').attr('data-checkout-subtotal-price-target'));
          var Shipping = parseInt($('.total-line--shipping').find('.total-line__price').find('span').attr('data-checkout-total-shipping-target'));
          var subTotal = origTotal + Shipping;
          var existingTax = parseInt($('.total-line--taxes').find('.total-line__price').find('span').attr('data-checkout-total-taxes-target'));
        //  console.log('my existing tax is ' + existingTax);
          if (selectedState === "CA") {
            var newTax = origTotal * .15;
          }
          else if (selectedState === "NC") {
            var newTax = subTotal * .01;
          }
          else if (selectedState === "OH") {
            var newTax = subTotal * .03;
          }
          else if (selectedState === "WI") {
            var newTax = subTotal * .01;
          }
          else if (selectedState === "WV") {
            var newTax = subTotal * .04;
          }
          else if (selectedState === "CT") {
            var newTax = subTotal * .05;
          }
          else if (selectedState === "VA") {
            var newTax = origTotal * .05;
          }          else if (selectedState === "KY") {
            var newTax = subTotal * .06;
          }
          else if (selectedState === "NV") {
            var newTax = origTotal * .07;
          }          else if (selectedState === "WY") {
            var newTax = origTotal * .07;
          }
          else if (selectedState === "CO") {
            var newTax = subTotal * .10;
          }          else if (selectedState === "IL") {
            var newTax = subTotal * .10;
          }
          else if (selectedState === "IN") {
            var newTax = subTotal * .10;
          }          else if (selectedState === "WA") {
            var newTax = subTotal * .12;
          }
               else if (selectedState === "NY") {
            var newTax = subTotal * .15;
          }
          else if (selectedState === "MN") {
            var newTax = subTotal * .25;
          }
       //   console.log('my new Tax is ' + newTax);
          var newSales = existingTax - newTax;
          if (newSales < 0) {
            // if new sales is less than 0, then we have to wait onto next page to calculate taxes (Shopify hasn't calced them based on this state yet)
            $(".total-line.total-line--taxes").eq(1).hide();
          }
          else {
       //   console.log('my new sales tax is ' + newSales);
          newSales = (newSales/100).toFixed(2);
          newTax = (newTax/100).toFixed(2);
            newTax = newTax.toString();
            newTax = "$" + newTax;
            newSales = newSales.toString();
            newSales = "$" + newSales;
            $(".total-line.total-line--taxes")
              .eq(0)
              .find(".total-line__price")
              .find(".order-summary__emphasis")
              .text(newSales);
            $(".total-line.total-line--taxes")
              .eq(1)
              .find(".total-line__price")
              .find(".order-summary__emphasis")
              .text(newTax);
        }
      }
  }
}
  // end of excise tax and shipping settings
*/
  // processing times and information
  const FREE_SHIPPING_SHORT_DESCRIPTION =
    "(Ground Shipping, 3-5 business days)";
  const FREE_SHIPPING_DESCRIPTION =
    "Free Service usually ships in 2-3 business days and is sent via Ground Shipping. We process your order when it's received then match it to the ID you uploaded to ensure we re legally compliant.";
  const STANDARD_SHIPPING_SHORT_DESCRIPTION =
    "(Ground Shipping, 2-4 business days)";
  const STANDARD_SHIPPING_DESCRIPTION =
    "Standard Service ships in 1-2 business days and is sent via Ground Shipping. We process your order when it's received then match it to the ID you uploaded to ensure we re legally compliant.";
  const SPEEDY_SHIPPING_SHORT_DESCRIPTION =
    "(Ground Shipping, 1-3 business days)";
  const SPEEDY_SHIPPING_DESCRIPTION =
    "Speedy Handling ships within 1 business day and is sent via Ground Shipping. We process your order when it's received, then match it to the ID you uploaded to ensure we're legally compliant.";

  var mainHeader = $("#main-header").text().trim().toLowerCase();
  if (mainHeader === "choose your shipping method") {
    $(
      '<p style="color:#0c8eff;margin-top:1em;">We aim to get your product to you as fast as possible. Our 4 US-Based Fulfillment centers will usually process standard fulfillment orders within 24-36 hours. <br><span style="font-weight:900;">EXPEDITED FULFILLMENT</span> is processed on the same business day.</p>'
    ).insertAfter($("#main-header"));
  }
  var length = $(".section--shipping-method").length;
  if (length > 0) {
    var maxSize = 0;
    $(".radio__label__primary").each(function () {
      var width = $(this).width();
      //     console.log(width);
      if (width > maxSize) {
        maxSize = width;
      }
    });
    $(".radio__label__primary").each(function () {
      $(this).outerWidth(maxSize);
    });
    $(".radio__label__primary").each(function () {
      var text = $(this).text().trim();
      if (text === "Ground Shipping") {
        $(
          `<div class="info-container"><img id="standard-info" class="info" src="https://cdn.shopify.com/s/files/1/0743/6343/files/info-button.png?v=1656337884"><span>(Ground shipping, 4-5 business days)</span><div class="info-absolute"><p class="close-info">X</p><p>Standard shipping is the time it takes for your order to be verified, filled, and for details about your fulfillment to be hashed out. This whole process takes 2-4 business days, but tends to be shorter if this is not your first order with us.</p></div></div>`
        ).insertAfter($(this));
      }
      if (
        text === "Standard Fulfillment" ||
        text === "Standard Shipping" ||
        text === "Standard"
      ) {
        $(
          `<div class="info-container">
          <img id="standard-info" class="info" src="https://cdn.shopify.com/s/files/1/0743/6343/files/info-button.png?v=1656337884">
          <span>${STANDARD_SHIPPING_SHORT_DESCRIPTION}</span><div class="info-absolute"><p class="close-info">X</p><p>${STANDARD_SHIPPING_DESCRIPTION}</p></div></div>`
        ).insertAfter($(this));
        var parentMove = $(this).parent().parent().parent();
        var parentTop = $(this).parent().parent().parent().parent();
        parentTop.prepend(parentMove);
      }
      if (
        text === "Priority Shipping" ||
        text === "Expedited Shipping" ||
        text === "Expedited Fulfillment" ||
        text === "Speedy Handling"
      ) {
        var windowWidth = $(window).width();
        //       console.log('my window width is ' + windowWidth);
        if (windowWidth > 767) {
          $(this)
            .parent()
            .parent()
            .attr(
              "style",
              "display: flex;justify-content: center;align-items: center;"
            );
          $(this)
            .parent()
            .attr("style", "display:flex;align-items:center;flex-wrap:wrap;");
          $(this).css("justify-self", "start");
          $(this)
            .parent()
            .find(".radio__label__accessory")
            .find(".content-box__emphasis")
            .attr("style", "position: absolute;right: 16px;top: 30px;");
        }
        $(this).html(
          '<img src="https://cdn.shopify.com/s/files/1/0743/6343/files/SpeedyHandling-Cropped.jpg?v=1685712231" style="width:100%">'
        );
        $(
          `<div class="info-container">
          <img id="expedited-info" class="info" src="https://cdn.shopify.com/s/files/1/0743/6343/files/info-button.png?v=1656337884">
          <span>${SPEEDY_SHIPPING_SHORT_DESCRIPTION}</span><div class="info-absolute"><p class="close-info">X</p><p>${SPEEDY_SHIPPING_DESCRIPTION}</p></div></div>`
        ).insertAfter($(this));
        var parentMove = $(this).parent().parent().parent();
        var parentTop = $(this).parent().parent().parent().parent();
        parentTop.prepend(parentMove);
      }
      if (text === "Same Day Delivery") {
        $(
          '<div class="info-container"><img id="expedited-info" class="info" src="https://cdn.shopify.com/s/files/1/0743/6343/files/info-button.png?v=1656337884"><span>(only if placed before 2pm EST)</span><div class="info-absolute"><p class="close-info">X</p><p>Same Day Delivery usually arrives by 8pm if the order is placed by 2pm that day. Orders received after 2pm are sent out the next day. We process your order when it’s received, then match it to the ID you uploaded to ensure we’re legally compliant.</p></div></div>'
        ).insertAfter($(this));
        var parentMove = $(this).parent().parent().parent();
        var parentTop = $(this).parent().parent().parent().parent();
        parentTop.prepend(parentMove);
      }
      if (text === "Free Shipping" || text === "Free Fulfillment") {
        $(
          `<div class="info-container">
          <img id="standard-info" class="info" src="https://cdn.shopify.com/s/files/1/0743/6343/files/info-button.png?v=1656337884">
          <span>${FREE_SHIPPING_SHORT_DESCRIPTION}</span><div class="info-absolute"><p>${FREE_SHIPPING_DESCRIPTION}</p></div></div>`
        ).insertAfter($(this));
      }
    });
  }
  $(document).on("mouseover", ".info", function () {
    $(this).parent().find(".info-absolute").show();
  });
  $(document).on("mouseout", ".info", function () {
    $(this).parent().find(".info-absolute").hide();
  });
  $(document).on("click", ".info", function () {
    $(this).parent().find(".info-absolute").show();
  });
  // end of processing times and information

  $(".layout-flex__item").each(function () {
    var spanText = $(this).find("span").text();

    if (spanText === "Already have an account?Already have an account?") {
      $(this).prepend(
        '<p class="crt-acc"><a href="/account/register">Create an Account</a></p>'
      );
    }
  });
  // if billing address exists, we must set it to default to USA

  setTimeout(function () {
    if ($("#checkout_billing_address_country").length > 0) {
      // if billing country isn't USA, we need to set it
      if (
        $("#checkout_billing_address_country option:selected").val() !=
        "United States"
      ) {
        $("#checkout_billing_address_country option").each(function (e) {
          if (e === 0) {
            //  console.log('setting this to to true ' + $(this).val());
            $(this).prop("selected", true);
            $("#checkout_billing_address_country option").trigger("change");
          } else {
            $(this).prop("selected", false);
          }
        });
      }
    }
  }, 250);

  // on load determine if this is billing and is being shipped to CA; if so we must override the normal button to prevent age checker from running and run our match logic
  /*
setTimeout(function() {
  console.log('my cotinue button ischeck_stock_RI ' + $('#continue_button').find("span").text());
  var shipping = $('.address--tight').text().trim();
  if ($('#continue_button').find("span").text() === 'Verify age & pay now' && shipping.indexOf(' CA ' ) > -1) {
   var cloned = $('#continue_button').clone();
   cloned.attr('id','duped-continue');
   cloned.attr('class','step__footer__continue-btn btn');
   cloned.appendTo('.step__footer .shown-if-js');
   $('#continue_button').eq(0).hide();
  }
},250);

$('body').on('click','#duped-continue',function(e) {
 if ($('#checkout_different_billing_address_true').prop('checked') === true) {
  // check state to see if it's california
  var state = $('#checkout_billing_address_province option:selected').attr('value');
  var shipping = $('.address--tight').text().trim();
  if (state === 'CA' || shipping.indexOf(' CA ' ) > -1) {
  // we must stop it now because address could be different than shipping and CA has different laws
  // define shipping address

  console.log('my shipping address is ' + shipping);
  // now that we know it is CA, let's make sure all address components are in the Shipping address
  var street = $('#checkout_billing_address_address1').val() + ', ';
  var street2 = $('#checkout_billing_address_address2').val();
  console.log ('my street 2 is ' + street2);
  if (typeof(street2) != 'undefined' && street2 != '' && street2 != null) {
    street2 = street2 + ', ';
  }
  var city = $('#checkout_billing_address_city').val() + ' ';
  var zip = $('#checkout_billing_address_zip').val() + ', ';
  var country = $('#checkout_billing_address_country option:selected').text();
  state = state + ' ';
   // we need to format the billing address accordingly
   var billing = street + street2 + city + state + zip + country;
   console.log('my formatted billing is ' + billing);
   if (shipping === billing) {
    // do nothing, we're all good
    
   }
   else {
    e.preventDefault();
    alert('For California, your billing and shipping must match exactly to place an order. Please make the necessary adjustments and then try to checkout again.');
   }
  }
  else {
    // let it go, oither states don't mind
  }
 }
 else {
  // let it go, no different billing
 }
});
*/
  // if user ends up on payment page but cannot pickup the items, we need to tell them and give them options
  // check review block content to see if it contains pick up
  // 9/28 - Disabled due to middleware issue not updating stock on "https://deksaws.com/check_stock_RI.php" endpoint
  // 9/28 - Renabled with new server endpoint
  setTimeout(function () {
    var pickupCheck = $(".review-block__content").text().trim();
    // console.log(pickupCheck);
    if (pickupCheck.indexOf("Pick up") > -1) {
      // this means pick up is selected and we must find out which products are out of stock at Rhode island location
      // console.log('I know there are items out of stock');
      var variant_list = "";
      $(".product").each(function () {
        var variant_id = $(this).attr("data-variant-id");
        if (variant_id != null) {
          variant_list += variant_id + ",";
        }
      });
      variant_list = variant_list.substring(0, variant_list.length - 1);
      var form = new FormData();
      form.append("variants", variant_list);
      var settings = {
        url: "https://vapewh-mw.zen5.io/check_stock_RI.php",
        method: "POST",
        timeout: 0,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
        data: form,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        if (response === "im in stock") {
          // all variants are in stock, nothing to be done
        } else {
          // now we have to collect the data from the checkout order details to populate our out of stock pop up
          $(".product").each(function () {
            var product_variant_id = $(this).attr("data-variant-id");
            console.log("this is my id " + product_variant_id);
            if (response.indexOf(product_variant_id) > -1) {
              // this product was found in out of stock list, we need to start building the data to populate in pop up
              var imgalt = $(this)
                .find(".product__image")
                .find(".product-thumbnail")
                .find(".product-thumbnail__wrapper")
                .find("img")
                .attr("alt");
              var imgsrc = $(this)
                .find(".product__image")
                .find(".product-thumbnail")
                .find(".product-thumbnail__wrapper")
                .find("img")
                .attr("src");
              var prodTitle = $(this)
                .find(".product__description")
                .find(".product__description__name")
                .text();
              var varTitle = $(this)
                .find(".product__description")
                .find(".product__description__variant")
                .text();
              console.log("this item is missing " + prodTitle + varTitle);
              // cycle through and make sure this item doesn't already exist in our list
              var foundItem = 0;
              if ($(".oos-flex").length > 0) {
                $(".oos-flex").each(function () {
                  var imgAltFlex = $(this)
                    .find(".product-thumbnail")
                    .find("img")
                    .attr("alt");
                  if (imgalt === imgAltFlex) {
                    foundItem = 1;
                  }
                });
              } else {
                // leave foundItem as 0 since no flex exist
              }
              if (foundItem === 0) {
                var itemHTML = $(
                  '<div class="oos-flex" data-variant-id="' +
                    product_variant_id +
                    '"><div class="product-thumbnail"><img alt="' +
                    imgalt +
                    '" class="product-thumbnail__image" src="' +
                    imgsrc +
                    '"></div><div class="product__description" scope="row"><span class="product__description__name order-summary__emphasis">' +
                    prodTitle +
                    '</span><span class="product__description__variant order-summary__small-text">' +
                    varTitle +
                    "</span></div></div>"
                );
                console.log("this is my HTML" + itemHTML);
                $(".oos-items").append(itemHTML);
              }
            }
          });
          /// after looping through all the products and adding them, let's show the pop up and not allow scrolling on body
          window.scrollTo(0, 0);
          $("body").css("overflow-y", "hidden");
          $(".oos-overlay").show();
        }
      });
    }
  }, 1500);

  // if a user selects pickup, we need to check to make sure all products exist at that location and if not, show a pop up allowing them to let them know which products are not available
  $("body").on(
    "click",
    'input[id="checkout_id_delivery-pickup"]',
    function (e) {
      var shipIt = localStorage["shipIt"] || "defaultValue";
      if (
        $('input[id="checkout_id_delivery-pickup"]').prop("checked") &&
        shipIt != "yes"
      ) {
        // this means pick up is selected and we must find out which products are out of stock at Rhode island location
        var variant_list = "";
        $(".product").each(function () {
          var variant_id = $(this).attr("data-variant-id");
          if (variant_id != null) {
            variant_list += variant_id + ",";
          }
        });
        variant_list = variant_list.substring(0, variant_list.length - 1);
        // console.log(variant_list);
        var form = new FormData();
        form.append("variants", variant_list);
        var settings = {
          url: "https://vapewh-mw.zen5.io/check_stock_RI.php",
          method: "POST",
          timeout: 0,
          processData: false,
          mimeType: "multipart/form-data",
          contentType: false,
          data: form,
        };
        $.ajax(settings).done(function (response) {
          // console.log(response);
          if (response === "im in stock") {
            // all variants are in stock, nothing to be done
          } else {
            // 9/28 - Disabled due to issues with "https://deksaws.com/check_stock_RI.php" endpoint
            // 9/28 - Reinabled with new server endpoint
            // now we have to collect the data from the checkout order details to populate our out of stock pop up
            $(".product").each(function () {
              var product_variant_id = $(this).attr("data-variant-id");
              // console.log('this is my id ' + product_variant_id);
              if (response.indexOf(product_variant_id) > -1) {
                // this product was found in out of stock list, we need to start building the data to populate in pop up
                var imgalt = $(this)
                  .find(".product__image")
                  .find(".product-thumbnail")
                  .find(".product-thumbnail__wrapper")
                  .find("img")
                  .attr("alt");
                var imgsrc = $(this)
                  .find(".product__image")
                  .find(".product-thumbnail")
                  .find(".product-thumbnail__wrapper")
                  .find("img")
                  .attr("src");
                var prodTitle = $(this)
                  .find(".product__description")
                  .find(".product__description__name")
                  .text();
                var varTitle = $(this)
                  .find(".product__description")
                  .find(".product__description__variant")
                  .text();
                // console.log('this item is missing ' + prodTitle + varTitle);
                // cycle through and make sure this item doesn't already exist in our list
                var foundItem = 0;
                if ($(".oos-flex").length > 0) {
                  $(".oos-flex").each(function () {
                    var imgAltFlex = $(this)
                      .find(".product-thumbnail")
                      .find("img")
                      .attr("alt");
                    if (imgalt === imgAltFlex) {
                      foundItem = 1;
                    }
                  });
                } else {
                  // leave foundItem as 0 since no flex exist
                }
                if (foundItem === 0) {
                  var itemHTML = $(
                    '<div class="oos-flex" data-variant-id="' +
                      product_variant_id +
                      '"><div class="product-thumbnail"><img alt="' +
                      imgalt +
                      '" class="product-thumbnail__image" src="' +
                      imgsrc +
                      '"></div><div class="product__description" scope="row"><span class="product__description__name order-summary__emphasis">' +
                      prodTitle +
                      '</span><span class="product__description__variant order-summary__small-text">' +
                      varTitle +
                      "</span></div></div>"
                  );
                  // console.log('this is my HTML' + itemHTML);
                  $(".oos-items").append(itemHTML);
                }
              }
            });
            /// after looping through all the products and adding them, let's show the pop up and not allow scrolling on body
            window.scrollTo(0, 0);
            $("body").css("overflow-y", "hidden");
            $(".oos-overlay").show();
          }
        });
      } else {
        // this means it's a delivery order and nothing needs to be done or delivery needs to be clicked
        if (shipIt === "yes") {
          // click the delivery button, I came from payment page potentially
          $("#checkout_id_delivery-shipping").click();
          localStorage["shipIt"] = "no";
        }
      }
      // if someone has clicked on pick up, we have to show it
      setTimeout(function () {
        $(".radio__label__primary").each(function () {
          //      console.log($(this));
          var radioText = $(this).text().trim();
          //      console.log(radioText);
          if (radioText === "Pick up") {
            //         console.log('trying to hide it');
            $(this).parent().parent().parent().show();
            $(this).parent().parent().parent().removeAttr("style");
          }
        });
      }, 250);
    }
  );

  // if user clicks delivery order to me, we need to pick the ship it to me radio button for them
  $("body").on("click", "#ship-it", function () {
    var pickupCheck = $(".review-block__content").text().trim();
    // console.log(pickupCheck);
    if (pickupCheck.indexOf("Pick up") > -1) {
      // we need to just go to the information button
      var goBack = $(".breadcrumb__link").eq(1).attr("href");
      localStorage["shipIt"] = "yes";
      window.location.href = goBack;
    } else {
      $(".oos-overlay").hide();
      $(".oos-overlay").removeAttr("style");
      $("#checkout_id_delivery-shipping").click();
      $("body").removeAttr("style");
    }
  });

  $("body").on("click", "#remove-and-shop", function () {
    $(this).prop("disabled", true);
    $(".oos-flex").each(function (i) {
      removeOOSItems(i, $(this), "shop");
    });
  });
  $("body").on("click", "#remove-and-continue", function () {
    $(this).prop("disabled", true);
    $(".oos-flex").each(function (i) {
      removeOOSItems(i, $(this), "continue");
    });
  });

  function removeOOSItems(i, record, command) {
    setTimeout(function () {
      var index = i;
      var findVar = record.attr("data-variant-id");
      console.log("here is my var " + findVar);
      $.ajax({
        type: "POST",
        url: "/cart/change.js",
        cache: false,
        data: { quantity: 0, id: findVar },
        dataType: "json",
        success: function (data) {
          // 		console.log("success");
          //     console.log(data);
          // add a class to tell us that it succeeded
          $(".oos-flex").eq(index).addClass("removed");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log("error");
          console.log(xhr.status);
          console.log(thrownError);
        },
      });
      // after we remove all the items, let's refresh the page
      // we have to make sure that all items are removed before we can reset the page, so we establish an interval to check
      var existCondition = setInterval(function () {
        var totalOOS = $(".oos-flex").length;
        var totalRemoved = $(".oos-flex.removed").length;
        if (totalOOS === totalRemoved) {
          clearInterval(existCondition);
          // console.log('everything removed');
          if (command === "continue") {
            //   console.log('trying to reload page');
            window.location.href = window.location.href;
          } else {
            window.location.href = "/collections/all-disposable-e-cigs";
          }
        } else {
          // keep checking to see if they're removed
        }
      }, 100); // check every 100ms
    }, i * 500);
  }
  //custom customer login in checkout screen
  $("body").on("click", ".section--contact-information a", function (e) {
    if ($(this).text().indexOf("Sign in or Register") > -1) {
      e.preventDefault();
      $("#CustomerLoginForm").show();
      $("#create-customer-form").hide();
      $("#RecoverPasswordForm").hide();
      $("#customer-form-overlay").show();
      // we need to start listening to clicks to see if they click into overlay and not the actual pop up
      $(function () {
        $("#customer-form-overlay").click(function (e) {
          // we have to make sure the form is actually showing to apply this logic
          // console.log($('#customer-form-overlay').css('display'));
          if ($("#customer-form-overlay").css("display") === "block") {
            if (
              e.target.id == "customer-popup" ||
              $(e.target).parents("#customer-popup").length
            ) {
              //      console.log('we think were inside div');
            } else {
              //     console.log('were outside div');
              $("#customer-form-overlay").removeAttr("style");
              $("#customer-form-overlay").hide();
            }
          }
        });
      });
    } else if ($(this).text().indexOf("Create an Account") > -1) {
      e.preventDefault();
      $("#CustomerLoginForm").hide();
      $("#create-customer-form").show();
      $("#customer-form-overlay").show();
    }
  });
  $("body").on("click", "#customer_register_link", function (e) {
    e.preventDefault();
    $("#CustomerLoginForm").hide();
    $("#RecoverPasswordForm").hide();
    $("#create-customer-form").show();
  });
  $("body").on("click", "#recover", function (e) {
    $("#RecoverPasswordForm").show();
    $("#create-customer-form").hide();
    $("#CustomerLoginForm").hide();
  });
  $("body").on("click", "#HideRecoverPasswordLink", function (e) {
    e.preventDefault();
    $("#RecoverPasswordForm").hide();
    $("#CustomerLoginForm").show();
  });
  $("body").on("click", "#customer-form-close", function (e) {
    e.preventDefault();
    $("#customer-form-overlay").removeAttr("style");
    $("#customer-form-overlay").hide();
  });

  /// if shipping method changes, we must recalculate Excise Taxes
  /* disabling for now, turning off Excise on 4/25/23 per Dino request 
$('body').on('change','input:radio[name="checkout[shipping_rate][id]"]', function() {
  // the shipping method has changed, we must recalculate taxes
  setTimeout(function () {
    ExciseTaxCalc();
  },25);

}); */
  $("body").on("click", 'input[value="Create"]', function (e) {
    var blankFields = "no";
    // we need to check to make sure all fields are populated before submitting this form
    $("#create_customer input").each(function () {
      var value = $(this).val();

      if (value) {
      } else {
        blankFields = "yes";
      }
    });
    if (blankFields === "yes") {
      e.preventDefault();
      alert("Please fill out all fields above to create an account");
    }
  });
  $("body").on("click", 'input[value="Sign In"]', function (e) {
    var blankFields = "no";
    // we need to check to make sure all fields are populated before submitting this form
    $("#customer_login input").each(function () {
      var value = $(this).val();
      if (value) {
      } else {
        blankFields = "yes";
      }
    });
    if (blankFields === "yes") {
      e.preventDefault();
      alert("Please fill out all fields above to log into an account");
    }
  });
  $(".breadcrumb__link").each(function (e) {
    var text = $(this).text().trim();
    if (text === "Cart") {
      // let's change this link to just go back to shop all disposables
      $(this).attr("href", "/collections/all-disposable-e-cigs");
    }
  });

  waitForEl(".review-block__content", codCallback, 60);
});

// Tax calculation doesn't load in the review block content so we have to check for when it loads
// https://gist.github.com/chrisjhoughton/7890303
var waitForEl = function (selector, callback, maxTimes) {
  if ($(selector).length) {
    callback();
  } else {
    if (maxTimes > 0) {
      maxTimes--;

      setTimeout(function () {
        waitForEl(selector, callback, maxTimes);
      }, 500);
    }
  }
};

function codCallback() {
  var COD = "no";
  $(".review-block__content").each(function () {
    var cellText = $(this).text().trim();
    //     console.log(cellText);
    if (cellText.indexOf("Pickup in store") > -1) {
      COD = "yes";
      //  console.log('marking as yes');
    }
  });
  if (COD === "yes") {
    $(".radio-wrapper.content-box__row").each(function () {
      var radioText = $(this).find("label").text().trim();
      if (radioText === "Pay with Cash when I pick up") {
        $(this).attr("style", "display:table !important");
      }
    });
  } else {
    //  console.log('hiding COD');
    $(".radio-wrapper.content-box__row").each(function () {
      var radioText = $(this).find("label").text().trim();
      if (radioText === "Pay with Cash when I pick up") {
        $(this).hide();
      }
    });
  }
}
