import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <ModeToggle />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RegisterPage />
      </ThemeProvider>
    </>
  );
}

export default App;
