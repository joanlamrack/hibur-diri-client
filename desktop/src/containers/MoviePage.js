import React, { Component } from "react";
import ItemList from "../components/ItemList";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default class MoviePage extends Component {
	render() {
		return (
			<Query
				query={gql`
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
				`}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
					return <ItemList listItem={data.allMovies.data} listName="" />;
				}}
			</Query>
		);
	}
}
