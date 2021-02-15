
//With mocks enabled the server will return two entries by default. 
//To get more entries at a time and make it more interesting on the 
//Frontend part use the mocklist object that we imoport from the Apollo server

const { ApolloServer, MockList } = require('apollo-server');

const typeDefs = require('./schema');


//In this testproject we use mock data. Mocks holds the type Track which in turn holds fields returning static hardcoded data
const mocks = {

    Query: () => ({
        tracksForHome: () => new MockList([6,9])
    }),

    Track: () => ({
        id: () => 'track_01',
        title: () => 'Astro Cat, Space Explorer',
        author: () => {
            return {
                name: 'Grumpy Cat',
                photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
            };
        },
        thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => 1210,
        modulesCount: () => 6,
    }),
};


// Passing our schema and mock values to the ApolloServer
const server = new ApolloServer({ typeDefs, mocks});

server.listen().then(() => {
    console.log(`
                Server is running...
                Listening on port 4000
                `)
})