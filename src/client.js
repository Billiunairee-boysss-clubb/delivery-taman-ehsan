import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
 uri: "https://graphql.fauna.com/graphql",
 headers: {
   authorization: `Bearer fnAD_vMhO7ACBdbQ3YGVGMzjSowrMKrjn7DXllgy`,
 },
 cache: new InMemoryCache(),
});