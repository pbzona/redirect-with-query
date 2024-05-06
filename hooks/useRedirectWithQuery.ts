import { redirect, useSearchParams } from 'next/navigation';

export const useRedirectWithQuery = () => {
  const params = useSearchParams();

  let destination = `?`;
  params.forEach((value: string, key: string) => {
    destination = `${destination}${key}=${value}&`;
  });

  const redirectWithQuery = (href: string) => {
    redirect(href + destination.slice(0, -1));
  };

  return {
    redirectWithQuery,
  };
};
