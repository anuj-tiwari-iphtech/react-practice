# React `useRef`

The `useRef` Hook lets you store a mutable value that persists across renders **without causing a re-render**. It is also used to access DOM elements directly.

## Topics Covered

- What is `useRef`?
- Access DOM Elements
- Store Mutable Values
- `useRef` vs `useState`
- Persist Values Without Re-render

## Practice

- Auto Focus Input
- Stopwatch
- Previous Value
- Scroll to Section
- Click Counter Without Re-render

## Key Points

- Stores mutable values using `ref.current`
- Persists values between renders
- Does **not** trigger a re-render when updated
- Commonly used for DOM manipulation, timers, and previous values

## Syntax

```jsx
const ref = useRef(initialValue);
```

## When to Use

- Access DOM elements
- Focus inputs
- Store interval/timer IDs
- Track previous values
- Store values without re-rendering

---
## Technologies Used

- React
- JavaScript (ES6+)
- JSX

## Getting Started

```bash
git clone https://github.com/anuj-tiwari-iphtech/react-practice.git
```

### Navigate to the project folder

```bash
cd useRef
```


1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

or, if using Create React App:

```bash
npm start
```


