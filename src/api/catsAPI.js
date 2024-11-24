const url = 'https://rent-a-cat-da086-default-rtdb.europe-west1.firebasedatabase.app/cats'
export async function getAll(){
  const responce = await fetch(`${url}.json`);
  const result = await responce.json();
  
  const cats = Object.keys(result).map(id => ({id, ...result[id]}));
  return cats
}