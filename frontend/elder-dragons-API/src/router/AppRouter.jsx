import { Navigate, Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { MonsterRegister } from "../pages/MonsterRegister";
import { MonsterUpdate } from "../pages/MonsterUpdate";
import { MonsterDelete } from "../pages/MonsterDelete";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register-monster" element={<MonsterRegister />} />
      <Route path="/update-monster" element={<MonsterUpdate />} />
      <Route path="/delete-monster" element={<MonsterDelete/>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
