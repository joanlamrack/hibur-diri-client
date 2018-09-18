import gql from "graphql-tag";

export const getAll = gql`
	{
		allMovies {
			data {
				_id
				title
				overview
				poster_path
				popularity
			}
		}
		allSeries {
			data {
				_id
				title
				overview
				poster_path
				popularity
			}
		}
	}
`;

export const getAllMovies = gql`
	{
		allMovies {
			data {
				_id
				title
				overview
				poster_path
				popularity
			}
		}
	}
`;

export const getAllSeries = gql`
	{
		allSeries {
			data {
				_id
				title
				overview
				poster_path
				popularity
			}
		}
	}
`;

export const ADD_SERIES = gql`
	mutation CreateNewSeries(
		$title: String!
		$overview: String!
		$popularity: Int!
		$poster_path: String!
	) {
		createNewSeries(
			title: $title
			overview: $overview
			popularity: $popularity
			poster_path: $poster_path
		) {
			_id
			title
			overview
			popularity
			poster_path
		}
	}
`;


export const ADD_MOVIES = gql`
	mutation CreateNewMovie(
		$title: String!
		$overview: String!
		$popularity: Int!
		$poster_path: String!
	) {
		createNewMovie(
			title: $title
			overview: $overview
			popularity: $popularity
			poster_path: $poster_path
		) {
			_id
			title
			overview
			popularity
			poster_path
		}
	}
`;

export const DELETE_MOVIES_BY_ID = gql`
	mutation DeleteByIdMovies(
		$id: ID!
	) {
		deleteByIdMovies(
			id: $id
		) {
			_id
			title
			overview
			popularity
			poster_path
		}
	}
`;