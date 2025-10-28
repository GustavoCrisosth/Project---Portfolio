import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    Award,
    Code,
    Star
} from "lucide-react"


const skills = [
    { name: "Node.js", icon: <Code size={20} /> },
    { name: "React", icon: <Code size={20} /> },
    { name: "TypeScript", icon: <Code size={20} /> },
    { name: "PHP", icon: <Code size={20} /> },
    { name: "Tailwind CSS", icon: <Code size={20} /> },
    { name: "Sequelize", icon: <Star size={20} /> },
    { name: "MySQL", icon: <Star size={20} /> },
    { name: "Express", icon: <Star size={20} /> },
];

const certificates = [
    { name: "Certificação Full Stack X", link: "#", emitter: "Emitido por Empresa Y" },
    { name: "Imersão React Z", link: "#", emitter: "Emitido por Plataforma A" },
];


export function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !email) {
            alert("Por favor, preencha nome e email.");
            return;
        }

        setIsLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/validate-visitor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {

                navigate('/projetos');
            } else {

                const errorData = await response.json();
                alert(`Erro ao validar: ${errorData.message}`);
            }
        } catch (error) {

            console.error("Erro de fetch:", error);
            alert("Não foi possível conectar ao servidor. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="flex flex-col md:flex-row bg-background text-foreground">
            <aside className="md:w-2/5 md:h-screen md:sticky md:top-0 flex justify-center items-center p-6 sm:p-10 bg-card">
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-sm">
                    <img
                        src="/profile.jpg"
                        alt="Foto de Gustavo Crisosh"
                        className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-md"
                    />
                    <h1 className="text-3xl font-bold mt-6">
                        Gustavo Crisosth
                    </h1>
                    <p className="text-muted-foreground mt-1">Engenheiro de Software</p>
                    <div className="flex flex-col gap-3 mt-8">
                        <a
                            href="https://github.com/GustavoCrisosth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github size={18} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gustavocrisosth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:crisosth.gustavo2000@gmail.com"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail size={18} />
                            <span>Email</span>
                        </a>
                        <a
                            href="tel:+55 (91)99384-4434"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Phone size={18} />
                            <span>Celular</span>
                        </a>
                    </div>
                </div>
            </aside>
            <main className="md:w-3/5 min-h-screen p-6 sm:p-12 md:py-24">
                <section className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-primary">
                        Sobre mim
                    </h2>
                    <p className="mt-6 text-muted-foreground leading-relaxed">
                        Olá! Eu sou Gustavo Crisosth Furtado Mendonça,
                        um Engenheiro de Software de 25 anos apaixonado por construir soluções digitais completas e de alta performance.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        Como Desenvolvedor Fullstack, meu foco é criar aplicações web modernas. No backend,
                        minha principal ferramenta é o Node.js com TypeScript, onde projeto e construo APIs RESTful robustas,
                        integro com bancos de dados (como MySQL e PostgreSQL) usando ORMs como o Sequelize e implemento sistemas de autenticação seguros.

                        No frontend, eu transformo essas APIs em experiências de usuário envolventes e responsivas usando React.js.
                        Tenho experiência em criar interfaces limpas e modernas, utilizando ferramentas como Tailwind CSS e shadcn/ui.

                        Minha formação em Engenharia de Software me deu uma base sólida em arquitetura de sistemas, código limpo e boas práticas.
                        Além disso, tenho experiência prática em DevOps, utilizando Docker para containerizar aplicações e fazer o deploy em plataformas de nuvem como Render e Vercel.

                        Estou sempre em busca de novos desafios para aplicar minha criatividade e meu conhecimento técnico,
                        transformando ideias complexas em software funcional e escalável.
                    </p>
                </section>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg" className="mt-10">
                            Ver Meus Projetos
                        </Button>
                    </DialogTrigger>

                    { }
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={handleSubmit}>
                            <DialogHeader>
                                <DialogTitle>Acesso aos Projetos</DialogTitle>
                                <DialogDescription>
                                    Para acessar minha galeria de projetos, por favor,
                                    informe seu nome e email.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Nome
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Seu nome"
                                        className="col-span-3"

                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu.email@dominio.com"
                                        className="col-span-3"

                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <DialogFooter>
                                { }
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Validando..." : "Validar e Acessar"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                { }
                <section className="max-w-3xl mt-20">
                    <h2 className="text-3xl font-bold text-primary">
                        Competências e Habilidades
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-3 p-4 rounded-lg border bg-card shadow-sm"
                            >
                                {skill.icon}
                                <span className="font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-3xl mt-20 mb-20">
                    <h2 className="text-3xl font-bold text-primary">
                        Certificados
                    </h2>
                    <div className="flex flex-col gap-4 mt-8">
                        {certificates.map((cert) => (
                            <a
                                key={cert.name}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg border bg-card shadow-sm hover:border-primary transition-colors group"
                            >
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <Award size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold group-hover:underline">{cert.name}</h3>
                                    <p className="text-sm text-muted-foreground">{cert.emitter}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    )
}