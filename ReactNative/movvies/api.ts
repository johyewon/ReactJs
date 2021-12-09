const API_KEY = "32aeb718cb3b0849894778b48d34fca0";
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface BaseResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

export interface MovieResponse extends BaseResponse {
  result: Movie[];
}

const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
    res.json()
  );

const upcoming = () =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  ).then((res) => res.json());

const nowPlaying = () =>
  fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  ).then((res) => res.json());

export const moviesApi = { trending, upcoming, nowPlaying };
