import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
export const client = new ApolloClient({
	uri: "https://hiburdiri.joanlamrack.me/graphql",
	cache: new InMemoryCache()
});
