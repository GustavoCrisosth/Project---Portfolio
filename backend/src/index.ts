import express, { Request, Response } from 'express';
import cors from 'cors';
import { z, ZodError } from 'zod';
import sequelize, { testConnection } from './config/database';
import Visitor from './models/Visitor';

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


const visitorSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
    email: z.string().email({ message: "Email inválido." }),
});


app.post('/api/validate-visitor', async (req: Request, res: Response) => {
    try {

        const { name, email } = visitorSchema.parse(req.body);


        const [visitor, created] = await Visitor.findOrCreate({
            where: { email: email },
            defaults: { name: name }
        });

        if (created) {
            console.log(`[server]: Novo visitante registrado: ${visitor.name}`);
        } else {
            console.log(`[server]: Visitante recorrente: ${visitor.name}`);
        }


        res.status(200).json({ message: 'Validação bem-sucedida!' });

    } catch (error) {

        if (error instanceof ZodError) {
            return res.status(400).json({
                message: 'Dados inválidos.',
                errors: error.flatten().fieldErrors,
            });
        }


        if (error instanceof Error && error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: 'Email já cadastrado.' });
        }


        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});


app.listen(port, async () => {
    console.log(`[server]: Backend rodando em http://localhost:${port}`);


    await testConnection();


    try {
        await sequelize.sync();

        console.log('[database]: Tabela de visitantes sincronizada.');
    } catch (error) {
        console.error('[database]: Erro ao sincronizar tabelas:', error);
    }
});