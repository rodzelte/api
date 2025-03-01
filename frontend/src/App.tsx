import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { ProfileForm } from "./components/auth/RegisterForm";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="min-h-screen bg-background text-foreground">
        <ModeToggle></ModeToggle>
        <ProfileForm></ProfileForm>
      </div>
    </ThemeProvider>
  );
}
