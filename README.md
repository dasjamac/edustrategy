# EducationStrategy

Русскоязычный лендинг и карьерный квиз, помогающий русскоговорящим студентам выбирать
европейские университетские программы (Бельгия, Нидерланды, Франция) с прицелом на
будущую карьеру в Европе.

## Стек

- **Vite** (плагин React SWC)
- **React 18 + TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** — анимации
- **React Router** — маршрутизация
- **TanStack Query**, **react-hook-form** + **zod**

## Разработка

Требуется [Bun](https://bun.sh) (или Node.js + npm).

```sh
# Установить зависимости
bun install

# Запустить dev-сервер (http://localhost:8080)
bun run dev

# Продакшн-сборка
bun run build

# Линтинг
bun run lint

# Тесты
bun run test
```

## Структура

```
src/
├── pages/            # Index (лендинг), Quiz (карьерный квиз), NotFound
├── components/
│   ├── landing/      # Секции лендинга (Header, Hero, Services, ...)
│   └── ui/           # Компоненты shadcn/ui
├── hooks/            # Кастомные хуки
├── lib/              # Утилиты
└── index.css         # Дизайн-система (HSL CSS-переменные)
```

Алиас путей: `@/` → `./src/`.

## Маршруты

- `/` — лендинг (`src/pages/Index.tsx`)
- `/quiz` — карьерный квиз (`src/pages/Quiz.tsx`)

## Язык

Весь пользовательский контент — на русском. Код, комментарии и имена компонентов — на английском.
