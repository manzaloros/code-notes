let products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];

var productsICanEat = [];

/* solve using filter() & all() or any() */
function containsNuts (pizza) {
  let nutLess = !pizza.containsNuts;
  //return pizza only if it doe snt have mushrooms
  let shrooms = pizza.ingredients.some(i => i === 'mushrooms');

  if (nutLess && !shrooms) {
  	return pizza;
  }

};



//filter pizzas that contain nuts, and check if ANY of the ingredients includes mushrooms

let answer = products.filter(containsNuts);


console.log(answer);