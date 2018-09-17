import React, { Component } from "react";
import { Item, Container } from "semantic-ui-react";
import ItemOne from "./ItemOne";

export default class ItemList extends Component {
	render() {
		return (
			<Container>
				<h1>{this.props.listName}</h1>
				<Item.Group divided>
				{this.props.listItem.map(item => (
					<ItemOne key={item._id}
						poster_path={item.poster_path}
						title={item.title}
						popularity={item.popularity}
						overview={item.overview}
					/>
				))}
			</Item.Group>
			</Container>
			
		);
	}
}
