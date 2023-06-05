document.addEventListener("DOMContentLoaded", function() {
  let outputElement = document.getElementById("output__faq");

  fetch("../data/data.json")
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ошибка загрузки файла JSON.");
      }
    })
    .then(function(data) {
      let output = "";
      for (let i = 0; i < data.length; i++) {
        let question = data[i].name_button;
        let answer = data[i].panel_text;
        let id = data[i].id;

        output += `<button class="accordion id=${id}">` + question + '</button>' +
                  '<div class="panel">' +
                  '<p>' + answer + '</p>' +
                  '</div>';
      }
      outputElement.innerHTML = output;

      let acc = document.getElementsByClassName("accordion");

      for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
    })
    .catch(function(error) {
      console.error(error);
    });
});
