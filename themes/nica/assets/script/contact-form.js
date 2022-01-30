import * as params from "@params";

function loaded() {
  //console.log("Contact form submission handler loaded successfully.");
  // bind to the submit event of our form
  var forms = document.querySelectorAll("main.page.contact form");
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", handleFormSubmit, false);
  }
}
document.addEventListener("DOMContentLoaded", loaded, false);

function validateHuman(honeypot) {
  if (honeypot) {
    return true;
  }
}

// get all data in form and return object
function getFormData(form) {
  var elements = form.elements;

  var fields = Object.keys(elements)
    .map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    })
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

  var formData = {};
  fields.forEach(function (name) {
    var element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;

    // when our element has multiple items, get their values
    if (element.length) {
      var data = [];
      for (var i = 0; i < element.length; i++) {
        var item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(", ");
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "Messages"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  // console.log(formData);
  return formData;
}

function handleFormSubmit(event) {
  // handles form submit without any jquery
  event.preventDefault(); // we are submitting via xhr below
  var form = event.target;
  var data = getFormData(form); // get the values submitted in the form

  if (validateHuman(data.website)) {
    // If field is filled, form will not be submitted
    messageSent(form);
    return false;
  }

  disableAllButtons(form);
  var url = params.contactFormUrl;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    // console.log(xhr.status, xhr.statusText);
    // console.log(xhr.responseText);
    messageSent(form);
    return;
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data)
    .map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    })
    .join("&");
  xhr.send(encoded);
}

function disableAllButtons(form) {
  var buttons = form.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].textContent = "";
    buttons[i].classList.add("submitting");
  }
}

function messageSent(form) {
  form.reset();
  var formElements = form.querySelectorAll(".form-item");
  for (var i = 0; i < formElements.length; i++) {
    formElements[i].style.display = "none"; // hide form elements
  }
  var messageSent = form.querySelector(".message-sent");
  if (messageSent) {
    messageSent.style.display = "block";
  }
}
