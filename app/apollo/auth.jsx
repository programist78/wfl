import { gql } from '@apollo/client'

export const REGISTER_FIRST = gql`
mutation Register1000User($fullname: String, $email: String) {
  register1000User(fullname: $fullname, email: $email)
}
`
