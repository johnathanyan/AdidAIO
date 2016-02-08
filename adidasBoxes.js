var storage = chrome.storage.local;

var firstName;
var lastName;
var apt;
var email;
var tel;
var address;
var zip;
var city;
var state = 37;
var number;
var month;
var yr;
var cvv;

storage.get("_firstName", function(result){firstName = result._firstName});
storage.get("_lastName", function(result){lastName = result._lastName});
storage.get("_apt", function(result){apt = result._apt});
storage.get("_email", function(result){email = result._email});
storage.get("_tel", function(result){tel = result._tel});
storage.get("_address", function(result){address = result._address});
storage.get("_zip", function(result){zip = result._zip});
storage.get("_city", function(result){city = result._city});
//storage.get("_state", function(result){state = result._state});
storage.get("_number", function(result){number = result._number});
storage.get("_month", function(result){month = result._month});
storage.get("_year", function(result){yr = result._year});
storage.get("_cvv", function(result){cvv = result._cvv});

function enter(){
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_firstName")[0].value = firstName;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_lastName")[0].value = lastName;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_address2")[0].value = apt;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_email_emailAddress")[0].value = email;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_phone")[0].value = tel;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_address1")[0].value = address;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_zip")[0].value = zip;
	document.getElementsByName("dwfrm_delivery_singleshipping_shippingAddress_addressFields_city")[0].value = city;
	document.getElementsByClassName("selectoption")[37].click()

	document.getElementsByName("dwfrm_delivery_savedelivery")[0].click();

	/*document.getElementById("order_billing_state").selectedIndex = state
	document.getElementsByName("credit_card[number]")[0].value = number;
	document.getElementById("credit_card_month").selectedIndex = parseInt(month) - 1;
	document.getElementById("credit_card_year").selectedIndex = parseInt(yr)-14;
	document.getElementsByName("credit_card[verification_value]")[0].value = cvv;
	document.getElementsByClassName("iCheck-helper")[1].click();
	*/
}

setTimeout("enter()",300);
