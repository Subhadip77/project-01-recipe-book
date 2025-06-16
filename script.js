let recipes = [];

// Load from localStorage
(function loadFromLocal() {
  const saved = localStorage.getItem('recipes');
  if (saved) {
    const data = JSON.parse(saved);
    const now = Date.now();
    const THIRTY_MIN = 1 * 60 * 1000; // 30 minutes

    if (now - data.savedAt > THIRTY_MIN) {
      localStorage.removeItem('recipes');
    } else {
      recipes = data.recipes || [];
      displayRecipes(recipes);
    }
  }
})();

// Save to localStorage
function saveToLocal() {
  const dataToStore = {
    recipes: recipes,
    savedAt: Date.now()
  };
  localStorage.setItem('recipes', JSON.stringify(dataToStore));
}

const form = document.getElementById('recipeForm');
let imageBase64 = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const instructions = document.getElementById('instructions').value.trim();

  let isValid = true;

  // Validation (clean modern way)
  const showError = (id, message) => {
    const el = document.getElementById(id);
    el.innerText = message;
    el.style.display = 'block';
  };

  const clearError = (id) => {
    document.getElementById(id).style.display = 'none';
  };

  if (!name) {
    showError('name-error', 'Recipe name is required.');
    isValid = false;
  } else clearError('name-error');

  if (!ingredients) {
    showError('ingredients-error', 'Ingredients are required.');
    isValid = false;
  } else clearError('ingredients-error');

  if (!instructions) {
    showError('instructions-error', 'Instructions are required.');
    isValid = false;
  } else clearError('instructions-error');

  if (!imageBase64) {
    showError('image-error', 'Please upload an image.');
    isValid = false;
  } else clearError('image-error');

  if (!isValid) return;

  const recipe = {
    id: Date.now(),
    name,
    ingredients,
    instructions,
    imageBase64
  };

  recipes.push(recipe);
  displayRecipes(recipes);
  saveToLocal();

  form.reset();
  imageBase64 = '';
  document.getElementById('preview').style.display = 'none';
});

// Display Recipes
function displayRecipes(recipesList) {
  const container = document.getElementById('recipesContainer');
  container.innerHTML = '';

  recipesList.forEach((r) => {
    const div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = `
      <h3>${r.name}</h3>
      <p><strong>Ingredients:</strong> ${r.ingredients}</p>
      <p><strong>Instructions:</strong> ${r.instructions}</p>
      <img src="${r.imageBase64}" alt="${r.name}" width="100" />
      <button onclick="deleteRecipe(${r.id})">Delete</button>
    `;
    container.appendChild(div);
  });
}

// Delete Recipe
function deleteRecipe(id) {
  recipes = recipes.filter(r => r.id !== id);
  displayRecipes(recipes);
  saveToLocal();
}

// Search
document.getElementById('search').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const filtered = recipes.filter(r => r.name.toLowerCase().includes(searchTerm));
  displayRecipes(filtered);
  //subhadip
});

// Image Upload
document.getElementById('image').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      imageBase64 = reader.result;
      const preview = document.getElementById('preview');
      preview.src = imageBase64;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});
