# Lead Management System

A modern web application for managing leads, built with Next.js, TypeScript, and Tailwind CSS.

## Key Features

- 🎯 Add, edit, and delete leads
- 🔍 Search and filter functionality
- 📊 Lead status management (New, In Progress, Completed)
- 🌓 Dark/Light theme mode
- 📱 Responsive design
- ⚡ Fast performance

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **React Hook Form** - Form management
- **Zod** - Form validation
- **TanStack Query** - Data management
- **Lucide Icons** - Icons
- **Next Themes** - Theme management

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Shokhabbos/lead-management.git
cd lead-management
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/         # UI components
│   ├── common/        # Common components
│   └── ui/            # Shadcn/ui components
├── features/          # Core functionality
│   └── leads/         # Lead management
├── services/          # API and hooks
├── schemas/           # Zod validation schemas
└── providers/         # Context providers
```

## Features

### Lead Management
- Add new leads
- Update lead status
- View lead details
- Search and filter leads

### Search and Filter
- Search by lead name and email
- Filter by status
- Display result count

### UI/UX
- Modern and beautiful interface
- Responsive design
- Dark/Light theme mode
- Animations and transitions

## API

The project uses JSONPlaceholder API:
- `GET /users` - Fetch leads

## Author

- [Shokhabbos](https://github.com/Shokhabbos)

## License

MIT
