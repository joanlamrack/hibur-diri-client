import React, { Component, Fragment } from "react";
import ItemList from "../components/ItemList";
import { Query } from "react-apollo";
import { getAllMovies } from "../queries";
import { Button, Modal } from "semantic-ui-react";
import AddMovies from "./AddMovies";
export default class MoviePage extends Component {
	render() {
		return (
			<Fragment>
				<Modal
					trigger={<Button>Tambah</Button>}
					content={<AddMovies />}
					actions={[{ key: "Tutup", content: "Close", positive: true }]}
				/>
				<Query query={getAllMovies}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error :(</p>;
						return <ItemList listItem={data.allMovies.data} listName="" />;
					}}
				</Query>
			</Fragment>
		);
	}
}
