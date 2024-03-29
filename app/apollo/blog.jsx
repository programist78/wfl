import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
query GetAllPosts {
  getAllPosts {
    id
    title
    text
    images
    comments
    tags
  }
}
`

export const GET_ONE_POST = gql`
query GetPost($getPostId: ID) {
  getPost(id: $getPostId) {
    id
    title
    text
    images
    comments
    tags
  }
}
`

export const GET_POST_COMMENTS = gql`
query GetPostComments($getPostCommentsId: ID) {
    getPostComments(id: $getPostCommentsId) {
      comment
      user
      id
      answers {
        comment
        user
      }
    }
  }
`

export const CREATE_POST = gql`
mutation Mutation($post: PostInput!, $image: [Upload]!) {
  createPost(post: $post, image: $image) {
    id
    title
    text
    images
    comments
    tags
  }
}
`

export const DELETE_POST = gql`
mutation DeletePost($deletePostId: ID) {
    deletePost(id: $deletePostId)
  }
`

export const UPDATE_POST = gql`
mutation UpdatePost($image: [Upload]!, $updatePostId: ID, $post: PostInput) {
  updatePost(image: $image, id: $updatePostId, post: $post) {
    id
    title
    text
    images
    comments
    tags
  }
}
`

export const CREATE_COMMENT = gql`
mutation PostcreateComment($postcreateCommentId: ID, $about: PostCommentInput) {
    PostcreateComment(id: $postcreateCommentId, about: $about) {
      comment
      user
    }
  }
`

export const CREATE_ANSWER_COMMENT = gql`
mutation PostanswerComment($postanswerCommentId: ID, $about: PostCommentInput) {
    PostanswerComment(id: $postanswerCommentId, about: $about) {
      comment
      user
      id
      answers {
        comment
        user
      }
    }
  }
`

export const DELETE_COMMENT = gql`
mutation PostdeleteanswerComment($postdeleteanswerCommentId: ID) {
    PostdeleteanswerComment(id: $postdeleteanswerCommentId)
  }
`

export const GET_TAGS = gql`
query Query {
  getTags
}
`