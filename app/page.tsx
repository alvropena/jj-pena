import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
            <div className="flex flex-col gap-6 max-w-2xl mx-auto">
              <Card>
                <CardContent className="flex flex-col items-start text-left p-6">
                  <Image
                    src="https://placehold.co/400x200/png"
                    alt="GetMyPermit"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="flex items-start justify-between w-full mt-4">
                    <div className="flex flex-col gap-1">
                      <CardTitle>GetMyPermit</CardTitle>
                      <CardDescription>Streamlined permit management solutions</CardDescription>
                    </div>
                    <Link 
                      href="https://getmypermit.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 p-3 rounded-md transition-all duration-200 hover:scale-105 inline-block"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start text-left p-6">
                  <Image
                    src="https://placehold.co/400x200/png"
                    alt="Unemployed"
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="flex items-start justify-between w-full mt-4">
                    <div className="flex flex-col gap-1">
                      <CardTitle>Unemployed</CardTitle>
                      <CardDescription>Career development and job search platform</CardDescription>
                    </div>
                    <Link 
                      href="https://unemployed.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 p-3 rounded-md transition-all duration-200 hover:scale-105 inline-block"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full p-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="/about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            About
          </a>
          <a href="/careers" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Careers
          </a>
          <a href="/contact" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
