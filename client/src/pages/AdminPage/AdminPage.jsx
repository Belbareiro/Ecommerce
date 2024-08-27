import React, { useState, useEffect } from 'react';
import CargarProductos from '../CargarProductos';
import ProductList from '../ProductList/ProductList';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = (props) => {
    const [productos, setProductos] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/auth/check', {
                    
                    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
                });
                setIsAuthenticated(response.data.isAuthenticated);
                console.log("URL de autenticación:", url);
            } catch (error) {
                console.error('Error al verificar autenticación:', error);
            }
        };
        checkAuth();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get('http://localhost:5002/api/products');
                    setProductos(response.data);
                } catch (error) {
                    console.error('Error al obtener los productos:', error);
                }
            };
            fetchProducts();
        }
    }, [isAuthenticated]);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5002/api/auth/login', { email, password });
            localStorage.setItem('authToken', response.data.token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5002/api/auth/register', { companyName, email, password });
            setIsRegistering(false);
        } catch (error) {
            console.error('Error al registrarse:', error);
        }
    };

    const actualizarListaProductos = (nuevoProducto) => {
        setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
    };

    return (
        <div>
            <h1>Página de Administrador</h1>
            {!isAuthenticated ? (
                <div>
                    {isRegistering ? (
                        <form onSubmit={handleRegister}>
                            <h2>Registro</h2>
                            <div>
                                <label>Nombre de la empresa:</label>
                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                            </div>
                            <div>
                                <label>Correo:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <label>Contraseña:</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button type="submit">Registrar</button>
                            <button type="button" onClick={() => setIsRegistering(false)}>Ya tienes cuenta? Inicia sesión</button>
                        </form>
                    ) : (
                        <form onSubmit={handleLogin}>
                            <h2>Iniciar sesión</h2>
                            <div>
                                <label>Correo:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <label>Contraseña:</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button type="submit">Iniciar sesión</button>
                            <button type="button" onClick={() => setIsRegistering(true)}>¿No tienes cuenta? Regístrate</button>
                        </form>
                    )}
                </div>
            ) : (
                <div>
                    <CargarProductos actualizarListaProductos={actualizarListaProductos} />
                    <ProductList productos={productos} />
                </div>
            )}
        </div>
    );
};

export default AdminPage;
