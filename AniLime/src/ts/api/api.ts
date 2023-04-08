export async function getAnimeList(api) {
  const response = await fetch(api);
  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
}

// export const anime = await getAnimeList()