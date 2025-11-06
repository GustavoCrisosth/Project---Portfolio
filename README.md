Portfólio Full-Stack (Node.js, React & Docker)

Este é o repositório do meu portfólio pessoal, um projeto Full-Stack completo construído para demonstrar minhas habilidades em desenvolvimento de software, arquitetura de nuvem e DevOps.

O projeto foi totalmente containerizado com Docker para desenvolvimento local e publicado em uma arquitetura multi-cloud (Vercel, Render e Aiven).


Sobre o Projeto:
O objetivo deste projeto é ir além de um simples site estático. Criei uma aplicação completa que inclui:

Um frontend moderno em React, apresentando meus projetos e competências.

Um backend (API) em Node.js que "guarda" a página de projetos.

Um sistema de validação de visitantes onde um usuário deve fornecer nome e email para ver meus projetos.

Esses dados são validados e armazenados de forma persistente em um banco de dados MySQL na nuvem.


🏗️ Arquitetura e Deploy:
Para este projeto, utilizei uma arquitetura de serviços distribuídos, demonstrando o uso de plataformas "Platform as a Service" (PaaS) e "Database as a Service" (DBaaS):

Frontend (React): O deploy foi feito na Vercel, garantindo performance global e CI/CD automático a cada git push.

Backend (Node.js API): A API está rodando na Render (Web Service), configurada para se conectar com segurança ao banco de dados.

Banco de Dados (MySQL): O banco é uma instância gerenciada no Aiven, garantindo segurança, escalabilidade e um firewall configurado.

Para o desenvolvimento local, todo o ambiente (Frontend, Backend e Banco de Dados) é 100% gerenciado pelo Docker Compose.


✨ Funcionalidades:
Homepage: Apresentação "Sobre Mim", links sociais, competências e certificados (links diretos para os PDFs).

Validação de Visitantes: Um modal (Dialog) que captura o nome e email do usuário.

Conexão Backend: O formulário envia os dados para a API na Render.

Persistência de Dados: A API valida os dados (Zod) e os salva no banco MySQL (Aiven) usando Sequelize.

Roteamento: Após a validação, o usuário é redirecionado para a página de projetos.

Galeria de Projetos: Cards que exibem meus projetos com links para o site no ar (demo) e para o repositório do código (GitHub).


Rodando o Projeto Localmente:
Qualquer pessoa pode rodar este projeto completo com um único comando, graças ao Docker.

Pré-requisitos:
Docker

Git


Passos:
Clone o repositório

Bash

git clone https://github.com/GustavoCrisosth/Project---Portfolio.git
cd portfolio-gustavo-crisosth
Suba os containers: (Este comando irá construir as imagens e iniciar o frontend, o backend e o banco de dados)

Bash

docker-compose up --build


Acesse as aplicações:

Frontend (Site): http://localhost:5173

Backend (API): http://localhost:3000

Banco de Dados (MySQL):

Host: localhost

Porta: 3307 (mapeada no docker-compose.yml)

Usuário: gustavo

Senha: gustavopass

Database: portfolio_db


👨‍💻 Autor
Gustavo Crisosth Furtado Mendonça

LinkedIn: linkedin.com/in/gustavocrisosth

GitHub: @GustavoCrisosth
