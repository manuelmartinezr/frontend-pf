
import "./App.css";
import { useEffect } from "react";
import { AuthenticatorProvider } from "./contexts/Authenticator";
import Root from "./pages/root";
import { pageview } from "./lib/ga";

function App() {
  useEffect(() => {
    pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <AuthenticatorProvider>
      <Root />
    </AuthenticatorProvider>
  )
}

export default App
