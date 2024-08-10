import { useTheme } from "next-themes";

export default function ThemeToggle() {

 const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 bg-gray-200 rounded dark:bg-gray-800"
    >
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
}
