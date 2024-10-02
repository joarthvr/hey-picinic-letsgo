import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import ListPage from '../pages/ListBySearch';
import MyPage from '../pages/MyPage';
import Detail from '../pages/Detail';
const CommonRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<ListPage />} />
        <Route path="/accommodation" element={<ListPage />} />
        <Route path="/attractions" element={<ListPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
};
export default CommonRouter;
