import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';
import PrivateChat from './pages/PrivateChat';
import NotFound from './pages/NotFound';
import './index.css'

function App() { 

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/chat/:userId" element={<PrivateChat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
