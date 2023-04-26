// import singleTypeDefs from ''

const typeDefs = `#graphql
  scalar Upload
  type File {
    url: [String]
  }
  enum Role {
  USER
  ADMIN
  }
  type Post {
    id: ID
    title: String
    text: String
    price: String
    images: [String]
    comments: [String]
  }
  type User{
    id: ID
    fullname: String
    email: String
    role: String
    password: String
    confirmedEmail: Boolean
    subscriberMail: String
    balance: String
    avatarUrl: String
    twoauth: String
    havetwoauth: String
  }
  type PostComment {
    comment: String
    user: String
  }
  type PostAnswers {
    comment: String
    user: String
  }
  type PostCommentwanswers {
    comment: String
    user: String
    id: String
    answers: [PostComment]
  }
  type AuthPayload {
    user: User
    token: String
  }
  type Query {
    getAllPosts: [Post]
    getPost(id: ID): Post

    getPostComments(id: ID): [PostCommentwanswers]

    getUser(email: String): User

    getCount: String
  }
  input PostInput {
    title: String
    text: String
    price: String
  }

  input PostCommentInput{
    comment: String!
    user: String!
  }


  input LoginInput{
    email: String!
    password: String!
  }

  input RegisterInput{
    fullname: String!
    email: String!
    password: String!
    confirm_password: String!
    subscriberMail: Boolean
  }

  type Mutation {
    createPost(post: PostInput!, image: [Upload]!): Post
    deletePost(id: ID): String
    updatePost(id: ID,post: PostInput): Post

    PostcreateComment(id: ID, about: PostCommentInput) : PostComment
    PostanswerComment(id: ID, about: PostCommentInput) : PostCommentwanswers
    PostdeleteanswerComment(id: ID): String

    loginUser(about: LoginInput!): AuthPayload
    registerUser(id: ID, about: RegisterInput!): AuthPayload
    register1000User(fullname: String, email: String): String
    sendConfirmedEmail(email: String!): AuthPayload
    changeStatus(id: ID, confirmationCode: String): User
    forgotPassword(id: ID, confirmationCode: String, password: String): User
    forgotPasswordSend(email: String): String

    subscribeToNewsletter(email: String): String

    sendAboutStart: String
  }
`;


export default typeDefs