export const url = process.env.REACT_APP_API_BASE_URL;
export const categoriesUrl = `${url}/categories`;
export const getNewsListUrl = (categoryId, pageNumber) => `${categoriesUrl}/${categoryId}/news?page=${pageNumber}`;
export const getDetailedNewsItemUrl = (newsItemId) => `${url}/details?id=${newsItemId}`;
