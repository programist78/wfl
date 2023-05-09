import { gql } from '@apollo/client'

export const REGISTER_FIRST = gql`
mutation Register1000User($fullname: String, $email: String, $confirmedEmailGet: Boolean) {
  register1000User(fullname: $fullname, email: $email, confirmedEmailGet: $confirmedEmailGet)
}
`

export const CHANGE_STATUS = gql`
mutation Mutation($changeStatusId: ID, $confirmationCode: String) {
  changeStatus(id: $changeStatusId, confirmationCode: $confirmationCode) {
    id
    fullname
    email
    role
    password
    confirmedEmail
    subscriberMail
    balance
    avatarUrl
    twoauth
    havetwoauth
  }
}
`
export const CHECK_INFO = gql`
query Query($email: String) {
  getUser(email: $email) {
    email
  }
}
`

export const LOGIN_USER = gql`
mutation LoginUser($about: LoginInput!) {
  loginUser(about: $about) {
    user {
      id
      fullname
      email
      role
      password
      confirmedEmail
      subscriberMail
      balance
      avatarUrl
      twoauth
      havetwoauth
    }
    token
  }
}
`