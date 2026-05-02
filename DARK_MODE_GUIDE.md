# Dark/Light Mode Implementation Guide

## Overview

The ClothTheory project now has a fully functional dark/light mode system with persistent user preferences. The implementation uses Next.js, Tailwind CSS, and a custom React Context for theme management.

## Features

✅ **Toggle Button** - Click the sun/moon icon in the navbar to switch themes
✅ **Persistent Storage** - Theme preference is saved to localStorage
✅ **System Preference Detection** - First-time visitors get their system theme
✅ **Smooth Transitions** - Color transitions are animated for better UX
✅ **No Hydration Issues** - Properly handles Next.js hydration warnings
✅ **Complete Coverage** - All components support both themes

## Architecture

### 1. Theme Context (`/contexts/ThemeContext.tsx`)

The `ThemeContext` component manages the global theme state using React Context API.

**Key Features:**
- `theme` - Current theme ('light' or 'dark')
- `toggleTheme()` - Function to switch between themes
- `useTheme()` - Hook to access theme in any component

**How it works:**
```typescript
// Usage in any component
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

**Initialization:**
- Checks localStorage for saved theme preference
- Falls back to system preference via `prefers-color-scheme` media query
- Applies the theme by adding/removing 'dark' class to html element
- Prevents hydration mismatches by waiting for client mount

### 2. Layout Root (`/app/layout.tsx`)

The root layout wraps the entire application with the `ThemeProvider`.

**Changes Made:**
- Added `suppressHydrationWarning` to the `<html>` tag
- Wrapped `{children}` with `<ThemeProvider>`
- Updated body classes to use dynamic theme colors:
  ```jsx
  <body className="bg-light dark:bg-dark text-light dark:text-dark transition-colors duration-300">
  ```

### 3. Tailwind CSS Configuration

Updated `tailwind.config.ts` to enable class-based dark mode strategy:

```typescript
darkMode: 'class',  // Enable dark mode with class strategy
```

Added custom color definitions for dark mode:
```typescript
colors: {
  'light': '#F5F0E8',      // Light mode background
  'light-secondary': '#FDF8F2',
  'dark': '#1A1714',       // Dark mode background
  'dark-secondary': '#2C2416',
},
```

### 4. Global Styles (`/app/globals.css`)

CSS variables are used for flexible theming:

**Light Mode (Default):**
```css
:root {
  --bg: #F5F0E8;
  --fg: #2C2416;
  --border: #D9CEBF;
  --accent-gold: #C17F4A;
}
```

**Dark Mode:**
```css
html.dark {
  --bg: #1A1714;
  --fg: #EDE8DC;
  --border: #3A3228;
  --accent-gold: #D4956E;  /* Lighter gold for dark mode */
}
```

### 5. Component Updates

All major components have been updated with dark mode support:

**Navbar.tsx:**
- Conditionally shows sun/moon icons based on current theme
- Uses `dark:` Tailwind variants for styling
- Calls `toggleTheme()` on button click

**Hero.tsx, Footer.tsx, PanelsGrid.tsx:**
- Updated background colors: `bg-light dark:bg-dark`
- Updated text colors: `text-light dark:text-dark`
- Updated text variants: `text-light-muted dark:text-dark-muted`
- Updated borders: `border-light dark:border-dark`

## Color Palette

### Light Mode
| Element | Color | Hex |
|---------|-------|-----|
| Background | Warm Beige | #F5F0E8 |
| Text | Text Dark | #2C2416 |
| Text Muted | Text Muted | #7A6A55 |
| Border | Border Light | #D9CEBF |
| Accent | Warm Accent | #C17F4A |

### Dark Mode
| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark | #1A1714 |
| Background Secondary | Dark Secondary | #2C2416 |
| Text | Dark | #EDE8DC |
| Text Muted | Dark Muted | #B5A997 |
| Border | Dark Border | #3A3228 |
| Accent | Warm Accent (Lighter) | #D4956E |

## Usage in Components

### Using Tailwind Dark Mode Classes

```jsx
// Simple dark mode support
<div className="bg-light dark:bg-dark text-light dark:text-dark">
  Content
</div>

// With transitions
<button className="bg-light dark:bg-dark transition-colors duration-300">
  Click me
</button>

// Nested conditions
<div className="bg-light-secondary dark:bg-dark-secondary border border-light dark:border-dark">
  Nested content
</div>
```

### Using CSS Variables

```css
/* In any CSS file */
body {
  background: var(--bg);
  color: var(--fg);
  border-color: var(--border);
}

html.dark {
  --bg: #1A1714;
  --fg: #EDE8DC;
}
```

### Using useTheme Hook

```jsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}
```

## Adding Dark Mode to New Components

1. **Import the theme hook (if needed):**
   ```jsx
   import { useTheme } from '@/contexts/ThemeContext';
   ```

2. **Use dark: variant classes:**
   ```jsx
   <div className="bg-light dark:bg-dark text-light dark:text-dark">
     Your content
   </div>
   ```

3. **For conditional rendering:**
   ```jsx
   const { theme } = useTheme();
   
   {theme === 'dark' && <DarkModeSpecificComponent />}
   {theme === 'light' && <LightModeSpecificComponent />}
   ```

4. **For animations with theme awareness:**
   ```jsx
   const bgColor = theme === 'dark' ? '#1A1714' : '#F5F0E8';
   
   <motion.div
     animate={{ backgroundColor: bgColor }}
   >
     Content
   </motion.div>
   ```

## localStorage Persistence

Theme preference is automatically saved to `localStorage` under the key `'theme'`:

```javascript
// The app automatically handles this, but here's what happens:
localStorage.setItem('theme', 'dark');  // When user toggles to dark

// On next visit, the saved preference is restored:
const savedTheme = localStorage.getItem('theme');  // Returns 'dark'
```

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Respects `prefers-color-scheme` media query
- ✅ Graceful fallback for older browsers
- ✅ No JavaScript errors in unsupported environments

## Performance Considerations

1. **CSS Variables**: Minimal performance impact, updated instantly
2. **Class-based Dark Mode**: No CSS duplication, small bundle size
3. **Transitions**: Set to 300ms for smooth but snappy changes
4. **localStorage**: Checked only on first mount, negligible impact

## Troubleshooting

### Dark mode not working?
1. Check if `ThemeProvider` is wrapping the app in `layout.tsx`
2. Verify `darkMode: 'class'` is set in `tailwind.config.ts`
3. Clear browser cache and localStorage
4. Check browser console for errors

### Hydration warnings?
- The `suppressHydrationWarning` in `<html>` tag prevents these
- `ThemeProvider` waits for client-side mount before rendering

### Theme not persisting?
- Check if localStorage is enabled in browser
- Clear localStorage: `localStorage.clear()`
- Ensure `useTheme()` is used inside `ThemeProvider`

### Colors look wrong?
- Verify color values in `tailwind.config.ts`
- Check `globals.css` for CSS variable definitions
- Inspect element to see which classes are applied

## Future Enhancements

1. **Three Themes**: Add a 'sepia' or 'high-contrast' theme option
2. **Theme Transitions**: Smooth color gradient transitions
3. **System Sync**: Auto-switch based on time of day
4. **Theme Analytics**: Track user theme preferences
5. **Accessibility**: Respect `prefers-reduced-motion` setting

## Files Modified

- ✅ `/contexts/ThemeContext.tsx` - New theme context
- ✅ `/app/layout.tsx` - Theme provider wrapper
- ✅ `/app/globals.css` - CSS variables for dark mode
- ✅ `/tailwind.config.ts` - Dark mode configuration
- ✅ `/components/Navbar.tsx` - Theme toggle button
- ✅ `/components/Hero.tsx` - Dark mode colors
- ✅ `/components/Footer.tsx` - Dark mode colors
- ✅ `/components/PanelsGrid.tsx` - Dark mode colors

## Summary

The dark/light mode system is fully integrated and ready to use. Simply add `dark:` variants to your Tailwind classes for any new components, and the theme will automatically apply based on the user's selection. The system is performant, accessible, and maintains persistence across sessions.
