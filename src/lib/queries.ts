import { gql } from "graphql-request";

export const POSTS_QUERY = gql`
  query GetPosts($first: Int = 6, $after: String) {
    posts(
      first: $first
      after: $after
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        content
        date
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

export const FEATURED_QUERY = gql`
  query GetFeatured($first: Int!, $search: String) {
    posts(
      first: $first
      where: { orderby: { field: DATE, order: DESC }, search: $search }
    ) {
      nodes {
        id
        title
        slug
        date
        isSticky
        featuredImage {
          node {
            sourceUrl
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
