// Meal ideas for the "What's for dinner?" spinner.
// To edit: tell Claude what to add, remove, or change — or edit this file directly.
// Each meal needs a name, tags (labels shown on the card), and an ingredients list.

const MEALS = [
  {
    name: "Spaghetti & Meat Sauce",
    tags: ["kids love it", "comfort food"],
    ingredients: ["ground beef", "spaghetti", "marinara sauce", "parmesan cheese"]
  },
  {
    name: "Tacos",
    tags: ["kids love it", "quick"],
    ingredients: ["ground beef", "taco shells", "shredded cheese", "lettuce", "tomato", "sour cream", "taco seasoning"]
  },
  {
    name: "Chicken Quesadillas",
    tags: ["kids love it", "quick"],
    ingredients: ["chicken breast", "flour tortillas", "shredded cheese", "salsa", "sour cream"]
  },
  {
    name: "Homemade Pizza",
    tags: ["kids love it", "fun"],
    ingredients: ["pizza dough", "pizza sauce", "shredded mozzarella", "pepperoni"]
  },
  {
    name: "Grilled Cheese & Tomato Soup",
    tags: ["comfort food", "quick"],
    ingredients: ["bread", "butter", "cheddar cheese", "tomato soup"]
  },
  {
    name: "Mac & Cheese",
    tags: ["kids love it", "quick"],
    ingredients: ["pasta", "butter", "milk", "cheddar cheese"]
  },
  {
    name: "Chicken Nuggets & Fries",
    tags: ["kids love it", "quick"],
    ingredients: ["chicken nuggets", "french fries", "ketchup"]
  },
  {
    name: "Breakfast for Dinner",
    tags: ["kids love it", "quick"],
    ingredients: ["eggs", "bacon", "bread", "butter", "maple syrup"]
  },
  {
    name: "Chicken Alfredo",
    tags: ["kids love it", "comfort food"],
    ingredients: ["chicken breast", "fettuccine", "heavy cream", "butter", "parmesan cheese", "garlic"]
  },
  {
    name: "Beef & Broccoli",
    tags: ["quick", "one pan"],
    ingredients: ["beef sirloin", "broccoli", "soy sauce", "garlic", "rice"]
  },
  {
    name: "Chili",
    tags: ["comfort food", "one pan"],
    ingredients: ["ground beef", "kidney beans", "canned tomatoes", "chili seasoning", "onion"]
  },
  {
    name: "Sheet Pan Chicken & Veggies",
    tags: ["one pan", "easy"],
    ingredients: ["chicken thighs", "broccoli", "carrots", "olive oil", "garlic"]
  },
  {
    name: "Fish Sticks & Fries",
    tags: ["kids love it", "quick"],
    ingredients: ["fish sticks", "french fries", "tartar sauce", "ketchup"]
  },
  {
    name: "Chicken Noodle Soup",
    tags: ["comfort food"],
    ingredients: ["chicken breast", "carrots", "celery", "onion", "egg noodles", "chicken broth"]
  },
  {
    name: "Hamburgers",
    tags: ["kids love it", "quick"],
    ingredients: ["ground beef", "hamburger buns", "lettuce", "tomato", "cheddar cheese", "ketchup"]
  },
  {
    name: "Hot Dogs",
    tags: ["kids love it", "quick"],
    ingredients: ["hot dogs", "hot dog buns", "ketchup", "mustard"]
  },
  {
    name: "Pesto Pasta with Chicken",
    tags: ["quick"],
    ingredients: ["chicken breast", "penne pasta", "pesto", "parmesan cheese", "cherry tomatoes"]
  },
  {
    name: "Chicken Tacos",
    tags: ["kids love it", "quick"],
    ingredients: ["chicken breast", "taco seasoning", "flour tortillas", "shredded cheese", "salsa", "avocado"]
  },
  {
    name: "Fried Rice",
    tags: ["quick", "one pan"],
    ingredients: ["eggs", "rice", "frozen peas", "carrots", "soy sauce", "sesame oil", "green onions"]
  },
  {
    name: "Turkey Meatballs & Spaghetti",
    tags: ["kids love it"],
    ingredients: ["ground turkey", "breadcrumbs", "egg", "spaghetti", "marinara sauce", "parmesan cheese"]
  },
  {
    name: "Bean & Cheese Burritos",
    tags: ["kids love it", "quick"],
    ingredients: ["flour tortillas", "refried beans", "shredded cheese", "sour cream", "salsa"]
  },
  {
    name: "Pulled Pork Sandwiches",
    tags: ["comfort food"],
    ingredients: ["pork shoulder", "BBQ sauce", "hamburger buns", "coleslaw mix"]
  },
  {
    name: "Pancakes for Dinner",
    tags: ["kids love it", "quick"],
    ingredients: ["pancake mix", "eggs", "milk", "butter", "maple syrup", "bacon"]
  },
  {
    name: "Chicken Pot Pie",
    tags: ["comfort food"],
    ingredients: ["rotisserie chicken", "frozen mixed vegetables", "cream of chicken soup", "refrigerated pie crust"]
  },
  {
    name: "Sloppy Joes",
    tags: ["kids love it", "quick"],
    ingredients: ["ground beef", "sloppy joe sauce", "hamburger buns"]
  },
  {
    name: "Beef Stew",
    tags: ["comfort food"],
    ingredients: ["beef stew meat", "potatoes", "carrots", "onion", "beef broth", "tomato paste"]
  },
  {
    name: "Butter Pasta",
    tags: ["kids love it", "quick", "15 min"],
    ingredients: ["pasta", "butter", "parmesan cheese", "garlic"]
  },
  {
    name: "BLT Sandwiches",
    tags: ["quick"],
    ingredients: ["bacon", "bread", "lettuce", "tomato", "mayonnaise"]
  },
  {
    name: "Creamy Chicken & Rice",
    tags: ["comfort food", "one pan"],
    ingredients: ["chicken thighs", "rice", "chicken broth", "cream of mushroom soup", "onion"]
  },
  {
    name: "Stir Fry Noodles",
    tags: ["quick", "one pan"],
    ingredients: ["lo mein noodles", "chicken breast", "broccoli", "carrots", "soy sauce", "sesame oil", "garlic"]
  }
];
