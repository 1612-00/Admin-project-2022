import React, { useRef, useContext, useState } from 'react';
import Register from './../register/Register';
import './login.scss';
import NotificationDialog from './../../components/notificationDialog/NotificationDialog';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthContext';
import { Box, CircularProgress } from '@mui/material';

const Login = () => {
    const username = useRef();
    const password = useRef();

    // Auth Context
    const {
        state: { isLoading, isAuthenticated },
        loginUser,
    } = useContext(AuthContext);

    // Handle register
    const [open, setOpen] = useState(false);
    const [openErrDialog, setOpenErrDialog] = useState(false);

    const handleCloseRegisterModal = () => {
        setOpen(false);
    };

    const handleOpenRegisterModal = () => {
        setOpen(true);
    };

    const handleOpenErrModal = () => {
        setOpenErrDialog(true);
    };

    const handleCloseErrModal = () => {
        setOpenErrDialog(false);
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const user = {
            username: username.current.value,
            password: password.current.value,
        };

        try {
            const loginData = loginUser(user);
            if (!loginData) {
                handleOpenErrModal();
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) {
        return (
            <Box className='spinner'>
                <CircularProgress />
            </Box>
        );
    } else if (isAuthenticated) {
        return <Navigate to='/' />;
    } else
        return (
            <div className='login'>
                <div className='login__wrapper'>
                    <div className='login__wrapper__left'>
                        <span className='login__wrapper__left__text'>
                            Login
                        </span>
                        <span className='login__wrapper__left__sub'>
                            Login to use more utilities
                        </span>
                    </div>
                    <div className='login__wrapper__right'>
                        <form
                            className='login__wrapper__right__form'
                            onSubmit={handleSubmitForm}
                        >
                            <input
                                type='text'
                                className='login__wrapper__right__form__input'
                                placeholder='Username'
                                required
                                ref={username}
                            />
                            <input
                                type='password'
                                className='login__wrapper__right__form__input'
                                placeholder='Password'
                                minLength='6'
                                required
                                ref={password}
                            />
                            <button
                                type='submit'
                                className='login__wrapper__right__form__btn'
                            >
                                Submit
                            </button>
                        </form>
                        <div
                            className='login__wrapper__right__create-account'
                            onClick={handleOpenRegisterModal}
                        >
                            <span className='login__wrapper__right__create-account__text'>
                                Create an account ?
                            </span>
                        </div>
                        <Register
                            open={open}
                            handleClose={handleCloseRegisterModal}
                        />
                        <NotificationDialog
                            status='error'
                            open={openErrDialog}
                            handleClose={handleCloseErrModal}
                            content='Wrong account or password'
                        />
                    </div>
                </div>
            </div>
        );
};

export default Login;
