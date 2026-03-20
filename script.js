const expandableButtons = document.querySelectorAll(".bio-item");

expandableButtons.forEach((item) => {
  const button = item.querySelector(".expandable");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    expandableButtons.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});