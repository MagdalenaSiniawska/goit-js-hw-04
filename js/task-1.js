function isEnoughCapacity(products, containerSize) {
    let sumOfAllProducts = 0;

    productValues = [];
    productValues = Object.values(products);

    sumOfAllProducts = productValues.reduce((partialSum, a) => partialSum + a, 0);

    if (sumOfAllProducts > containerSize) {
        console.log("false");
    } else {
        console.log("true");
    }
}

isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8);
isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12);
isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14);
isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7);