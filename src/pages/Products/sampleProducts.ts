interface Product{
    name: string,
    image: string,
    price: number
};

const productItems: Product[] = [];

const names = ["Drums", "Electric Guitar", "Accoustic Guitar", "Keyboard", "Piano", "Trumpet"];

for (let i = 0; i < 8; i++) {
    const randomInt = Math.round(Math.random()*(5));
    productItems.push({
        name: names[randomInt],
        image: randomInt.toString(),
        price: (randomInt+1)*200,
    });
}

export {productItems}