'use client';

import { useRedirectWithQuery } from '@/hooks/useRedirectWithQuery';

export const Redirector = ({ href }: { href: string }) => {
  const { redirectWithQuery } = useRedirectWithQuery();

  redirectWithQuery(href);

  return null;
};
