export {};

async function getUsers() {
  const response = await fetch(
    `https://kitsu.io/api/edge/anime?filter[seasonYear]=2020&page[limit]=12&page[offset]=${700}`
  );
  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
}

const anime = await getUsers();

function convertStars(num: number): string {
  return (num / 10).toFixed(1);
}

function addAnimeToHtml(arr) {
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
                ${convertStars(arr[i].attributes.averageRating)}
              </div>
            </div>
`;
    wrapper?.append(list);
  }
}
addAnimeToHtml(anime);

function curentPage(num: number){
  return num
}

          // </a>
function addPaginationBtn(){
  const wrapper = document.querySelector('.pagination-num__wrapper')
  for (let i = 1; i < 10; i++) {
    const pugLink = document.createElement('a')
    pugLink.classList.add('pag-link')
    // pugLink.href = '#'
    // pugLink.preventDefault()
    pugLink.innerHTML = `
    <span class="pag_num">${i}</span>
    `
    wrapper?.append(pugLink)

    pugLink.addEventListener('click', () => {
      console.log()
    })
  }
}

addPaginationBtn()
