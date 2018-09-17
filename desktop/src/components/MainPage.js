import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import EntertainmePage from "../containers/EntertainmePage";
import MoviePage from "../containers/MoviePage";
import Series from "../containers/Series";

const panes = [
	{
		menuItem: "Utama",
		render: () => (
			<Tab.Pane>
				<EntertainmePage />
			</Tab.Pane>
		)
	},
	{
		menuItem: "Film Lepas",
		render: () => (
			<Tab.Pane>
				<MoviePage />
			</Tab.Pane>
		)
	},
	{
		menuItem: "Film Seri",
		render: () => (
			<Tab.Pane>
				<Series />
			</Tab.Pane>
		)
	}
];

export default class MainPage extends Component {
	render() {
		return <Tab panes={panes} />;
	}
}
