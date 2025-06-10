import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchLeads, updateLeadStatus } from '@/services/api/lead';
import { Lead } from '@/services/types/lead';

export function useLeads() {
  const queryClient = useQueryClient();

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: fetchLeads,
  });

  const { mutate: updateStatus } = useMutation({
    mutationFn: ({ leadId, status }: { leadId: number; status: Lead['status'] }) =>
      updateLeadStatus(leadId, status),
    onSuccess: (updatedLead) => {
      queryClient.setQueryData<Lead[]>(['leads'], (oldLeads) =>
        oldLeads?.map((lead) => (lead.id === updatedLead.id ? { ...lead, status: updatedLead.status } : lead))
      );
    },
  });

  return {
    leads,
    isLoading,
    updateStatus,
  };
} 