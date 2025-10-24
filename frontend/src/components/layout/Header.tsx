import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Header() {
    return (
        <header className="w-full p-6 sm:p-8 border-b bg-card text-foreground">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                { }
                <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                    Gustavo Crisosth
                </a>

                { }
                <div className="flex items-center gap-4 sm:gap-6">
                    <a
                        href="https://github.com/GustavoCrisosth"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gustavocrisosth" // Link curto
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:crisosth.gustavo2000@gmail.com"
                        title="Email"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail size={24} />
                    </a>
                    <a
                        href="tel:+5591993844434"
                        title="Celular"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone size={24} />
                    </a>
                </div>
            </nav>
        </header>
    )
}