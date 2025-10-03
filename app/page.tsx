import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">JJ Pena, LLC</h1>
          <p className="text-lg mb-8">
            We are a family-owned holding company that creates software products across industries.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>GetMyPermit</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Streamlined permit management solutions</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Unemployed</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Career development and job search platform</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full p-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="/contact" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Contact
          </a>
          <a href="/about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            About
          </a>
          <a href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
