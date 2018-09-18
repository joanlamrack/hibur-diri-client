import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Mutation } from "react-apollo";
import { ADD_MOVIES, getAllMovies, getAll } from "../queries";

export default class AddMovies extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			poster_path: "",
			popularity: 0,
			overview: ""
		};
	}

	handleOnChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Mutation
				mutation={ADD_MOVIES}
				refetchQueries={[{ query: getAllMovies }, { query: getAll }]}
			>
				{(createNewMovie, { data }) => (
					<Form
						onSubmit={e => {
							e.preventDefault();
							createNewMovie({
								variables: {
									title: this.state.title,
									poster_path: this.state.poster_path,
									popularity: Number(this.state.popularity),
									overview: this.state.overview
								}
							});
							this.setState({
								title: "",
								poster_path: "",
								popularity: "",
								overview: ""
							});
						}}
					>
					<h1>Tambah Film Lepas</h1>
						<Form.Group widths={2}>
							<Form.Input
								label="Judul"
								name="title"
								value={this.state.title}
								placeholder="Judul"
								onChange={this.handleOnChange}
							/>
							<Form.Input
								label="Tautan poster"
								name="poster_path"
								onChange={this.handleOnChange}
								value={this.state.poster_path}
								placeholder="Tautan poster"
							/>
						</Form.Group>
						<Form.Group widths={2}>
							<Form.Input
								label="Ringkasan"
								name="overview"
								value={this.state.overview}
								onChange={this.handleOnChange}
								placeholder="Deskripsi"
							/>
							<Form.Input
								label="Tingkat Popularitas"
								name="popularity"
								value={this.state.popularity}
								onChange={this.handleOnChange}
								placeholder="Rating"
								type="Number"
							/>
						</Form.Group>
						<Button type="submit">Tambah</Button>
					</Form>
				)}
			</Mutation>
		);
	}
}
