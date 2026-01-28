// WordPress Types

export interface WPImage {
  sourceUrl: string;
  altText: string;
}

export interface WPAuthor {
  name: string;
  avatar?: {
    url: string;
  };
}

export interface WPCategory {
  name: string;
  slug: string;
}

export interface WPTag {
  name: string;
  slug: string;
}

export interface WPSEO {
  title: string;
  metaDesc: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

export interface WPPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  featuredImage?: {
    node: WPImage;
  };
  author?: {
    node: WPAuthor;
  };
  categories?: {
    nodes: WPCategory[];
  };
  tags?: {
    nodes: WPTag[];
  };
  seo?: WPSEO;
}

export interface WPPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage?: {
    node: WPImage;
  };
  seo?: WPSEO;
}

// Custom Post Types

export interface ServiceFields {
  icon?: {
    sourceUrl: string;
    altText: string;
  };
  features?: Array<{ text: string }>;
  pricing?: number;
  ctaLink?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: WPImage;
  };
  serviceFields?: ServiceFields;
}

export interface CaseStudyFields {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: WPImage;
  };
  caseStudyFields?: CaseStudyFields;
}

export interface MenuItem {
  id: string;
  label: string;
  url: string;
  path: string;
  parentId?: string;
  cssClasses?: string[];
  target?: string;
}

export interface GeneralSettings {
  title: string;
  description: string;
  url: string;
}
