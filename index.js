const { ApolloServer, gql } = require('apollo-server');

// Datos harcodeados
const books = [{
        title: 'Harry poter y colombia',
        author: {
            name: "Andres",
            age: 25,
            schedule: [{
                    scheduleName: "Español",
                    degree: 8
                },
                {
                    scheduleName: "Matematicas",
                    degree: 10
                }
            ]
        },
    },
    {
        title: 'Harry poter y chile',
        author: {
            name: "Manuel",
            age: 30,
            schedule: [{
                    scheduleName: "Sociales",
                    degree: 6
                },
                {
                    scheduleName: "Matematicas",
                    degree: 8
                }
            ]
        },
    }
];

// Esquema de Datos
const typeDefs = gql `

    type Book{
        title: String
        author: User
    }

    type User{
        name: String
        age: Int
        schedule: [Schedule]
    }

    type Schedule{
        scheduleName: String
        degree: Int
    }

    type Query{
        books: [Book]
    }
`;

// Resolvers
const resolvers = {
    Query: {
        books: () => books,
    },
};

// Creacion del Servidor
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(' Elservidopr esta funcionando');
})