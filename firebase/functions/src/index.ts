import * as functions from 'firebase-functions';

import commonApi from './api/config';
import recipeApi from './api/recipe';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// get config
export const getBaseList = functions.https.onRequest(commonApi.getBaseList);
export const getAttachedList = functions.https.onRequest(commonApi.getAttachedList);

// get overpartylab recipe
export const getCocktailsList = functions.https.onRequest(recipeApi.getCocktailsList);