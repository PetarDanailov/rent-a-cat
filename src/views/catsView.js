import { render,html } from "../lib/lit-html.js";
import { database } from "../config/firebaseInit.js";
import { ref,get} from "firebase/database";
import { getAll } from "../api/catsAPI.js";
const template = (cats) => html`
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      ${cats.map(cat => html`
        <a href="#" class="group">
        <img src=${cat.imageUrl} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
        <h3 class="mt-4 text-sm text-gray-700">${cat.name}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
          `)} 
      <!-- More products... -->
    </div>
  </div>
</div>

`
export default async function(ctx){
  const result = await getAll()
  ctx.render(template(result))
}
