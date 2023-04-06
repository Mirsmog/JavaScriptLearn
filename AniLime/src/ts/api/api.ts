async function getUsers(api) {
  const response = await fetch(api);
  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
}

export const anime = await getUsers(`https://kitsu.io/api/edge/anime?filter[seasonYear]=2020&page[limit]=12&page[offset]=${690}`)
