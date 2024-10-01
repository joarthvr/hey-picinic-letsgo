import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import FestivalList from '../pages/FestivalList';
const CommonRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<FestivalList />} />
        <Route path="/accommodation" element={<Home />} />
        <Route path="/attractions" element={<Home />} />
        <Route path="/mypage" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default CommonRouter;
