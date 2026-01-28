import { gql } from 'graphql-request';

// Get all posts
export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
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

// Get single post by slug
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

// Get all pages
export const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages(first: 100) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// Get page by slug
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

// Get site settings
export const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    generalSettings {
      title
      description
      url
    }
  }
`;

// Get menu
export const GET_MENU = gql`
  query GetMenu($location: MenuLocationEnum!) {
    menuItems(where: { location: $location }, first: 50) {
      nodes {
        id
        label
        url
        path
        parentId
        cssClasses
        target
      }
    }
  }
`;

// Custom Post Type: Services
export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        serviceFields {
          icon {
            sourceUrl
            altText
          }
          features {
            text
          }
          pricing
          ctaLink
        }
      }
    }
  }
`;

// Custom Post Type: Case Studies
export const GET_ALL_CASE_STUDIES = gql`
  query GetAllCaseStudies {
    caseStudies(first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        caseStudyFields {
          client
          industry
          challenge
          solution
          results
        }
      }
    }
  }
`;

// Search query
export const SEARCH_CONTENT = gql`
  query SearchContent($searchTerm: String!) {
    posts(where: { search: $searchTerm }, first: 10) {
      nodes {
        id
        title
        slug
        excerpt
        date
      }
    }
    pages(where: { search: $searchTerm }, first: 10) {
      nodes {
        id
        title
        slug
        excerpt: content(format: RENDERED)
      }
    }
  }
`;
