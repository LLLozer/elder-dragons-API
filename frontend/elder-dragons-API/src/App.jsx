import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ElementsProvider } from "./components/ElementsContext";

export const App = () => {
  return (
    <BrowserRouter>
      <ElementsProvider>
        <Header />
        <Navbar />
        <AppRouter />
      </ElementsProvider>
    </BrowserRouter>
  );
};
