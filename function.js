var dishList = document.querySelector('.recipe-dish-list');
var mealList = document.querySelector('.recipe-meal-list');
var dietList = document.querySelector('.recipe-diet-list');
var cusineList = document.querySelector('.recipe-cusine-list');
var seasList = document.querySelector('.recipe-seasonal-list');
var dishImg = document.getElementById('dish-img');
var mealImg = document.getElementById('meal-img');
var dietImg = document.getElementById('diet-img');
var cusineImg = document.getElementById('cusine-img');
var seasImg = document.getElementById('seasonal-img');
mealList.classList.add('hidden');
dietList.classList.add('hidden');
cusineList.classList.add('hidden');
seasList.classList.add('hidden');
function toggleList(type) {
    if (type === 'dish') {
        dishList.classList.toggle('hidden');
        mealList.classList.add('hidden');
        dietList.classList.add('hidden');
        cusineList.classList.add('hidden');
        seasList.classList.add('hidden');
    } else if (type === 'meal') {
        dishList.classList.add('hidden');
        mealList.classList.toggle('hidden');
        dietList.classList.add('hidden');
        cusineList.classList.add('hidden');
        seasList.classList.add('hidden');
    } else if (type === 'diet') {
        dishList.classList.add('hidden');
        mealList.classList.add('hidden');
        dietList.classList.toggle('hidden');
        cusineList.classList.add('hidden');
        seasList.classList.add('hidden');
    } else if (type === 'cusine') {
        dishList.classList.add('hidden');
        mealList.classList.add('hidden');
        dietList.classList.add('hidden');
        cusineList.classList.toggle('hidden');
        seasList.classList.add('hidden');
    } else if (type === 'seasonal') {
        cusineList.classList.add('hidden');
        dietList.classList.add('hidden');
        dishList.classList.add('hidden');
        mealList.classList.add('hidden');
        seasList.classList.toggle('hidden');
    }
    updateImage(dishImg, dishList);
    updateImage(mealImg, mealList);
    updateImage(dietImg, dietList);
    updateImage(cusineImg, cusineList);
    updateImage(seasImg, seasList);
}
function updateImage(img, list) {
    var isHidden = list.classList.contains('hidden');
    img.src = isHidden ? "/images/add.webp" : "/images/minus.png";
}
updateImage(dishImg, dishList);
updateImage(mealImg, mealList);
updateImage(dietImg, dietList);
updateImage(cusineImg, cusineList);
updateImage(seasImg, seasList);

function snack() {
  var appetizersSnacksContent = document.querySelectorAll('#bread, #cake, #candy, #casserole, #christmasc, #cocktail, #main, #pasta, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent = document.querySelector('#snacks');
  recipeContent.style.display = "block";
};

function bread() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #cake, #candy, #casserole, #christmasc, #cocktail, #main, #pasta, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent = document.querySelector('#bread');
  recipeContent.style.display = "block";
};

function cake() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #candy, #casserole, #christmasc, #cocktail, #main, #pasta, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#cake');
  recipeContent2.style.display = "block";
};

function candy() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #sandwich, #hearty #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#candy');
  recipeContent2.style.display = "block";
};

function casserole() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #candy, #christmasc, #cocktail, #main, #pasta, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#casserole');
  recipeContent2.style.display = "block";
};

function christmasc() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #candy, #casserole, #cocktail, #main, #pasta, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasc, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#christmasch');
  recipeContent2.style.display = "block";
};

function cocktail() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #candy, #casserole, #christmasc, #main, #pasta, #sandwich, #hearty #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#cocktail');
  recipeContent2.style.display = "block";
};

function main() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #candy, #pasta, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#main');
  recipeContent2.style.display = "block";
};

function pasta() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #candy, #sandwich, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#pasta');
  recipeContent2.style.display = "block";
};

function sandwich() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#sandwich');
  recipeContent2.style.display = "block";
};

function hearty() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #sandwich, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative,#brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#hearty');
  recipeContent2.style.display = "block";
};

function crunchy() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #hearty, #sandwich, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#crunchy');
  recipeContent2.style.display = "block";
};

function easy() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #hearty, #crunchy, #sandwich, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#easy');
  recipeContent2.style.display = "block";
};

function healthy() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #hearty, #crunchy, #easy, #sandwich, #brunchb, #special, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#healthy');
  recipeContent2.style.display = "block";
};

function brunchb() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #hearty, #crunchy, #easy, #healthy, #sandwich, #special, #savory, #creative, #brunchbu, #nobake, #diabtic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#brunchb');
  recipeContent2.style.display = "block";
};

function special() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy, #hearty, #crunchy, #easy, #healthy, #brunchb, #sandwich, #savory, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#special');
  recipeContent2.style.display = "block";
};

function savory() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #sandwich, #creative, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#savory');
  recipeContent2.style.display = "block";
};

function creative() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #sandwich, #brunchbu, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#creative');
  recipeContent2.style.display = "block";
};

function brunchbu() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #sandwich, #nobake, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#brunchbu');
  recipeContent2.style.display = "block";
};

function nobake() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#nobake');
  recipeContent2.style.display = "block";
};

function diabetic() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #nobake, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#diabetic');
  recipeContent2.style.display = "block";
};

function gluten() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #nobake, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#gluten');
  recipeContent2.style.display = "block";
};

function fiber() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #nobake, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#fiber');
  recipeContent2.style.display = "block";
};

function carb() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #nobake, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#carb');
  recipeContent2.style.display = "block";
};

function calorie() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #nobake, #vegan, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#calorie');
  recipeContent2.style.display = "block";
};

function vegan() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #nobake, #hearthealthy, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#vegan');
  recipeContent2.style.display = "block";
};

function hearthealthy() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #nobake, #nutfree, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#hearthealthy');
  recipeContent2.style.display = "block";
};

function nutfree() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nobake, #protien, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#nutfree');
  recipeContent2.style.display = "block";
};

function protien() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #nobake, #sugarfree, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#protien');
  recipeContent2.style.display = "block";
};

function sugarfree() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien,  #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#sugarfree');
  recipeContent2.style.display = "block";
};

function indian() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien,  #nobake, #sugarfree, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#indian');
  recipeContent2.style.display = "block";
};

function chinese() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #sugarfree, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#chinese');
  recipeContent2.style.display = "block";
};

function italian() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #sugarfree, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#italian');
  recipeContent2.style.display = "block";
};

function mexican() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #sugarfree, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#mexican');
  recipeContent2.style.display = "block";
};

function korean() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #sugarfree, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#korean');
  recipeContent2.style.display = "block";
};

function japanese() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #sugarfree, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#japanese');
  recipeContent2.style.display = "block";
};

function thai() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #sugarfree, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#thai');
  recipeContent2.style.display = "block";
};

function french() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #sugarfree, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#french');
  recipeContent2.style.display = "block";
};

function greek() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #sugarfree, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#greek');
  recipeContent2.style.display = "block";
};

function american() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #sugarfree, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#american');
  recipeContent2.style.display = "block";
};

function babyshower() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #sugarfree,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#babyshower');
  recipeContent2.style.display = "block";
};

function birthday() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#sugarfree, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#birthday');
  recipeContent2.style.display = "block";
};

function christmasch() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #sugarfree, #halloween, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#christmasch');
  recipeContent2.style.display = "block";
};

function halloween() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #sugarfree, #thanksgiving, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#halloween');
  recipeContent2.style.display = "block";
};

function thanksgiving() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #sugarfree, #easter, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#thanksgiving');
  recipeContent2.style.display = "block";
};

function easter() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #sugarfree, #newyear, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#easter');
  recipeContent2.style.display = "block";
};

function newyear() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #sugarfree, #summer, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#newyear');
  recipeContent2.style.display = "block";
};

function summer() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #sugarfree, #autumn, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#summer');
  recipeContent2.style.display = "block";
};

function autumn() {
  var appetizersSnacksContent = document.querySelectorAll('#snacks, #bread, #cake, #casserole, #christmasc, #cocktail, #main, #pasta, #candy #hearty, #crunchy, #easy, #healthy, #brunchb, #special, #savory, #creative, #brunchbu, #sandwich, #diabetic, #gluten, #fiber, #carb, #calorie, #vegan, #hearthealthy, #nutfree, #protien, #nobake, #indian, #chinese, #italian, #mexican, #korean, #japanese, #thai, #french, #greek, #american, #babyshower,#birthday, #christmasch, #halloween, #thanksgiving, #easter, #newyear, #summer, #sugarfree, #spring');
  appetizersSnacksContent.forEach(function(element) {
      element.style.display = "none";
  });
  let recipeContent2 = document.querySelector('#autumn');
  recipeContent2.style.display = "block";
};
var videos = document.querySelectorAll('.video video');
videos.forEach(video => {
    video.addEventListener('click', () => {
        
        video.classList.toggle('active');

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    video.addEventListener('mouseenter', () => {
        video.controls = true;
    });
    video.addEventListener('mouseleave', () => {
        if (!video.classList.contains('active')) {
            video.controls = false;
        }
    });
});