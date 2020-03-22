import recipe from '../_data_/overpartylab-recipe.json';

const { cocktails_list: cocktailsList } = recipe;

const getCocktailsList = (request: any, response: any) => {
    console.log(request);
    response.send(cocktailsList);
}

const recipeApi = {
    getCocktailsList
}

export default recipeApi;