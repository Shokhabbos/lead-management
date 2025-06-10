# Lead Boshqaruvi Tizimi

Bu loyiha leadlarni boshqarish uchun yaratilgan zamonaviy web ilova. Next.js, TypeScript va Tailwind CSS yordamida qurilgan.

## Asosiy xususiyatlar

- 🎯 Leadlarni qo'shish, tahrirlash va o'chirish
- 🔍 Qidiruv va filtrlash imkoniyati
- 📊 Lead statuslarini boshqarish (Yangi, Jarayonda, Bajarilgan)
- 🌓 Qorong'i/ochiq mavzu rejimi
- 📱 Responsive dizayn
- ⚡ Tezkor ishlash

## Texnologiyalar

- **Next.js 14** - React framework
- **TypeScript** - Type xavfsizligi
- **Tailwind CSS** - Stilizatsiya
- **Shadcn/ui** - UI komponentlari
- **React Hook Form** - Formalar boshqaruvi
- **Zod** - Forma validatsiyasi
- **TanStack Query** - Ma'lumotlarni boshqarish
- **Lucide Icons** - Ikonlar
- **Next Themes** - Mavzu boshqaruvi

## O'rnatish

1. Repozitoriyani klonlang:
```bash
git clone https://github.com/Shokhabbos/lead-management.git
cd lead-management
```

2. Kerakli paketlarni o'rnating:
```bash
npm install
# yoki
yarn install
# yoki
pnpm install
```

3. Loyihani ishga tushiring:
```bash
npm run dev
# yoki
yarn dev
# yoki
pnpm dev
```

4. Brauzerda oching: [http://localhost:3000](http://localhost:3000)

## Loyiha tuzilishi

```
src/
├── app/                 # Next.js app router
├── components/         # UI komponentlari
│   ├── common/        # Umumiy komponentlar
│   └── ui/            # Shadcn/ui komponentlari
├── features/          # Asosiy funksionallik
│   └── leads/         # Lead boshqaruvi
├── services/          # API va hook'lar
├── schemas/           # Zod validatsiya sxemalari
└── providers/         # Context provider'lar
```

## Xususiyatlar

### Lead Boshqaruvi
- Yangi lead qo'shish
- Lead statusini o'zgartirish
- Lead ma'lumotlarini ko'rish
- Leadlarni qidirish va filtrlash

### Qidiruv va Filtrlash
- Lead nomi va email bo'yicha qidirish
- Status bo'yicha filtrlash
- Natijalar sonini ko'rsatish

### UI/UX
- Zamonaviy va chiroyli interfeys
- Responsive dizayn
- Qorong'i/ochiq mavzu rejimi
- Animatsiyalar va o'tishlar

## API

Loyiha JSONPlaceholder API dan foydalanadi:
- `GET /users` - Leadlarni olish

## Yaratuvchi

- [Sizning ismingiz](https://github.com/Shokhabbos)

## Litsenziya

MIT
