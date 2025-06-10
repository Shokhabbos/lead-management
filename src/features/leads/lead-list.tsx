'use client';

import { Lead } from '@/services/types/lead';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Building, MapPin, Search, AlertCircle } from 'lucide-react';
import { LeadModal } from './lead-modal';

interface LeadListProps {
  leads: Lead[];
  onStatusUpdate: (leadId: number, status: Lead['status']) => void;
  onSearch: (term: string) => void;
  onStatusFilter: (status: Lead['status'] | 'All') => void;
  totalResults: number;
  currentStatus: Lead['status'] | 'All';
  searchTerm: string;
}

export function LeadList({ 
  leads, 
  onStatusUpdate, 
  onSearch, 
  onStatusFilter, 
  totalResults,
  currentStatus,
  searchTerm
}: LeadListProps) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center sm:flex-row gap-4  dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 " />
          <Input
            placeholder="Qidirish..."
            onChange={(e) => onSearch(e.target.value)}
            className="pl-12 h-12 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <Select value={currentStatus} onValueChange={(value) => onStatusFilter(value as Lead['status'] | 'All')}>
          <SelectTrigger className="h-12 text-lg border-2 py-[22px] border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20">
            <SelectValue placeholder="Status bo'yicha filtrlash" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Barchasi</SelectItem>
            <SelectItem value="yangi">Yangi</SelectItem>
            <SelectItem value="jarayonda">Jarayonda</SelectItem>
            <SelectItem value="bajarilgan">Bajarilgan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {searchTerm && (
        <div className="text-lg font-medium text-gray-600 dark:text-gray-300">
          "{searchTerm}" uchun {totalResults} ta lead topildi
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
        {leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <AlertCircle className="h-16 w-16 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold mb-3 text-gray-700 dark:text-gray-200">Hech narsa topilmadi</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Qidiruv natijalariga mos keladigan leadlar topilmadi
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-[#1d2743]">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedLead(lead)}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {lead.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{lead.email}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <MapPin className="h-5 w-5" />
                    <span className="text-base">{lead.city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <Building className="h-5 w-5" />
                    <span className="text-base">{lead.company}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                    ${lead.status === 'yangi' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : ''}
                    ${lead.status === 'jarayonda' ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' : ''}
                    ${lead.status === 'bajarilgan' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}
                  `}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedLead && (
        <LeadModal
          lead={selectedLead}
          isOpen={!!selectedLead}
          onClose={() => setSelectedLead(null)}
          onStatusUpdate={onStatusUpdate}
        />
      )}
    </div>
  );
} 