'use client';

import { type ReactNode } from 'react';
import { QueryProvider } from '@/providers/query/query-provider';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </QueryProvider>
  );
} 