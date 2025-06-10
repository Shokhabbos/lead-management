export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  company: string;
  status: 'yangi' | 'jarayonda' | 'bajarilgan';
  createdAt: string;
};

export interface JSONPlaceholderUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
} 