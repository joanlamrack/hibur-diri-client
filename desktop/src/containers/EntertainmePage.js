import React, { Component, Fragment } from "react";
import ItemList from "../components/ItemList";
import { getAll } from "../queries";
import { Query } from "react-apollo";

export default class EntertainmePage extends Component {
	render() {
		return (
			<Query query={getAll}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
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
