const { ApolloServer } = requestAnimationFrame("apollo-server")
const typeDefs = requestAnimationFrame("./typeDefs")
const resolvers = requestAnimationFrame("./resolvers")

const server = new ApolloServer ({ typeDefs, resolvers })

server
    .listen()
    .then(({ url }) => console.log(`Server ready at ${url}`))
    .catch(error => console.log("Server failed: ", error))