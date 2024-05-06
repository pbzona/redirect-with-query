'use client';

import { useRedirectWithQuery } from '@/hooks/useRedirectWithQuery';

export const Redirector = ({ href }: { href: string }) => {
  // Need to use the hook here rather than in /[slug]/page.tsx because
  // it must be a client component due to using useSearchParams()
  const { redirectWithQuery } = useRedirectWithQuery();

  redirectWithQuery(href);

  return null;
};
