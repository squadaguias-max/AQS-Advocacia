import { useEffect } from "react";
import { FileCheck2, MapPin, ShieldCheck } from "lucide-react";
import { projectWhatsappUrl } from "../../../config/project.data";

const signs = [
  ["Lesão durante a atividade", "Um acidente ocorrido no exercício do trabalho pode exigir atenção à documentação e às circunstâncias do ocorrido."],
  ["Afastamento ou atendimento médico", "Relatórios, atestados, exames e comprovantes de atendimento podem ajudar a registrar o que aconteceu."],
  ["Problema relacionado às condições de trabalho", "Se a atividade ou o ambiente de trabalho pode ter relação com uma doença ou lesão, relate quando os sintomas começaram e como evoluíram."],
];

const checklist = [
  ["Cuide da saúde", "Procure atendimento médico e siga as orientações recebidas."],
  ["Guarde os registros", "Preserve documentos médicos, comunicações com a empresa e informações sobre data, local e atividade."],
  ["Descreva o ocorrido", "Informe se houve afastamento, quais pessoas acompanharam a situação e se o contrato ainda está ativo."],
];

const faqs = [
  ["O que é considerado nesta triagem?", "Relatos de acidente ou lesão relacionados ao trabalho, além de situações em que a pessoa acredita que uma doença possa ter relação com a atividade profissional. A análise depende dos fatos e documentos de cada caso."],
  ["Já voltei ao trabalho. Posso entrar em contato?", "Sim. Informe as datas do ocorrido, do atendimento e do retorno ao trabalho, se houver."],
  ["E se a empresa não tiver registrado o acidente?", "Conte o que aconteceu e quais registros você possui. A equipe poderá avaliar as informações e orientar sobre os próximos passos de atendimento."],
  ["O contato garante que existe direito a indenização ou benefício?", "Não. O envio de informações não confirma direitos, responsabilidade ou resultado. Cada situação depende de análise própria."],
];

const whatsappUrl = projectWhatsappUrl("Olá! Vim pela página sobre acidente de trabalho da AQS Advocacia. Gostaria de conversar sobre meu caso.");

export function WorkAccidentPage() {
  useEffect(() => {
    const title = "Acidente de trabalho | AQS Advocacia";
    const description = "Informações e triagem sobre acidente de trabalho e situações relacionadas à atividade profissional. Atendimento em São José/SC e digital.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", "https://aqsadvocacia.com/acidente-de-trabalho");
  }, []);

  return <>
    <section className="hero accident-hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">Direito do Trabalho <i aria-hidden="true" /> Acidente de trabalho</span>
        <h1>Um acidente aconteceu <span className="hero-title-accent">durante o trabalho?</span></h1>
        <p className="hero-lead">Conte o que ocorreu e como isso afetou sua rotina. A triagem trabalhista também considera situações relacionadas a lesões e condições de trabalho.</p>
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar com a equipe <span aria-hidden="true">↗</span></a>
        <div className="hero-assurances" aria-label="Informações sobre o atendimento">
          <span><ShieldCheck /> Análise individual</span>
          <span><FileCheck2 /> Documentos e contexto</span>
          <span><MapPin /> São José/SC e atendimento digital</span>
        </div>
      </div>
      <figure className="hero-visual hero-visual-portrait">
        <img src="/assets/ana-quint.jpg" width="1600" height="2400" alt="Dra. Ana Quint, advogada da AQS Advocacia" fetchPriority="high" />
        <figcaption><FileCheck2 /><span><strong>Ana Quint</strong><small>Advogada · OAB/SC 51.785</small></span></figcaption>
      </figure>
    </section>

    <section className="content-section situations-section" id="situacoes">
      <div className="section-heading-row">
        <div className="section-intro"><span className="eyebrow">Triagem trabalhista</span><h2>O que pode ser relatado?</h2></div>
        <p>Esta página atende à campanha trabalhista de acidente de trabalho. A avaliação depende do contexto do ocorrido e não antecipa conclusões sobre responsabilidade ou direitos.</p>
      </div>
      <div className="situations-grid relationship-grid">{signs.map(([title, text], index) => <article className="situation-card" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Relatar meu caso</a>
    </section>

    <section className="guidance-section" id="orientacoes">
      <div className="guidance-photo accident-photo"><img src="/assets/orientacao-trabalhista.jpg" width="6000" height="4000" alt="Documentos organizados para conversar sobre um acidente de trabalho" loading="lazy" /></div>
      <div className="guidance-content"><span className="eyebrow">Informações para a conversa</span><h2>Como organizar o relato?</h2><div className="guidance-list">{checklist.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar com a equipe</a></div>
    </section>

    <section className="team-section" id="profissionais">
      <div className="team-heading"><div className="section-intro"><span className="eyebrow">AQS Advocacia</span><h2>Atuação trabalhista</h2></div><p>Atendimento em São José/SC e possibilidade de atendimento digital, mediante análise das informações apresentadas.</p></div>
      <div className="team-grid"><figure className="profile-card"><div className="profile-photo"><img src="/assets/ana-quint-perfil.jpg" width="1600" height="2400" alt="Ana Quint, sócia fundadora da AQS Advocacia" loading="lazy" /></div><figcaption><span className="profile-index">01 / DIREITO DO TRABALHO</span><div><p className="profile-kicker">Sócia fundadora</p><h3>Ana Quint</h3><strong>OAB/SC 51.785</strong><p className="profile-description">Atuação atenta às particularidades de cada trajetória profissional.</p></div></figcaption></figure><figure className="profile-card"><div className="profile-photo"><img src="/assets/roselei-machado.jpg" width="1024" height="1536" alt="Roselei Machado, advogada da AQS Advocacia" loading="lazy" /></div><figcaption><span className="profile-index">02</span><div><p className="profile-kicker">Advogada</p><h3>Roselei Machado</h3><strong>OAB/SC 79.520</strong></div></figcaption></figure></div>
    </section>

    <section className="faq-section" id="faq"><div className="section-intro"><span className="eyebrow">Dúvidas comuns</span><h2>Perguntas frequentes</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i>+</i></summary><p>{answer}</p></details>)}</div><a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar sobre meu caso</a></section>

    <section className="final-cta"><FileCheck2 aria-hidden="true" /><div><span className="eyebrow">Acidente de trabalho</span><h2>Conte à equipe o que aconteceu.</h2><p>O primeiro contato permite entender o relato e verificar as informações necessárias para uma triagem.</p></div><a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Iniciar conversa</a></section>
    <section className="legal-section" aria-label="Informações legais"><details id="termos"><summary>Informações do atendimento</summary><p>O conteúdo desta página é informativo. O contato não cria relação advogado-cliente, não representa aceitação automática do caso e não garante resultado. A avaliação depende das circunstâncias e dos documentos disponíveis.</p></details><details id="privacidade"><summary>Política de Privacidade</summary><p>As informações compartilhadas são utilizadas para realizar a triagem e possibilitar contato sobre a solicitação. Envie apenas os dados necessários para iniciar a conversa.</p></details></section>
  </>;
}
