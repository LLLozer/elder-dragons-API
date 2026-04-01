import { Navigate, Route, Routes } from "react-router";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
