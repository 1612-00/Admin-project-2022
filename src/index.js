import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoteContextProvider from './contexts/NoteContext';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeContextProvider>
                <NoteContextProvider>
                    <App />
                </NoteContextProvider>
            </ThemeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
