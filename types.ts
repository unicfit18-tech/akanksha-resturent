
export type PageView = 'home' | 'about' | 'services' | 'service-detail' | 'blog' | 'contact';

// Added DesignVariant type to fix the missing export error in components/SettingsPanel.tsx
export type DesignVariant = 'split' | 'editorial' | 'immersive';

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  number?: string;
}
