import { redirect, useSearchParams } from 'next/navigation';

export const useRedirectWithQuery = () => {
  // Get query params on the client side
  const params = useSearchParams();

  // Create new query string
  let destination = `?`;
  params.forEach((value: string, key: string) => {
    destination = `${destination}${key}=${value}&`;
  });

  // Redirect function that joins the original link + the new query string
  const redirectWithQuery = (href: string) => {
    redirect(href + destination.slice(0, -1));
  };

  return {
    redirectWithQuery,
  };
};
