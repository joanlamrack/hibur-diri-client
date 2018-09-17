import React, { Component } from "react";
import logo from "../film.png";
import "../App.css";

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p><h1 className="App-title">Hibur Diri</h1><h4>Ketika dihibur saja tidak cukup</h4></p>
			</header>
		);
	}
}
