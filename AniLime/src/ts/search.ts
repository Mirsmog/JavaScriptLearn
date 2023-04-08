import { addAnimeToHtml } from "./addCards";
import { getAnimeList } from "./api/api";

export function searchToggle() {
  const wrapper = document.querySelector("#inputWrapper");
  const input = <HTMLInputElement>document.querySelector("#header__input");
  const body = document.querySelector("body");

  wrapper?.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (target?.classList.contains("search-btn")) {
      wrapper?.classList.add("active");
      input.focus();
      input.addEventListener('keypress',  (e) => {
        if(e.key === 'Enter'){
          const animeWrapper =  document.querySelector('#anime__wrapper')!
        if (input.value != 0) {
          animeWrapper.innerHTML = ''
          addAnimeToHtml(getAnimeList(`https://kitsu.io/api/edge/anime?filter[text]=${input.value}&page[limit]=20`),20)
        }
        }
      })

      if (wrapper?.classList.contains("active")) {

        body?.addEventListener("click", function closeSearch(e) {
          const target = e.target as Element;
          if (
            !target?.classList.contains("header__search-input") &&
            !target?.classList.contains("search-btn") &&
            !target?.classList.contains("close-button") &&
            wrapper?.classList.contains("active")
          ) {
            wrapper?.classList.remove("active");
          }
        });
      }
    }
    if (target?.classList.contains("close-button")) {
      input.value = "";
      // wrapper?.classList.remove("active");
    }
  });
}

