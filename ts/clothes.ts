import products from "../products.json";


displayProducts();



document.querySelectorAll('.checkbox').forEach(item => {item.addEventListener('click',sorting)});
document.querySelector('#sortby select')?.addEventListener('change', sorting);
let categories: string[] = [];

export function sorting(e:any){
    let category = e.target.id;
    if (categories.includes(category) === true){
        const index = categories.indexOf(category, 0);
        if (index > -1) {
         categories.splice(index, 1);
        }
        console.log(categories);
    } else {
        categories.push(category);
        console.log(categories);
    }
    displayProducts();
}


export function displayProducts(){
    
console.log('products, ' + categories);
const productDiv = document.querySelector('#productsDiv')! as HTMLDivElement;
const productTemplate = document.querySelector('#productsTemplate')! as HTMLTemplateElement;

   
    productDiv.innerHTML = '';
    
    if(categories === undefined || categories === null || categories.toString() === ''){
        products.forEach(element => {
            console.log(products);
            const clone = productTemplate.content.cloneNode(true) as HTMLDivElement;
            clone.querySelector('.products')!.id = element.id;
            clone.querySelector('img')!.src = element.image;
            productDiv.appendChild(clone);
        });
    } else {
        products.forEach(element => {
            console.log(products);
            
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