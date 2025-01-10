import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetMessages } from '../features/auth/authSlice';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error, successMessage } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(resetMessages());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>

            {/* Success message */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            
            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            <div className="lgRgLink">
                <a href="/register">Don't have an account? Register here</a>
            </div>
        </div>
    );
};

export default LoginPage;
