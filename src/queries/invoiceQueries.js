import { gql } from '@apollo/client'

const GET_INVOICES = gql`
  query getClients {
    invoices {
      id
      firstName
      lastName
      email
      phone
      items {
        itemname,
        price,
        quantity
      }
      paymentStatus
      createdAt
    }
  }
`

export { GET_INVOICES };