export interface Question {
  id: number;
  title: string;
  hint?: string;
  isColumn?: boolean;
  isBtn?: boolean;
  options: Option[];
}

interface Option {
  description: string;
  image: string;
}
