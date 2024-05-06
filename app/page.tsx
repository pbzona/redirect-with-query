import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24">
      <h1 className="text-4xl mb-12">Home page</h1>
      <div className="flex flex-col space-y-8 text-lg">
        <Link
          className="underline text-blue-500"
          href="/a?test=true"
        >
          Go to /a?test=true
        </Link>
        <Link
          className="underline text-blue-500"
          href="/a?anotherTest=false"
        >
          Go to /a?anotherTest=false
        </Link>
        <Link
          className="underline text-blue-500"
          href="/a?utm_src=email&utm_other=foo"
        >
          Go to /a?utm_src=email&utm_other=foo
        </Link>
      </div>
    </main>
  );
}
