 const products= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function proceesProductd(products) {
    const productName = products.map((ele) => ele.name);

    products.forEach((ele) =>
        ele.price > 50 ?
            console.log(`${ele.name} is above $50`) : console.log(`${ele.name} is bleow $50`)
        );
    return productName;
}
proceesProductd(products);