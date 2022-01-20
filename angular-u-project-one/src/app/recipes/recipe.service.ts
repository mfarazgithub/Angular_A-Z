import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    selectedRecipe = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe("Bang Recipe", "Bang description", 
        'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/fillet-steak-972171c1.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe("Dabang Recipe", "Dabang description", 
        'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/restaurants/osia-steak-and-seafood-grill/osia-steak--seafood-grill-beef-steak-1366x666.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=70CF567FEAF4823EB48D8AA2F2738B0475A802AB',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
        ])
      ];

      constructor(private slService: ShoppingListService) {}

    getRecipes()
    {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}