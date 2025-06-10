import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 ta harfdan iborat bo\'lishi kerak'),
  email: z.string().email('Noto\'g\'ri email formati'),
  phone: z.string().min(2, 'Telefon raqam kamida 2 ta raqamdan iborat bo\'lishi kerak'),
  city: z.string().min(2, 'Shahar kamida 2 ta harfdan iborat bo\'lishi kerak'),
  company: z.string().min(2, 'Kompaniya kamida 2 ta harfdan iborat bo\'lishi kerak'),
  status: z.enum(['yangi', 'jarayonda', 'bajarilgan'], {
    required_error: 'Statusni tanlang',
  }),
});

export type FormValues = z.infer<typeof formSchema>; 