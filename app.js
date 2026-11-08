// Boshlang'ich berilgan products massivi
const products = [
  { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
  { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
  { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },
  { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
  { id: 5, name: "AirPods Pro", price: 2000000, category: "accessory", stock: 15 },
  { id: 6, name: "Lenovo Legion", price: 13000000, category: "laptop", stock: 2 },
  { id: 7, name: "Samsung Buds", price: 1500000, category: "accessory", stock: 0 },
  { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
  { id: 9, name: "Xiaomi Band", price: 500000, category: "accessory", stock: 20 },
  { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 }
];


// 1. Eng qimmat mahsulot
function getMostExpensiveProduct() {
  let maxProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i];
    }
  }
  return maxProduct;
}


// 2. Eng arzon mahsulot
function getCheapestProduct() {
  let minProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price < minProduct.price) {
      minProduct = products[i];
    }
  }
  return minProduct;
}


// 3. Mahsulotlar soni
function getProductsCount() {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    count++;
  }
  return count;
}


// 4. ID bo'yicha qidirish
function getProductById(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return "Product not found";
}


// 5. Narxi bo'yicha qidirish (10 000 000 so'mdan yuqori)
function getExpensiveProducts() {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > 10000000) {
      result.push(products[i]);
    }
  }
  return result;
}


// 6. Ombordagi mahsulotlar (stock > 0)
function getAvailableProducts() {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
      result.push(products[i]);
    }
  }
  return result;
}


// 7. Tugagan mahsulotlar (stock === 0)
function getOutOfStockProducts() {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
      result.push(products[i]);
    }
  }
  return result;
}


// 8. Kategoriya bo'yicha qidirish
function getProductsByCategory(category) {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      result.push(products[i]);
    }
  }
  return result;
}


// 9. Narxlar yig'indisi
function getTotalPrice() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  return total;
}


// 10. O'rtacha narx
function getAveragePrice() {
  if (products.length === 0) return 0;
  let total = getTotalPrice();
  return total / products.length;
}


// 11. Narx oralig'i
function getProductsByPrice(min, max) {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= min && products[i].price <= max) {
      result.push(products[i]);
    }
  }
  return result;
}


// 12. Mahsulot mavjudligini tekshirish
function checkProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }
  return false;
}