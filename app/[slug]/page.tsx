import { Redirector } from '@/components/redirector';
import Link from 'next/link';
import { Suspense } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return ['a', 'b', 'c'].map(slug => ({
    slug,
  }));
}

export default function SlugPage({ params }: Props) {
  const shouldRedirect = params.slug === 'a';

  return (
    <div className="p-24">
      <Link
        className="block underline text-blue-400 mb-8"
        href="/"
      >
        Home
      </Link>
      {shouldRedirect ? (
        <Suspense fallback={<p>Redirecting...</p>}>
          <Redirector href="/b" />
        </Suspense>
      ) : (
        <h1 className="text-4xl">Page {params.slug.toUpperCase()}</h1>
      )}
    </div>
  );
}
