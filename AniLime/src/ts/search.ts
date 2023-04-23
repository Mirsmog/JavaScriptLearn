import { addAnimeToHtml } from "./addCards";
import { getAnimeList } from "./api/api";
import { toggleBurgerMenu } from "./burger";

const input = <HTMLInputElement>document.querySelector("#header__input");
const wrapper = document.querySelector("#inputWrapper");
const body = document.querySelector("body");

export function searchToggle() {
  wrapper?.addEventListener("click", (e) => {
    const target = e.target as Element;

    if (target?.classList.contains("search-btn")) {
      wrapper?.classList.add("active");
      input.focus();
      input.addEventListener("keypress", isEnter);
    }

    else if(target?.classList.contains('burger-menu')){
      toggleBurgerMenu()
    }

    if (wrapper?.classList.contains("active")) {
      body?.addEventListener("click", closeSearch);
    }

    if (target?.classList.contains("close-button")) {
      input.value = "";
    }
  });
}

async function isEnter(e) {
  if (e.key === "Enter") {
    const animeWrapper = <HTMLDivElement> document.querySelector("#anime__wrapper");
    const correctValue =
      input.value != "0" &&
      !/^[а-яА-ЯёЁ\s-]+$/.test(input.value) &&
      /^[a-zA-Z0-9 -]+$/.test(input.value);
    const animeList = await getAnimeList(
      `https://kitsu.io/api/edge/anime?filter[text]=${input.value}&page[limit]=20`
    );
    if (correctValue && animeList.length > 0) {
      animeWrapper.innerHTML = "";
      addAnimeToHtml(animeList);
    }
    else if(!correctValue) {
      const search = <HTMLElement>document.querySelector("#header__btn");
      search.classList.add("error");
      setTimeout(() => search.classList.remove("error"), 500);
    }
    else alert('Sorry we didn\'t find anything ');
  }

}

function closeSearch(e) {
  const target = e.target as Element;
  if (
    !target?.classList.contains("header__search-input") &&
    !target?.classList.contains("header__btn-search") &&
    !target?.classList.contains("search-btn") &&
    !target?.classList.contains("close-button") &&
    wrapper?.classList.contains("active")
  ) {
    wrapper?.classList.remove("active");
    input.removeEventListener("keypress", isEnter);
    body?.removeEventListener("click", closeSearch);
  }
}
