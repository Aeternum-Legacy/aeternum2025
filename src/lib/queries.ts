import { gql } from "graphql-request";

export const POSTS_QUERY = gql`
  {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        content
        isSticky
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG_WITH_SEO = gql`
  query GetPostBySlug($slug: String!) {
    posts(where: { name: $slug }) {
      nodes {
        id
        slug
        title
        content
        date
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
          fullHead
        }
      }
    }
  }
`;

export const RECENT_POSTS_QUERY = gql`
  query GetRecentPosts {
    posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
      }
    }
  }
`;
