
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

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  defaultBrandColors?: Partial<BrandColors>;
}

const DEFAULT_BRAND_COLORS: BrandColors = {
  primary: "#1a1f2c",
  secondary: "#9b87f5",
  accent: "#6E59A5"
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultBrandColors = DEFAULT_BRAND_COLORS,
}: ThemeProviderProps) {
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
    
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const setBrandColors = (colors: Partial<BrandColors>) => {
    const newColors = { ...brandColors, ...colors };
    setBrandColorsState(newColors);
    localStorage.setItem("brandColors", JSON.stringify(newColors));
    
    // Update CSS variables
    const root = window.document.documentElement;
    Object.entries(newColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };
  
  // Initialize CSS variables
  useEffect(() => {
    const root = window.document.documentElement;
    Object.entries(brandColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [brandColors]);

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
