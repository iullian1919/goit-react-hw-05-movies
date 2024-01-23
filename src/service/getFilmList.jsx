const apiKey = 'e551572ef8529e6afc26a53c045117aa';

const buildUrl = (path, queryParams = {}) => {
  const baseUrl = 'https://api.themoviedb.org/3';
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${baseUrl}/${path}?${queryString}&language=en-US&api_key=${apiKey}`;
};

const fetchData = async url => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getFilms = async () => {
  const url = buildUrl('trending/movie/day');
  return fetchData(url);
};

export const searchMovie = async query => {
  const url = buildUrl('search/movie', {
    query,
    include_adult: false,
    page: 1,
  });
  return fetchData(url);
};

export const searchMovieById = async id => {
  const url = buildUrl(`movie/${id}`);
  return fetchData(url);
};

export const getCasts = async id => {
  const url = buildUrl(`movie/${id}/credits`);
  return fetchData(url);
};

export const getReviews = async id => {
  const url = buildUrl(`movie/${id}/reviews`, { page: 1 });
  return fetchData(url);
};

export default getFilms;
