'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import LegalModal from '@/components/ui/LegalModal';
import PrivacyPolicy from '@/components/legal/PrivacyPolicy';
import TermsAndConditions from '@/components/legal/TermsAndConditions';
import CookiePolicy from '@/components/legal/CookiePolicy';
import { legalMetadata } from '@/app/legal/metadata';

type LegalType = 'privacy' | 'terms' | 'cookies' | null;

interface LegalContextType {
  openLegal: (type: LegalType) => void;
  closeLegal: () => void;
}

const LegalContext = createContext<LegalContextType | undefined>(undefined);

export function LegalProvider({ children }: { children: ReactNode }) {
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);

  const openLegal = (type: LegalType) => setActiveLegal(type);
  const closeLegal = () => setActiveLegal(null);

  const getLegalContent = () => {
    if (!activeLegal) return null;

    const metadata = legalMetadata[activeLegal];
    
    let content;
    switch (activeLegal) {
      case 'privacy':
        content = <PrivacyPolicy />;
        break;
      case 'terms':
        content = <TermsAndConditions />;
        break;
      case 'cookies':
        content = <CookiePolicy />;
        break;
      default:
        return null;
    }

    return {
      title: metadata.title,
      content: (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">{metadata.title.split('|')[0].trim()}</h1>
          {content}
        </div>
      )
    };
  };

  const legalContent = getLegalContent();

  return (
    <LegalContext.Provider value={{ openLegal, closeLegal }}>
      {children}
      {legalContent && (
        <LegalModal
          isOpen={!!activeLegal}
          onClose={closeLegal}
          title={legalContent.title}
        >
          {legalContent.content}
        </LegalModal>
      )}
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const context = useContext(LegalContext);
  if (context === undefined) {
    throw new Error('useLegal must be used within a LegalProvider');
  }
  return context;
} 