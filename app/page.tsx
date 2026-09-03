const projectTech = ["React 19", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Vercel", "Git & GitHub", "PWA / Web Push"];
const features = [
  ["01", "Agendamento online", "Serviços, datas e horas com disponibilidade real."],
  ["02", "Área da cliente", "Acesso, perfil e histórico de agendamentos."],
  ["03", "Painel administrativo", "Agendamentos, clientes, financeiro, mensagens WhatsApp automáticas."],
  ["04", "Gestão de horários", "Disponibilidade, gestão e bloqueio de horários."],
  ["05", "Cadastro e histórico", "Clientes, agendamentos."],
  ["06", "Comunicação", "WhatsApp e notificações Web Push."],
];
export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#inicio" aria-label="Moisés — início">M.</a>
        <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#projeto">Projeto</a><a href="#tecnologias">Tecnologias</a><a href="#contato">Contato</a></nav>
      </header>
      <section className="hero" id="inicio">
        <p className="eyebrow"><span /> Em transição para Desenvolvimento de Software</p>
        <h1>Moisés</h1>
        <p className="hero-line">Transformando aprendizado em{" "}<br />soluções digitais reais.</p>
        <p className="hero-copy">Construo minha trajetória em tecnologia unindo código, produto e experiência do usuário — com projetos funcionais que resolvem necessidades reais.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projeto">Conhecer meu trabalho <span aria-hidden="true">↓</span></a>
          <a className="button button-ghost" href="https://github.com/msilva55048" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta" aria-hidden="true"><span>01</span><div /><span>Portfólio · 2026</span></div>
      </section>

      <section className="about" id="sobre">
        <div className="section-number">02 — Sobre</div>
        <div className="about-grid"><h2>Uma carreira<br /><span>em <em>construção.</em></span></h2><div className="about-copy"><p className="lead">Estou construindo minha trajetória em desenvolvimento de software por meio do estudo contínuo e da criação de soluções reais.</p><p>Meu interesse vai além de fazer uma interface funcionar. Procuro entender o problema, as regras de negócio, os dados e a experiência de quem usa o produto — do frontend ao backend, do primeiro fluxo ao deploy.</p><div className="interests"><span>Sistemas web</span><span>Backend</span><span>Frontend</span><span>Banco de dados</span><span>UX</span><span>Automações</span></div></div></div>
      </section>

      <section className="case" id="projeto">
        <div className="section-kicker"><span>03 — Case principal</span><span>Projeto real · Em produção</span></div>
        <div className="feature-heading"><h2>Mirian Silva<br /><em>Nail Design</em></h2><div><p>Uma plataforma de agendamento online criada para atender uma necessidade real da Mirian Silva Nail Design.</p><div className="case-links"><a href="https://agendamentosmiriansilva.com.br/" target="_blank" rel="noreferrer">Ver projeto ao vivo ↗</a><a href="https://github.com/msilva55048/mirian-silva-nail-design" target="_blank" rel="noreferrer">Ver código ↗</a></div></div></div>
        <div className="mobile-showcase"><div className="phone"><div className="phone-notch"/><img src="/case-mirian/mirian-mobile-oficial.jpeg" alt="Captura mobile completa do projeto Mirian Silva Nail Design" /></div><div className="showcase-note"><span>Captura mobile</span><h3>Experiência mobile real.</h3><p>O projeto publicado, apresentado em sua interface responsiva completa.</p></div></div>
        <div className="case-intro"><p className="quote">“Do aprendizado a um produto funcional em produção.”</p><div><small>O contexto</small><p>Serviços, clientes e agenda reunidos em uma única aplicação.</p></div></div>
        <div className="case-study"><article><span>Problema</span><h3>Organizar uma agenda com disponibilidade precisa.</h3><p>Evitar conflitos e simplificar o atendimento.</p></article><article><span>Solução</span><h3>Uma plataforma conectando cliente e operação.</h3><p>Autenticação, dados e gestão em fluxos responsivos.</p></article><article><span>Resultado</span><h3>Um produto publicado e em uso real.</h3><p>Agendamento e administração centralizados.</p></article></div>
      </section>

      <section className="feature-list"><div className="section-number light">04 — O que foi construído</div><div className="feature-list-head"><h2>Mais do que<br />uma interface.</h2><p>Funcionalidades confirmadas no código atual do projeto.</p></div><div className="feature-rows">{features.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="tech-section" id="tecnologias"><div className="section-number light">05 — Tecnologias & aprendizado</div><div className="tech-grid"><div><p className="label">Utilizadas no projeto em destaque</p><h2>Ferramentas<br />aplicadas.</h2></div><div className="tech-list">{projectTech.map((tech,index)=><div key={tech}><span>{String(index+1).padStart(2,"0")}</span><strong>{tech}</strong></div>)}</div></div><div className="study-card"><p className="label">Em estudo / aprofundamento</p><div><h3>Java · Spring Boot · APIs · PostgreSQL · Arquitetura de aplicações</h3><p>Conhecimento em construção contínua, com foco em backend e na aplicação prática em novos projetos.</p></div></div></section>

      <section className="future"><div className="section-number">06 — Próximos projetos</div><div><h2>Este portfólio acompanha<br /><em>uma trajetória em evolução.</em></h2><p>Novos projetos serão adicionados conforme forem construídos e estiverem prontos para representar trabalho real.</p></div></section>

      <footer id="contato">
        <div className="section-kicker"><span>07 — Contato</span><span>São José · SC</span></div>
        <div className="contact-intro">
          <h2>Vamos<br /><em>conversar.</em></h2>
          <p>Estou aberto a conexões, oportunidades e projetos.</p>
        </div>
        <div className="contact-list" aria-label="Meus contatos">
          <a href="https://www.instagram.com/msilva55048?igsi=dWs5dnUwZWpsdDdo" target="_blank" rel="noopener noreferrer"><span>Instagram</span><strong>@msilva55048</strong><b aria-hidden="true">↗</b></a>
          <a href="https://wa.me/5548998072576" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>(48) 99807-2576</strong><b aria-hidden="true">↗</b></a>
          <a href="https://www.linkedin.com/in/mois%C3%A9s-moreira-247900179/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>Moisés Moreira</strong><b aria-hidden="true">↗</b></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Moisés</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </main>
  );
}
