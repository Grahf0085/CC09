export function howMuchPencil(str) {

  let newArray = [];

  for (let i = 0; i <= str.length; i++) {
    newArray.push(str.slice(i));
  }

  return newArray;

}

export function wordsToCharList(str) {

  const chars = str.split('');
  return chars;

}

export function listFoods(recipe) {

  let ingredients = recipe.ingredients;

  return ingredients.map(ingredient => ingredient.split(' ').splice(2).join(' '));

}

export function stepActions(recipe) {

  const steps = recipe.steps;

  const actions = steps.map(item => item.split(' ').splice(0, 1).join(' '));

  return actions;

}

export function removeLastCharacters(str, numberOfCharacters) {

  if (numberOfCharacters > str.length) {
    return '';
  }

  if (numberOfCharacters < 0) {
    return str;
  }

  return str.slice(0, -numberOfCharacters);

}

export function totalSumCSV(str) {

  const test = str.split(',');
  let sum = 0;

  test.forEach((number) => {
    let convert = +number;
    sum += convert;
  });

  return sum;

}

export function removeVowels(str) {

  let newStuff = str.replace(/[a,e,i,o,u]/gi, '');

  return newStuff;

}