import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
