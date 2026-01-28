import { fetchAPI } from '@/lib/graphql-client';
import { GET_POST_BY_SLUG, GET_ALL_POSTS } from '@/lib/wordpress-api';
import { WPPost } from '@/lib/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const data = await fetchAPI(GET_ALL_POSTS);
    const posts = data.posts?.nodes || [];

    return posts.map((post: WPPost) => ({
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const data = await fetchAPI(GET_POST_BY_SLUG, { slug: params.slug });
    const post: WPPost = data.post;

    if (!post) {
      return {
        title: 'Post Not Found',
      };
    }

    return {
      title: post.seo?.title || post.title,
      description: post.seo?.metaDesc || post.excerpt.replace(/<[^>]*>/g, ''),
      openGraph: {
        title: post.seo?.title || post.title,
        description: post.seo?.metaDesc || post.excerpt.replace(/<[^>]*>/g, ''),
        images: post.seo?.opengraphImage?.sourceUrl
          ? [post.seo.opengraphImage.sourceUrl]
          : post.featuredImage
          ? [post.featuredImage.node.sourceUrl]
          : [],
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author.node.name] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPost(slug: string) {
  try {
    const data = await fetchAPI(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post: WPPost = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Back to Blog */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/blog"
          className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
        >
          ← Quay lại Blog
        </Link>
      </div>

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Categories */}
        {post.categories && post.categories.nodes.length > 0 && (
          <div className="flex gap-2 mb-6">
            {post.categories.nodes.map((cat) => (
              <span
                key={cat.slug}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 mb-12 text-gray-400">
          {post.author && (
            <div className="flex items-center gap-3">
              {post.author.node.avatar && (
                <Image
                  src={post.author.node.avatar.url}
                  alt={post.author.node.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="font-semibold text-white">{post.author.node.name}</span>
            </div>
          )}
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('vi-VN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* Content */}
        <div
          className="wp-content prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        {/* Tags */}
        {post.tags && post.tags.nodes.length > 0 && (
          <div className="mt-12 pt-12 border-t border-gray-800">
            <h3 className="text-xl font-bold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.nodes.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/tag/${tag.slug}`}
                  className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Tìm hiểu thêm về dịch vụ của chúng tôi</h2>
          <Link
            href="/services"
            className="px-8 py-4 bg-primary text-dark font-bold rounded-lg hover:bg-secondary hover:text-white transition-all inline-block"
          >
            Xem Dịch Vụ
          </Link>
        </div>
      </section>
    </main>
  );
}
