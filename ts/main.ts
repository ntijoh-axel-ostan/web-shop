import products from "../products.json";

function productsPrint(){
    
    const productDiv = document.querySelector('#productsDiv')! as HTMLDivElement;
    const productTemplate = document.querySelector('#productsTemplate')! as HTMLTemplateElement;

    products.forEach(element => {
        const clone = productTemplate.content.cloneNode(true) as HTMLDivElement;
        clone.querySelector('.products')!.id = element.id;
        clone.querySelector('img')!.src = element.image;
        productDiv.appendChild(clone);
    });
}

productsPrint();