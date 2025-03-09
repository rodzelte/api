import AuthForms from "./components/auth";
import { ModeToggle } from "./components/ui/mode-toggle";
import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./Layout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout>
          <ModeToggle />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
