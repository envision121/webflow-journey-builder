export interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  imageUrl: string;
  children?: React.ReactNode;
}