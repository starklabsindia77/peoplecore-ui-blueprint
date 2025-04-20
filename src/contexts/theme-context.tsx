
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type BrandColors = {
  primary: string;
  secondary: string;
  accent: string;
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  brandColors: BrandColors;
  setBrandColors: (colors: Partial<BrandColors>) => void;
}

const DEFAULT_BRAND_COLORS: BrandColors = {
  primary: "#9b87f5",  // Soft Purple
  secondary: "#7E69AB", // Muted Purple
  accent: "#1A1F2C"     // Dark Charcoal
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultBrandColors = DEFAULT_BRAND_COLORS,
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  defaultBrandColors?: Partial<BrandColors>;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme || defaultTheme;
  });
  
  const [brandColors, setBrandColorsState] = useState<BrandColors>(() => {
    const savedColors = localStorage.getItem("brandColors");
    return savedColors ? JSON.parse(savedColors) : { ...DEFAULT_BRAND_COLORS, ...defaultBrandColors };
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Apply theme class
    root.classList.remove("light", "dark");
    
    const effectiveTheme = theme === "system" 
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;
    
    root.classList.add(effectiveTheme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const setBrandColors = (colors: Partial<BrandColors>) => {
    const newColors = { ...brandColors, ...colors };
    setBrandColorsState(newColors);
    localStorage.setItem("brandColors", JSON.stringify(newColors));
    
    // Update CSS variables dynamically
    const root = window.document.documentElement;
    Object.entries(newColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, brandColors, setBrandColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
