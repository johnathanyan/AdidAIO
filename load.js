var storage = chrome.storage.local;

function load(){
  storage.get("_firstName", function(result){document.getElementById('firstName').value = result._firstName});
	storage.get("_lastName", function(result){document.getElementById('lastName').value = result._lastName});
  storage.get("_size", function(result){document.getElementById('size').value = result._size});
  storage.get("_email", function(result){document.getElementById('email').value = result._email});
  storage.get("_tel", function(result){document.getElementById('tel').value = result._tel});
  storage.get("_address", function(result){document.getElementById('address').value = result._address});
  storage.get("_zip", function(result){document.getElementById('zip').value = result._zip});
  storage.get("_city", function(result){document.getElementById('city').value = result._city});
  //storage.get("_state", function(result){state = result._state});
  document.getElementById('state').value = "NY";
  storage.get("_number", function(result){document.getElementById('number').value = result._number});
  storage.get("_month", function(result){document.getElementById('month').value = result._month});
  storage.get("_year", function(result){document.getElementById('yr').value = result._year});
  storage.get("_cvv", function(result){document.getElementById('cvv').value = result._cvv});
  storage.get("_item", function(result){document.getElementById('item').value = result._item});
}

document.getElementById('load').addEventListener('click',
    load);