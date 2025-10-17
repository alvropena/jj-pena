export default function Home() {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">JJ Pena</h1>
          <p className="text-sm md:text-base">
            We are a family-owned holding company that creates software products across industries.
          </p>
        </div>
      </main>
      
      <footer className="w-full p-3">
        <div className="flex flex-row justify-center items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          <a href="/about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            About
          </a>
          <a href="mailto:careers@jj-pena.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Careers
          </a>
          <a href="mailto:contact@jj-pena.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
