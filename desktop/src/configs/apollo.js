import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
export const client = new ApolloClient({
	uri: "http://35.196.48.174:3000/graphql",
	cache: new InMemoryCache()
});
