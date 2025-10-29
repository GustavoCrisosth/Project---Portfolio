import { Header } from "@/components/layout/Header";
import { Github } from "lucide-react";

const projectList = [
    {
        name: "Portfólio Pessoal (Este Site!)",
        description: "Site full-stack com React, Tailwind, shadcn/ui e Node.js para validação e deploy na Vercel/Render.",
        linkLive: "https://project-portfolio-ruddy-one.vercel.app/",
        linkRepo: "https://github.com/GustavoCrisosth/Project---Portfolio.git"
    },
    {
        name: "Projeto API de Vendas",
        description: "API robusta em Node.js com Sequelize para gerenciamento de clientes, produtos e compras.",
        linkLive: "https://crud-node-js-type-script.vercel.app/",
        linkRepo: "https://github.com/GustavoCrisosth/Crud-NodeJS-TypeScript.git"
    },
    /*{
        name: "Sistema de CRUD Antigo",
        description: "Aplicação PHP e React para um teste prático, demonstrando habilidades full-stack.",
        linkLive: null,
        linkRepo: "https://github.com/GustavoCrisosth/outro-projeto"
    },*/
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
                            className="bg-card border rounded-lg p-6 shadow-sm flex flex-col"
                        >
                            { }
                            <div className="flex-grow">
                                { }
                                <a
                                    href={project.linkLive || project.linkRepo}
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

                            { }
                            <div className="flex justify-between items-center mt-6">
                                { }
                                {project.linkLive ? (
                                    <a
                                        href={project.linkLive}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary font-medium hover:underline"
                                    >
                                        Ver projeto no ar &rarr;
                                    </a>
                                ) : (


                                    <div />
                                )}

                                { }
                                <a
                                    href={project.linkRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Ver código no GitHub"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}