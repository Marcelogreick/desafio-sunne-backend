import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/login", (request: Request, response: Response) => {
    const {email, password} = request.body;

    const user = {
        id: 1,
        email: "marcelo@gmail.com",
        password: "123456",
    }

    if(email !== user.email) {
        return response.status(400).json({ error: "Usuario Inválido" });
    }

    if(password !== user.password) {
        return response.status(400).json({ error: "Senha Inválida" });
    } else {
        return response.json(user);
    }
})

export default router;