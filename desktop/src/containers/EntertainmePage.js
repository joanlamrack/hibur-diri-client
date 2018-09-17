import React, { Component, Fragment } from "react";
import ItemList from "../components/ItemList";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default class EntertainmePage extends Component {
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
				`}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
					console.log(data.allMovies.data);
					return (
						<Fragment>
							<ItemList listItem={data.allMovies.data} listName="Film Lepas" />
							<ItemList listItem={data.allSeries.data} listName="Film Seri" />
						</Fragment>
					);
				}}
			</Query>
		);
	}
}
