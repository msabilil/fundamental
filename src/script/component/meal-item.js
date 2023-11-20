class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML =`
            <image class="image-meal" src="${this._meal.strMealThumb}" alt="Image">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p>${this._meal.strInstructions}</p>
            </div>  
      `;
    }
}

customElements.define('meal-item', MealItem);