export {}

async function getUsers() {
 const response = await fetch('https://kitsu.io/api/edge/anime?include=categories,mediaRelationships.destination');
 if (response.ok) {
   const data = await response.json();
   console.log(data.data);
   return data
 }
}

getUsers();

