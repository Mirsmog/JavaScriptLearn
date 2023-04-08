export async function addAnimeToHtml(arr, animeLength) {
  const anime = await arr
  const wrapper = document.querySelector("#anime__wrapper");
  for (let i = 0; i < animeLength; i++) {
    const list = document.createElement("li");
    list.classList.add("anime-card");
    const image =
      anime[i].attributes.posterImage.small !== undefined
        ? anime[i].attributes.posterImage.small
        : "./src/img/404.jpg";
    list.innerHTML = `
            <a href="#" >
              <img class="anime-img" src="${image}" alt="${
      anime[i].attributes.canonicalTitle
    }">
            </a>
            <a href="#" class="anime__name">
              <h3>${anime[i].attributes.canonicalTitle}</h3>
            </a>
            <a href="#" class="anime__series">Series</a>
            <div class="anime-stars">
              <img src="./src/img/star.svg" alt="img-start" class="img-star">
              <div class="anime-star__number">
                ${(anime[i].attributes.averageRating / 10).toFixed(1)}
              </div>
            </div>
`;
    wrapper?.append(list);
  }
}