import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'semantic-ui-css/semantic.min.css';
// import { client } from "./configs/apollo";
// import gql from "graphql-tag";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// client
// 	.query({
// 		query: gql`
// 			{
// 				allMovies {
// 					data {
// 						title
// 						overview
// 					}
// 				}
// 			}
// 		`
// 	})
// 	.then(result => {
// 		console.log(result.data)
// 	});
