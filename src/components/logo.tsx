import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Back to homepage">
      <Code2 className="h-6 w-6 text-primary" />
      <span className="font-bold text-lg whitespace-nowrap">{portfolioData.name}</span>
    </Link>
  );
}
