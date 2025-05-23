import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-4 text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-xl mb-8 max-w-md">Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-lg transition-all duration-300">
        Return Home
      </Link>
    </div>
  );
}
