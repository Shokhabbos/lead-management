"use client"

import { useState } from 'react';
import { MainLayout } from '@/layout/main-layout';
import { LeadList } from '@/features/leads/lead-list';
import { AddLeadForm } from '@/features/leads/add-lead-form';
import { useLeads } from '@/services/hooks/use-leads';
import { Lead } from '@/services/types/lead';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { Pagination } from '@/components/common/pagination';
import { Users } from 'lucide-react';

export default function Home() {
  const { leads, isLoading, updateStatus } = useLeads();
  const [localLeads, setLocalLeads] = useState<Lead[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<Lead['status'] | 'All'>('All');
  const resultsPerPage = 10;

  const handleAddLead = (newLead: Omit<Lead, 'id'>) => {
    const lead: Lead = {
      ...newLead,
      id: Math.max(...[...leads, ...localLeads].map((l) => l.id)) + 1,
    };
    setLocalLeads((prev) => [lead, ...prev]);
  };

  const handleStatusUpdate = (leadId: number, status: Lead['status']) => {
    updateStatus({ leadId, status });
  };

  const allLeads = [...localLeads, ...leads];
  const filteredLeads = allLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredLeads.length / resultsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Lead boshqaruvi</h1>
          </div>
          <ThemeToggle />
        </div>

        <Tabs defaultValue="leads" className="space-y-8">
          <TabsList className="w-full sm:w-auto bg-gray-100 dark:bg-gray-800 rounded-xl py-8">
            <TabsTrigger value="leads" className="flex-1 sm:flex-none py-4 cursor-pointer">Leadlar</TabsTrigger>
            <TabsTrigger value="add-lead" className="flex-1 sm:flex-none py-4 cursor-pointer">Yangi lead</TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <LeadList 
              leads={paginatedLeads} 
              onStatusUpdate={handleStatusUpdate}
              onSearch={setSearchTerm}
              onStatusFilter={setStatusFilter}
              totalResults={filteredLeads.length}
              currentStatus={statusFilter}
              searchTerm={searchTerm}
            />
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  totalResults={filteredLeads.length}
                  resultsPerPage={resultsPerPage}
                />
              </div>
            )}
          </TabsContent>

          <TabsContent value="add-lead">
            <Card className="border-2 bg-gray-50 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Yangi lead qo'shish</CardTitle>
              </CardHeader>
              <CardContent>
                <AddLeadForm onAddLead={handleAddLead} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
