import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};
