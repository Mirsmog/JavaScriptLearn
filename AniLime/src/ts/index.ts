export {}


async function getUsers(): Promise<unknown>{
  const response = await fetch('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0');
  if (response.ok) {
    const data = await response.json();
    return data.data
  }
}

const anime = await getUsers()


console.log(anime)

// function addAnimeToHtml(){
//     const wrapper = document.querySelector('#anime__wrapper')
//   for(let i=0; i<10; i++){
//     let animeCard = `<li class="anime-card">
//             <a href="#" class="anime-img">
//               <img src="${anime.attributes.posterImage.tiny}" alt="anime-img">
//             </a>
//             <a href="#" class="anime__name">
//               <h3>The Rising of the Shield Hero</h3>
//             </a>
//             <a href="#" class="anime__series">Series</a>
//             <div class="anime-stars">
//               <img src="./src/img/star.svg" alt="img-start" class="img-star">
//               <div class="anime-star__number">
//                 9,1
//               </div>
//             </div>
//           </li>
// `
//     wrapper?.appendChild('22')
//   }
// }

// addAnimeToHtml()