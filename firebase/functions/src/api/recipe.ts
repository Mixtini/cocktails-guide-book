import recipe from '../_data_/overpartylab-recipe.json';
const cors = require('cors')({
    origin: true
});
const { cocktails_list: cocktailsList } = recipe;

const getCocktailsList = (request: any, response: any) => {
    console.log(request);
    
    return cors(request, response, () => {
        response.status(200).send(cocktailsList);
    });
}

const recipeApi = {
    getCocktailsList
}

export default recipeApi;