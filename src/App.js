import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import BlankPage from './pages/BlankPage';
import Note from './pages/note/Note';
import Login from './pages/login/Login';
import Product from './pages/product/Product';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/login' element={<Login />} />
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/apps/notes' element={<Note />} />
                    <Route path='/apps/chat' element={<BlankPage />} />
                    <Route path='/apps/contacts' element={<BlankPage />} />
                    <Route path='/product' element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
