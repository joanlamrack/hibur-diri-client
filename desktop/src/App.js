import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import { client } from "./configs/apollo";

import Header from "./components/Header";
import MainPage from "./components/MainPage";

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<Header />
					<MainPage />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
