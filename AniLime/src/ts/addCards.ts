export function addAnimeToHtml(arr) {
  const wrapper = document.querySelector("#anime__wrapper");
  for (let i = 0; i < 12; i++) {
    const list = document.createElement("li");
    list.classList.add("anime-card");
    const image =
      arr[i].attributes.posterImage.small !== undefined
        ? arr[i].attributes.posterImage.small
        : "./src/img/404.jpg";
    list.innerHTML = `
            <a href="#" >
              <img class="anime-img" src="${image}" alt="${
      arr[i].attributes.canonicalTitle
    }">
            </a>
            <a href="#" class="anime__name">
              <h3>${arr[i].attributes.canonicalTitle}</h3>
            </a>
            <a href="#" class="anime__series">Series</a>
            <div class="anime-stars">
              <img src="./src/img/star.svg" alt="img-start" class="img-star">
              <div class="anime-star__number">
                ${(arr[i].attributes.averageRating / 10).toFixed(1)}
              </div>
            </div>
`;
    wrapper?.append(list);
  }
}