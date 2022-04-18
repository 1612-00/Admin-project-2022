import { createContext, useReducer } from 'react';
import { AuthReducer } from './../reducers/AuthReducer';
import { SET_AUTH } from './constant';

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Authenticated User
    // const loadUser = /*async*/ (user) => {
    //     if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
    //       setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    //     }

    //     try {
    //           const res = await axios.get(`${apiUrl}/user`);

    //           if (res.data.success) {
    //         dispatch({
    //             type: SET_AUTH,
    //             payload: {
    //                 isAuthenticated: true,
    //                 user: /*res.data.user*/ user,
    //             },
    //         });
    //           }
    //     } catch (error) {
    //           localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    //           setAuthToken(null);
    //         dispatch({
    //             type: SET_AUTH,
    //             payload: {
    //                 isAuthenticated: false,
    //                 user: null,
    //             },
    //         });
    //     }
    // };

    // useEffect(() => loadUser(), []);

    // Login
    const loginUser = /*async*/ (user) => {
        try {
            // const { username, password } = user;
            // console.log(username);
            // if (
            //   username.includes("'") ||
            //   password.includes("'") ||
            //   username.includes('"') ||
            //   password.includes('"')
            // )
            //   return { success: false };

            //   const res = await axios.post(`${apiUrl}/user/login`, user);
            //   if (res.data.success) {
            //     localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken);
            //   }

            const checkLogin =
                user.username === 'admin' && user.password === 'admin123'
                    ? true
                    : false;

            if (checkLogin)
                dispatch({
                    type: SET_AUTH,
                    payload: {
                        isAuthenticated: true,
                        user: /*res.data.user*/ user,
                    },
                });
            return /*res.data*/ checkLogin;
        } catch (error) {
            // if (error.response.data) return error.response.data;
            // else return { success: false, message: error.message };
            dispatch({
                type: SET_AUTH,
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
            return false;
        }
    };

    // Register
    // const registerUser = async (user) => {
    //     try {
    //         const res = await axios.post(`${apiUrl}/user/register`, user);
    //         if (res.data.success) {
    //             localStorage.setItem(
    //                 LOCAL_STORAGE_TOKEN_NAME,
    //                 res.data.accessToken
    //             );
    //         }

    //         loadUser();
    //         return res.data;
    //     } catch (error) {
    //         if (error.response.data) return error.response.data;
    //         else return { success: false, message: error.message };
    //     }
    // };

    // Logout
    const logout = async () => {
        // localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        dispatch({
            type: SET_AUTH,
            payload: {
                isAuthenticated: false,
                user: null,
            },
        });
    };

    const AuthContextData = { state, loginUser, /*registerUser,*/ logout };

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
