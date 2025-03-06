import AuthForms from "./components/auth";
import { ModeToggle } from "./components/ui/mode-toggle";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthForms></AuthForms>
      </ThemeProvider>
    </>
  );
}

export default App;
