// Types
export type initialValuesState = {
  name: string;
  description: string;
  year_of_creation: number;
  rating: number;
  views: number;
  country: string;
  price: number;
};
export interface CreateProductProps {
  onClose(): void;
}
