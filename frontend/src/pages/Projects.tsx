import { Header } from "@/components/layout/Header";

const projectList = [
    {
        name: "Projeto API de Vendas",
        description: "API robusta em Node.js com Sequelize para gerenciamento de clientes, produtos e compras.",
        link: "https://github.com/GustavoCrisosth/projeto-api"
    },
    {
        name: "Portfólio Pessoal (Este Site!)",
        description: "Site full-stack com React, Tailwind, shadcn/ui e Node.js para validação de visitantes.",
        link: "#"
    },
    {
        name: "Sistema de CRUD Antigo",
        description: "Aplicação PHP e React para um teste prático, demonstrando habilidades full-stack.",
        link: "https://github.com/GustavoCrisosth/outro-projeto"
    },
];

export function Projects() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            { }
            <Header />

            { }
            <main className="max-w-7xl mx-auto p-6 sm:p-12">
                <h1 className="text-4xl font-bold text-primary mb-10">
                    Meus Projetos
                </h1>

                { }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project) => (
                        <div
                            key={project.name}
                            className="bg-card border rounded-lg p-6 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold hover:text-primary transition-colors hover:underline"
                                >
                                    {project.name}
                                </a>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    {project.description}
                                </p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary font-medium mt-6 inline-block hover:underline"
                            >
                                Ver no GitHub &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}