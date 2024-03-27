function sortProduct(arr) {
  // Step 1: Create a new array with objects that contain the original number and its product
  const products = arr.map((num, index) => {
    return {
      num: num,
      product: num * (index + 1), // index starts from 1
    };
  });

  // Step 2: Sort the array based on the product
  products.sort((a, b) => a.product - b.product);

  // Step 3: Map the sorted array to get the original numbers
  const sortedArr = products.map((obj) => obj.num);

  return sortedArr;
}

console.log(sortProduct([23, 2, 3, 4, 5]));
