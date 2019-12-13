const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const api = {
  search: `${baseURL}/search.php`,
  lookup: `${baseURL}/lookup.php`,
  random: `${baseURL}/random.php`,
  listFilters: `${baseURL}/list.php`
};
