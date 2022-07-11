// const { clients } = require('../data')

// const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql')

// // CLIENT TYPE
// const ClientType = new GraphQLObjectType({
//     name: 'Client',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         email: { type: GraphQLString },
//         phone: { type: GraphQLString },
//     })
// });

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         client: {
//             type: ClientType,
//             args: { id: { type: GraphQLID }},
//             resolve(parent, args) {
//                 return clients.find(client => client.id === args.id)
//             }
//         },
//         clients: {
//             type: new GraphQLList(ClientType),
//             resolve(parent, args) {
//                 return clients
//             }
//         },
//     }
// });

// module.exports = new GraphQLSchema({
//     query: RootQuery
// })




const { invoices } = require('../data')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql')

// INVOICE TYPE
const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        id: { type: GraphQLID },
        itemname:  { type: GraphQLString },
        quantity: { type: GraphQLString },
        price: { type: GraphQLString },
        total: { type: GraphQLString },
    })
})
const InvoiceType = new GraphQLObjectType({
    name: 'Invoice',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        items: { type:  GraphQLList(ItemType) },
        paymentStatus: { type: GraphQLString },
        createdAt: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        invoice: {
            type: InvoiceType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return invoices.find(invoice => invoice.id === args.id)
            }
        },
        invoices: {
            type: new GraphQLList(InvoiceType),
            resolve(parent, args) {
                return invoices
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})