const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemsLi = document.createElement("li");
//   itemsLi.innerHTML = ingredients[i];
//   itemsLi.classList.add("item");
//   productContainer.append(itemsLi);

// }

// 1.Получил ссылку на элемент с #ingredients
// 2.Создал переменную, записал пустой массив
// 3.При помощи метода .forEach() перебрал существующий массив ingredients,
//  на каждой итерации:
// создал li повесил класс
// в textContent записал значение перебираемого элемента массива
// добавил всё в созданный мною пустой массив
// 4.  В элемент #ingredients (полученный по ссылке) распылил массив
//  полученный после перебора массива  ingredients.
