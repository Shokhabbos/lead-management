import { Lead, JSONPlaceholderUser } from '@/services/types/lead';

export async function fetchLeads(): Promise<Lead[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: JSONPlaceholderUser[] = await response.json();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.address.city,
    company: user.company.name,
    status: 'yangi' as const,
    createdAt: new Date().toISOString(),
  }));
}

export async function updateLeadStatus(leadId: number, status: Lead['status']): Promise<Lead> {
  return {
    id: leadId,
    name: '',
    email: '',
    phone: '',
    city: '',
    company: '',
    status,
    createdAt: new Date().toISOString(),
  };
} 