export async function addAnimeToHtml(arr) {
  const anime = await arr
  const validAnime = anime.filter((item) => item.attributes.averageRating !== null).sort((a,b) => a.attributes.popularityRank > b.attributes.popularityRank ? 1 : -1)
  console.log(validAnime)
  if (await anime.length > 0) {
  const wrapper = document.querySelector("#anime__wrapper");
  for (let i = 0; i < validAnime.length; i++) {
    const list = document.createElement("li");
    list.classList.add("anime-card");
    const image =
      validAnime[i].attributes.posterImage.small !== undefined
        ? validAnime[i].attributes.posterImage.small
        : "./src/img/404.jpg";
    list.innerHTML = `
            <a href="#" >
              <img class="anime-img" src="${image}" alt="${
      validAnime[i].attributes.canonicalTitle
    }">
            </a>
            <a href="#" class="anime__name">
              <h3>${validAnime[i].attributes.canonicalTitle}</h3>
            </a>
            <a href="#" class="anime__series">Series</a>
            <div class="anime-stars">
              <img src="./src/img/star.svg" alt="img-start" class="img-star">
              <div class="anime-star__number">
                ${(validAnime[i].attributes.averageRating / 10).toFixed(1)}
              </div>
            </div>
`;
    wrapper?.append(list);
  }
  }
}