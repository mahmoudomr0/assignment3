var siteNameInput = document.getElementById("sitename");
var siteUrlInput = document.getElementById("siteurl");

var allDetails = [];

// add function

function addDetails() {
  if (validate() == true) {
    var obj = {
      name: siteNameInput.value,
      url: siteUrlInput.value,
    };

    allDetails.push(obj);
    clearDetails();
    displayDetails();
  } else {
    document.getElementById("sumbit").outerHTML = ` <button
    id="sumbit"
    onclick="addDetails()"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    class="text-center py-3 px-5 btn btn-dark"
  >
    Sumbit
  </button>`;
  }
}

// clear function

function clearDetails() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

// dispaly function

function displayDetails() {
  cartona = "";

  for (var i = 0; i < allDetails.length; i++) {
    cartona += `  <tr>
    <td>${i}</td>
    <td>${allDetails[i].name}</td>
    <td><a href="https://${allDetails[i].url}" target="_blank"><button class="btn btn-dark">Visit</button></a></td>
    <td><button class="btn btn-danger" onclick="deteteDetails(${i})">Delete</button></td>
          <td><button id="update" class="btn btn-primary" onclick="updateDetails(${i})">Update</button></td>
  </tr>`;
  }

  document.getElementById("tbody").innerHTML = cartona;
}

// delete function

function deteteDetails(idx) {
  allDetails.splice(idx, 1);
  displayDetails();
}

// update function

function updateDetails(idx) {
  siteNameInput.value = allDetails[idx].name;
  siteUrlInput.value = allDetails[idx].url;

  document.getElementById("sumbit").outerHTML = `    <button
  id="update"
  onclick="addUpdate(${idx})"
 
  class="text-center py-3 px-5 btn btn-dark"
>
  Update
</button>`;
}

// add update

function addUpdate(idx) {
  var obj = {
    name: siteNameInput.value,
    url: siteUrlInput.value,
  };

  allDetails.splice(idx, 1, obj);
  clearDetails();
  displayDetails();

  document.getElementById("update").outerHTML = `    <button
    id="sumbit"
    onclick="addDetails()"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    class="text-center py-3 px-5 btn btn-dark"
  >
    Sumbit
  </button>`;
}

// regex function

function validate() {
  var check = /^\w{3,}[.]+[a-z]{2,5}$/;

  return check.test(siteUrlInput.value);
}
