'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/common/form';
import { Input } from '@/components/ui/input';
import { Lead } from '@/services/types/lead';
import { toast } from 'sonner';
import { Building, Mail, MapPin, User, Tag } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formSchema } from '@/schemas/form-schema';


interface AddLeadFormProps {
  onAddLead: (lead: Omit<Lead, 'id'>) => void;
}

export function AddLeadForm({ onAddLead }: AddLeadFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      city: '',
      company: '',
      status: 'yangi',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onAddLead({
      ...values,
      createdAt: new Date().toISOString(),
    });
    form.reset();
    toast.success('Lead muvaffaqiyatli qo\'shildi');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Ism</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Ism" className="pl-9" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Email" type="email" className="pl-9" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Telefon</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input placeholder="Telefon" className="pl-9" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Shahar</FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Shahar" className="pl-9" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Kompaniya</FormLabel>
              <FormControl>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Kompaniya" className="pl-9" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Status</FormLabel>
              <FormControl>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="pl-9">
                      <SelectValue placeholder="Statusni tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yangi">Yangi</SelectItem>
                      <SelectItem value="jarayonda">Jarayonda</SelectItem>
                      <SelectItem value="bajarilgan">Bajarilgan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Qo'shish</Button>
      </form>
    </Form>
  );
} 