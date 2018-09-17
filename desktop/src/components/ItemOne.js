import React, { Component } from "react";
import { Item, Icon } from "semantic-ui-react";

export default class ItemOne extends Component {
	render() {
		return (
			<Item>
				<Item.Image size="tiny" src={this.props.poster_path} />

				<Item.Content verticalAlign='middle'>
					<Item.Header as="a">{this.props.title}</Item.Header>
					<Item.Meta><Icon name={"star"}/>{this.props.popularity}</Item.Meta>
					<Item.Description>{this.props.overview}</Item.Description>
					<Item.Extra>Additional Details</Item.Extra>
				</Item.Content>
			</Item>
		);
	}
}
