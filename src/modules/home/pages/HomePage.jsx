import { FileCheck2, MapPin, ShieldCheck } from "lucide-react";
import { IntakeForm } from "../components/IntakeForm";

const situations = [
  ["01", "Sem registro em carteira", "O trabalho era realizado sem anotação formal do vínculo."],
  ["02", "Registro diferente da realidade", "A função, a data de início ou outras informações podem não refletir o trabalho realizado."],
  ["03", "Contrato encerrado", "O vínculo já terminou e você quer entender se o período trabalhado pode ser analisado."],
];

const steps = [
  ["Organize as informações", "Anote quando o trabalho começou e terminou, quais atividades realizava e quem acompanhava a rotina."],
  ["Separe os registros disponíveis", "Mensagens, comprovantes de pagamento, escalas, e-mails e outros documentos podem ajudar a contextualizar o relato."],
  ["Conte como era o trabalho", "A análise considera os fatos de cada situação. Não é necessário ter todos os documentos para iniciar uma conversa."],
];

const faqs = [
  ["Posso pedir uma análise se já saí da empresa?", "Sim. A triagem também recebe relatos de pessoas cujo contrato já terminou. Informe quando o vínculo se encerrou para que esse dado seja considerado."],
  ["E se eu não tiver documentos?", "Você pode iniciar o contato com as informações que tem. A equipe poderá explicar quais outros registros podem ser úteis para a avaliação."],
  ["Trabalhar sem carteira assinada confirma o vínculo?", "A conclusão depende da análise das condições concretas do trabalho e das informações disponíveis. A triagem não confirma automaticamente a existência de vínculo ou de valores a receber."],
  ["O formulário já cria uma relação advogado-cliente?", "Não. As respostas iniciam o contato e a triagem, mas não representam aceitação automática do caso nem criam relação advogado-cliente."],
];

export function HomePage() {
  return <>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">Direito do Trabalho <i aria-hidden="true" /> Reconhecimento de vínculo</span>
        <h1>Você trabalhou <span className="hero-title-accent">sem registro</span> em carteira?</h1>
        <p className="hero-lead">Mesmo que já tenha saído da empresa, você pode contar o que aconteceu. A triagem considera suas atividades, datas e registros disponíveis.</p>
        <a className="primary-button" href="#formulario">Conversar com a equipe <span aria-hidden="true">↗</span></a>
        <div className="hero-assurances" aria-label="Informações sobre o atendimento">
          <span><ShieldCheck /> Análise individual</span>
          <span><FileCheck2 /> Informações e documentos</span>
          <span><MapPin /> São José/SC e atendimento digital</span>
        </div>
      </div>
      <figure className="hero-visual hero-visual-portrait">
        <img src="/assets/ana-quint.jpg" width="1600" height="2400" alt="Dra. Ana Quint, advogada da AQS Advocacia" fetchPriority="high" />
        <figcaption><FileCheck2 /><span><strong>Ana Quint</strong><small>Advogada · OAB/SC 51.785</small></span></figcaption>
      </figure>
    </section>

    <section className="intake-section" id="formulario">
      <div className="section-intro intake-intro">
        <span className="eyebrow">Triagem inicial</span>
        <h2>Conte sobre o período trabalhado</h2>
        <p>Informe seus dados de contato, o tempo sem registro e se ainda trabalha para a empresa. Em seguida, você poderá revisar as respostas no WhatsApp.</p>
      </div>
      <IntakeForm />
    </section>

    <section className="content-section situations-section" id="situacoes">
      <div className="section-heading-row">
        <div className="section-intro"><span className="eyebrow">Entenda o atendimento</span><h2>Quando faz sentido iniciar uma conversa?</h2></div>
        <p>Esta página é dedicada à triagem de situações relacionadas ao reconhecimento de vínculo empregatício. A análise depende das circunstâncias concretas de cada trabalho.</p>
      </div>
      <div className="situations-grid relationship-grid">{situations.map(([number, title, text]) => <article className="situation-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <a className="secondary-button" href="#formulario">Informar meu caso</a>
    </section>

    <section className="guidance-section" id="orientacoes">
      <div className="guidance-photo"><img src="/assets/mesa-de-atendimento.jpeg" width="2000" height="1333" alt="Mesa de café e telefone em um ambiente de conversa" loading="lazy" /></div>
      <div className="guidance-content"><span className="eyebrow">Para a triagem</span><h2>O que pode ajudar a explicar a situação?</h2><div className="guidance-list">{steps.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><a className="primary-button" href="#formulario">Preencher formulário</a></div>
    </section>

    <section className="listening-section">
      <figure className="listening-visual"><img src="/assets/retrato-editorial.jpeg" width="1400" height="2100" alt="Retrato editorial de uma profissional em pose lateral" loading="lazy" /><figcaption>Escuta atenta · imagem editorial</figcaption></figure>
      <div className="listening-copy"><span className="eyebrow">Cada trajetória tem seu contexto</span><h2>Uma conversa começa pela sua história.</h2><p>Datas, rotina de trabalho e registros disponíveis ajudam a organizar a triagem. Conte o que aconteceu no seu tempo, com as informações que tiver.</p><a className="text-link" href="#formulario">Compartilhar minha história <span aria-hidden="true">↗</span></a></div>
    </section>

    <section className="process-section" aria-labelledby="processo-titulo">
      <div className="process-heading"><span className="eyebrow">Uma conversa organizada</span><h2 id="processo-titulo">Da sua história à triagem inicial</h2><p>Um primeiro contato claro ajuda a equipe a compreender o período de trabalho e a identificar quais informações ainda podem ser necessárias.</p></div>
      <div className="process-steps">
        <article><span>01</span><div><h3>Você conta</h3><p>Compartilhe o que fazia, quando começou e se o trabalho já terminou.</p></div></article>
        <article><span>02</span><div><h3>A equipe compreende</h3><p>O relato é considerado junto das datas, do contexto e dos registros disponíveis.</p></div></article>
        <article><span>03</span><div><h3>Vocês conversam</h3><p>A triagem pode indicar informações complementares e os próximos passos do atendimento.</p></div></article>
      </div>
    </section>

    <section className="team-section" id="profissionais">
      <div className="team-heading">
        <div className="section-intro"><span className="eyebrow">AQS Advocacia</span><h2>Atendimento com atenção ao contexto</h2></div>
        <p>Atuação jurídica conduzida com análise individualizada, clareza e responsabilidade profissional.</p>
      </div>
      <div className="team-grid">
        <figure className="profile-card">
          <div className="profile-photo"><img src="/assets/ana-quint-perfil.jpg" width="1600" height="2400" alt="Ana Quint, sócia fundadora da AQS Advocacia" loading="lazy" /></div>
          <figcaption><span className="profile-index">01 / DIREITO DO TRABALHO</span><div><p className="profile-kicker">Sócia fundadora</p><h3>Ana Quint</h3><strong>OAB/SC 51.785</strong><p className="profile-description">Atuação atenta às particularidades de cada trajetória profissional.</p></div></figcaption>
        </figure>
        <figure className="profile-card">
          <div className="profile-photo"><img src="/assets/roselei-machado.jpg" width="1024" height="1536" alt="Roselei Machado, advogada da AQS Advocacia" loading="lazy" /></div>
          <figcaption><span className="profile-index">02</span><div><p className="profile-kicker">Advogada</p><h3>Roselei Machado</h3><strong>OAB/SC 79.520</strong></div></figcaption>
        </figure>
      </div>
    </section>

    <section className="faq-section" id="faq">
      <div className="section-intro"><span className="eyebrow">Informação antes da decisão</span><h2>Perguntas frequentes</h2></div>
      <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i>+</i></summary><p>{answer}</p></details>)}</div>
      <a className="secondary-button" href="#formulario">Iniciar triagem</a>
    </section>

    <section className="campaign-note" aria-label="Outra página de atendimento">
      <span className="eyebrow">Outro assunto trabalhista</span>
      <h2>Sofreu um acidente durante o trabalho?</h2>
      <p>Consulte a página específica de acidente de trabalho, preparada para essa campanha.</p>
      <a className="secondary-button" href="/acidente-de-trabalho">Acessar página sobre acidente de trabalho</a>
    </section>

    <section className="final-cta">
      <FileCheck2 aria-hidden="true" />
      <div><span className="eyebrow">Próximo passo</span><h2>Trabalhou sem registro? Conte o que aconteceu.</h2><p>A equipe poderá verificar se o relato está dentro do direcionamento desta triagem e quais informações podem ser necessárias.</p></div>
      <a className="primary-button" href="#formulario">Ir para o formulário</a>
    </section>

    <section className="legal-section" aria-label="Informações legais">
      <details id="privacidade"><summary>Política de Privacidade</summary><p>Os dados informados são utilizados para realizar a triagem e possibilitar contato sobre a solicitação. Envie apenas as informações necessárias para iniciar a conversa. A política definitiva deve ser revisada e publicada com os dados do canal responsável antes da veiculação pública.</p></details>
      <details id="termos"><summary>Termos de Uso</summary><p>O conteúdo desta página é informativo. O preenchimento do formulário não cria relação advogado-cliente, não representa aceitação automática do caso e não garante resultado. A avaliação depende das circunstâncias e das informações disponíveis.</p></details>
    </section>
  </>;
}
