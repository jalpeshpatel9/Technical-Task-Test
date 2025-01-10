import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, resetMessages } from '../features/auth/authSlice';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error, successMessage } = useSelector((state) => state.auth);

    // Clear messages when the page loads or after successful registration
    useEffect(() => {
        dispatch(resetMessages());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
    };

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

            {/* Success message */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            
            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            <div className="lgRgLink">
                <a href="/login">Already have an account? Login here</a>
            </div>
        </div>
    );
};

export default RegisterPage;
