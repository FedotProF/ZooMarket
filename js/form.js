function toggleSubmitButton() {
  let checkbox = document.getElementById("checkbox");
  let submitButton = document.getElementById("submit");

  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}