let recipes = [];

document.getElementById('recipeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;

  const recipe = {
    id: Date.now(),
    name,
    ingredients,
    instructions
  };

  recipes.push(recipe);
  displayRecipes(recipes);
  this.reset();
});

document.getElementById('search').addEventListener('input', function () {
  const term = this.value.toLowerCase();
  const filtered = recipes.filter(r => r.name.toLowerCase().includes(term));
  displayRecipes(filtered);
});

function displayRecipes(recipesList) {
  const container = document.getElementById('recipesContainer');
  container.innerHTML = '';

  recipesList.forEach(r => {
    const div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = `
      <h3>${r.name}</h3>
      <p><strong>Ingredients:</strong> ${r.ingredients}</p>
      <p><strong>Instructions:</strong> ${r.instructions}</p>
      <button onclick="deleteRecipe(${r.id})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function deleteRecipe(id) {
  recipes = recipes.filter(r => r.id !== id);
  displayRecipes(recipes);
}
