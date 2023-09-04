export const Collapse = {
  run: function () {
    const collapses = document.querySelectorAll(".collapse-item");

    function handleCollapsibleOpen(collapse) {
      collapse.lastElementChild.classList.toggle("hidden");
    }

    collapses.forEach((collapse) => {
      collapse.firstElementChild.setAttribute("tabindex", "0");
      collapse.firstElementChild.addEventListener("click", function () {
        handleCollapsibleOpen(collapse);
      });
      collapse.firstElementChild.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          handleCollapsibleOpen(collapse);
        }
      });
    });
  },
};
