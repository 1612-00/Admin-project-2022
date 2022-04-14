import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import BlankPage from './pages/BlankPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Dashboard />} />
                    <Route path='/apps/notes' element={<BlankPage />} />
                    <Route path='/apps/chat' element={<BlankPage />} />
                    <Route path='/apps/contacts' element={<BlankPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
