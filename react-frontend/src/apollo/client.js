import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { withClientState } from "apollo-link-state"
import { ApolloLink } from "apollo-link"
import fetch from "unfetch"

const uri = "http://grabmovies.tk:4000/graphql"

// ! TODO: Check if authToken expired before each request

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri,
  fetch,
})

const client = new ApolloClient({
  link: ApolloLink.from([
    // onError(({ graphQLErrors, networkError }) => {
    //   if (graphQLErrors) {
    //     graphQLErrors.map(({ message, locations, path }) =>
    //       console.log(`[GraphQL error]:`, { message, locations, path })
    //     )
    //     // console.log("graphQLErrors", graphQLErrors)
    //   }
    //   if (networkError) {
    //     console.log({ networkError })
    //     //   logoutUser();
    //   }
    // }),
    withClientState({
      defaults: {
        isConnected: true,
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected } })
            return null
          },
        },
      },
      cache,
    }),
    httpLink,
  ]),
  cache,
})

export default client
