import {Ingredient} from '../shared/ingredient.module';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient [] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoe', 10)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
