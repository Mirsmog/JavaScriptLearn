export function searchToggle() {
  const wrapper = document.querySelector("#inputWrapper");
  const input = <HTMLInputElement>document.querySelector("#header__input");
  const body = document.querySelector("body");

  wrapper?.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (target?.classList.contains("search-btn")) {
      wrapper?.classList.add("active");
      input.focus();

      if (wrapper?.classList.contains("active")) {

        body?.addEventListener("click", function closeSearch(e) {
          const target = e.target as Element;
          if (
            !target?.classList.contains("header__search-input") &&
            !target?.classList.contains("search-btn") &&
            wrapper?.classList.contains("active")
          ) {
            wrapper?.classList.remove("active");
          }
        });
      }
    }
    if (target?.classList.contains("close-button")) {
      wrapper?.classList.remove("active");
      input.value = "";
    }
  });
}
