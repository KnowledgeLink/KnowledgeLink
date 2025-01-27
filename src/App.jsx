import Counselling from './pages/Counselling'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Overseas from './pages/OverSeas';
import CrashCourse from './pages/CrashCourse';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<Landing />}></Route>
        <Route path="/counselling" exact element={<Counselling />} ></Route>
        <Route path="/overseas" exact element={<Overseas />} ></Route>
        <Route path="/crashcourse" exact element={<CrashCourse />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
