const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Para manejar el token JWT

// Ruta para verificar la autenticación
router.get('/check', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ isAuthenticated: false, message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, 'tu_secreto'); // Asegúrate de que 'tu_secreto' coincida con el utilizado para firmar el token
        return res.json({ isAuthenticated: true });
    } catch (error) {
        return res.status(401).json({ isAuthenticated: false, message: 'Token no válido' });
    }
});

// Ruta para el login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Aquí debes validar las credenciales y generar un token si son correctas
    const token = jwt.sign({ email }, 'tu_secreto', { expiresIn: '1h' }); // Genera un token JWT
    res.json({ token });
});

// Ruta para el registro
router.post('/register', (req, res) => {
    const { companyName, email, password } = req.body;
    // Aquí debes registrar al usuario en la base de datos
    res.json({ message: 'Usuario registrado con éxito' });
});

module.exports = router;
