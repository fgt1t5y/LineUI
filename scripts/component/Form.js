export const Form = {
  run: function () {
    const forms = document.querySelectorAll(".form-item");

    function handleFormFocus(form) {
      if (form.firstElementChild.value !== "") {
        form.lastElementChild.classList.remove("form-filled");
      }
      form.classList.add("form-focus");
    }

    function handleFormBlur(form) {
      if (form.firstElementChild.value === "") {
        form.classList.remove("form-focus");
      } else {
        form.lastElementChild.classList.add("form-filled");
      }
    }

    forms.forEach((form) => {
      if (form.firstElementChild.value) {
        form.classList.add("form-focus");
      }

      form.firstElementChild.addEventListener("focus", function () {
        handleFormFocus(form);
      });
      form.firstElementChild.addEventListener("blur", function () {
        handleFormBlur(form);
      });
    });
  },
};
