export {}

async function getUsers(): Promise<unknown>{
  const response = await fetch('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0');
  if (response.ok) {
    const data = await response.json();
    return data.data
  }
}

const animeInfo = await getUsers();
console.log(animeInfo);