import { builtinModules } from "module";
import products from "../products.json";



displayProducts();


document.querySelectorAll('.checkbox').forEach(item => {item.addEventListener('click',sorting)});
document.querySelector('#sortby select')?.addEventListener('change', productsSortby);
let categories: string[] = [];


function productsSortby(e:any){
    let sortbyproducts = products;
   if(e.target.value === 'pricelow'){
    sortbyproducts.sort((a, b) => (a.unit_cost > b.unit_cost) ? 1 : -1);
    console.log(sortbyproducts);
   }
   if(e.target.value === 'pricehigh'){
    sortbyproducts.sort((a, b) => (a.unit_cost < b.unit_cost) ? 1 : -1);
    console.log(sortbyproducts);
   }
   if(e.target.value === 'popular'){
    console.log('popular');
   }
   if(e.target.value === 'Recommended'){
    console.log('popular');
    
   }
}


export function sorting(e:any){
    let category = e.target.id;
    if (categories.includes(category) === true){
        const index = categories.indexOf(category, 0);
        if (index > -1) {
         categories.splice(index, 1);
        }
    } else {
        categories.push(category);
    }
    displayProducts();
}


export function displayProducts(){
const productDiv = document.querySelector('#productsDiv')! as HTMLDivElement;
const productTemplate = document.querySelector('#productsTemplate')! as HTMLTemplateElement;
    productDiv.innerHTML = '';
    if(categories === undefined || categories === null || categories.toString() === ''){
        products.forEach(element => {
            const clone = productTemplate.content.cloneNode(true) as HTMLDivElement;
            clone.querySelector('.products')!.id = element.id;
            clone.querySelector('img')!.src = element.image;
            productDiv.appendChild(clone);
        });
    } else {
        products.forEach(element => {
            for (let i = 0; i < categories.length; i++) {
                if(element.category.includes(categories[i]) === true){
                    const clone = productTemplate.content.cloneNode(true) as HTMLDivElement;
                    clone.querySelector('.products')!.id = element.id;
                    clone.querySelector('img')!.src = element.image;
                    productDiv.appendChild(clone);
                }
            }
        });
    }
}