import React, { Component, Fragment } from "react";
import ItemList from "../components/ItemList";
import { Query } from "react-apollo";
import { getAllSeries } from "../queries";
import { Button, Modal } from "semantic-ui-react";
import AddSeries from "./AddSeries";

export default class Series extends Component {
	render() {
		return (
			<Fragment>
				<Modal
					trigger={<Button>Tambah</Button>}
					content={<AddSeries/>}
					actions={[{ key: "Tutup", content: "Close", positive: true }]}
				/>
				<Query query={getAllSeries}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error :(</p>;
						return <ItemList listItem={data.allSeries.data} listName="" />;
					}}
				</Query>
			</Fragment>
		);
	}
}
