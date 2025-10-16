"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  
  const cards = [
    {
      title: "GetMyPermit",
      description: "Helps new drivers get their driver's licenses",
      image: "https://placehold.co/400x200/png",
      link: "https://getmypermit.app"
    },
    {
      title: "Unemployed",
      description: "Career development and job search platform",
      image: "https://placehold.co/400x200/png",
      link: "https://unemployed.app"
    }
  ];

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
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="flex flex-col items-start text-left p-6">
                  <Image
                    src={cards[currentCard].image}
                    alt={cards[currentCard].title}
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="flex items-start justify-between w-full mt-4">
                    <div className="flex flex-col gap-1">
                      <CardTitle>{cards[currentCard].title}</CardTitle>
                      <CardDescription>{cards[currentCard].description}</CardDescription>
                    </div>
                    <Link 
                      href={cards[currentCard].link} 
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
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-6">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentCard 
                        ? 'bg-primary' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
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
