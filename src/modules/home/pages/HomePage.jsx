import { useState } from "react";
import { AlertTriangle, BookOpenCheck, Check, Clock3, FileCheck2, MapPin, Scale, ShieldCheck } from "lucide-react";

const workStatuses = [
  "Continuo trabalhando na empresa.",
  "Estou afastado, mas o contrato continua ativo.",
  "Estou cumprindo aviso-prévio.",
  "Pedi demissão recentemente.",
  "Fui dispensado recentemente.",
  "O contrato terminou há mais tempo.",
  "Minha situação é diferente das opções acima.",
];

const caseTypes = [
  "Atrasos recorrentes ou falta de pagamento de salário.",
  "FGTS ausente ou irregular.",
  "Assédio, humilhação ou rigor excessivo.",
  "Exigência incompatível com o contrato.",
  "Exposição a risco grave no trabalho.",
  "Redução relevante do trabalho ou da remuneração.",
  "Descumprimento de outra obrigação importante.",
  "Apenas insatisfação ou desejo de mudar de emprego.",
  "Minha situação é diferente das opções acima.",
];

const durationOptions = ["Ocorreu uma única vez.", "Menos de 30 dias.", "De 1 a 3 meses.", "De 3 a 6 meses.", "Mais de 6 meses.", "Não sei precisar."];
const recordOptions = ["Mensagens ou e-mails.", "Holerites ou comprovantes de pagamento.", "Extrato do FGTS.", "Advertências ou comunicados.", "Registros de jornada ou escalas.", "Possíveis testemunhas.", "Nenhum registro no momento.", "Outros documentos."];

const situations = [
  ["01", "Salários em atraso", "Atrasos relevantes ou recorrentes no pagamento do salário."],
  ["02", "FGTS irregular", "Ausência ou irregularidade nos depósitos do Fundo de Garantia."],
  ["03", "Assédio ou humilhação", "Condutas ofensivas, tratamento humilhante ou rigor excessivo."],
  ["04", "Descumprimento contratual", "Exigências incompatíveis com o contrato ou outras obrigações não cumpridas."],
  ["05", "Risco grave", "Exposição a perigo manifesto ou condições graves de insegurança."],
  ["06", "Outras condutas graves", "Situações que estejam afetando de modo relevante a continuidade do vínculo."],
];

const guidance = [
  ["Registre os fatos", "Anote o que aconteceu, quando começou e quantas vezes a situação se repetiu."],
  ["Preserve os documentos", "Guarde mensagens, e-mails, holerites, extratos, comunicados e outros registros relacionados."],
  ["Evite decisões precipitadas", "Pedir demissão ou deixar de comparecer pode produzir consequências diferentes das esperadas."],
  ["Não obtenha provas de forma irregular", "Preserve o que já existe e informe quais pessoas ou documentos podem esclarecer os fatos."],
  ["Evite conclusões antecipadas", "Nem todo problema no trabalho permite a rescisão indireta. Cada situação exige análise individual."],
];

const faqs = [
  ["O que é rescisão indireta?", "É uma forma de encerramento do contrato que pode ser discutida quando existe falta grave atribuída ao empregador. O cabimento depende da análise individual."],
  ["Rescisão indireta é a mesma coisa que pedir demissão?", "Não. As duas formas de encerramento produzem efeitos diferentes. Por isso, é importante buscar orientação antes de formalizar uma decisão."],
  ["Posso parar de trabalhar enquanto o caso é analisado?", "Não existe uma resposta geral segura. Deixar de comparecer sem orientação pode gerar consequências e alterar o cenário do caso."],
  ["Atraso de salário ou FGTS irregular garante a rescisão indireta?", "Não há garantia automática. Frequência, extensão, documentos e demais circunstâncias precisam ser avaliados."],
  ["Preciso ter documentos?", "Os documentos ajudam na avaliação. Mensagens, holerites, extratos, e-mails, comunicados e possíveis testemunhas podem ser relevantes."],
  ["Já pedi demissão. Ainda posso enviar o formulário?", "Sim. Informe quando e como o contrato foi encerrado. A possibilidade de qualquer medida dependerá da análise individual."],
  ["O envio do formulário significa que o caso foi aceito?", "Não. O formulário registra o contato inicial. A aceitação depende da triagem, da análise das informações e das condições de atendimento."],
];

function CheckboxGroup({ legend, name, options }) {
  return <fieldset className="form-field fieldset"><legend>{legend}</legend><div className="check-grid">{options.map((option) => <label className="check-option" key={option}><input type="checkbox" name={name} value={option} /><span><Check aria-hidden="true" /></span>{option}</label>)}</div></fieldset>;
}

export function HomePage() {
  const [phone, setPhone] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const maskPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    if (!endpoint) {
      setFormStatus("O canal seguro de recebimento ainda está sendo configurado. Seus dados não foram enviados.");
      return;
    }
    setFormStatus("Enviando informações…");
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(event.currentTarget) });
      if (!response.ok) throw new Error("Falha no envio");
      event.currentTarget.reset();
      setPhone("");
      setFormStatus("Informações enviadas. A equipe fará a triagem e poderá entrar em contato.");
    } catch {
      setFormStatus("Não foi possível enviar agora. Tente novamente em alguns minutos.");
    }
  };

  return <>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">Direito do Trabalho · Rescisão indireta</span>
        <h1>A empresa deixou de cumprir obrigações importantes do contrato de trabalho?</h1>
        <p className="hero-lead">Antes de pedir demissão ou deixar de comparecer, informe o que está acontecendo para que a equipe possa verificar se a situação está dentro da área de atendimento.</p>
        <a className="primary-button" href="#formulario">Contar o que aconteceu</a>
        <div className="hero-assurances" aria-label="Informações sobre o atendimento">
          <span><ShieldCheck /> Triagem confidencial</span>
          <span><Clock3 /> Cerca de 3 minutos</span>
          <span><MapPin /> São José/SC e atendimento digital</span>
        </div>
      </div>
      <figure className="hero-visual">
        <img src="/assets/hero-advogada.jpg" width="3648" height="5472" alt="Profissional analisando documentos em uma mesa de trabalho" fetchPriority="high" />
        <figcaption><FileCheck2 /><span><strong>Análise individual</strong>Fatos, datas e documentos ajudam a compreender o caso.</span></figcaption>
      </figure>
    </section>

    <section className="intake-section" id="formulario">
      <div className="section-intro intake-intro">
        <span className="eyebrow">Triagem inicial</span>
        <h2>Conte o que está acontecendo no seu trabalho</h2>
        <p>Preencha somente as informações necessárias para a primeira avaliação. O envio não confirma o direito à rescisão indireta nem representa aceitação do caso.</p>
      </div>
      <form className="intake-form" onSubmit={submitForm}>
        <div className="form-grid three-cols">
          <label className="form-field"><span>Nome completo</span><input name="nome" type="text" autoComplete="name" required /></label>
          <label className="form-field"><span>WhatsApp com DDD</span><input name="whatsapp" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(48) 99999-9999" value={phone} onChange={(event) => setPhone(maskPhone(event.target.value))} pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" required /></label>
          <label className="form-field"><span>Cidade e estado</span><input name="cidade" type="text" autoComplete="address-level2" placeholder="Ex.: São José/SC" required /></label>
        </div>
        <label className="form-field"><span>Qual é a sua situação atual?</span><select name="situacao_atual" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{workStatuses.map((item) => <option key={item}>{item}</option>)}</select></label>
        <CheckboxGroup legend="Qual situação mais se aproxima do seu caso?" name="tipo_caso" options={caseTypes} />
        <div className="form-grid two-cols">
          <label className="form-field"><span>Há quanto tempo isso acontece?</span><select name="duracao" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{durationOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="form-field"><span>Você já pediu demissão ou deixou de comparecer?</span><select name="decisao" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{["Não", "Pedi demissão", "Deixei de comparecer", "Estou avaliando o que fazer"].map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <CheckboxGroup legend="Quais registros você possui?" name="registros" options={recordOptions} />
        <label className="form-field"><span>Existe processo ou outro advogado atuando neste mesmo caso?</span><select name="processo_advogado" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{["Não", "Sim, já existe advogado", "Sim, já existe processo", "Prefiro explicar no contato"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="form-field"><span>Descreva resumidamente o que aconteceu</span><textarea name="relato" rows="6" maxLength="2500" placeholder="Inclua datas aproximadas, frequência e o que já foi comunicado à empresa." required /></label>
        <label className="consent"><input type="checkbox" name="consentimento" required /><span>Autorizo a AQS Advocacia a utilizar os dados informados para realizar a triagem e entrar em contato sobre esta solicitação, conforme a <a href="#privacidade">Política de Privacidade</a>.</span></label>
        <button className="primary-button form-submit" type="submit">Enviar informações</button>
        {formStatus && <p className="form-status" role="status">{formStatus}</p>}
        <p className="form-note">O envio das informações não confirma o direito à rescisão indireta, não representa aceitação do caso e não cria relação advogado-cliente. A avaliação depende dos fatos, documentos e condições de atendimento.</p>
      </form>
    </section>

    <section className="content-section situations-section" id="situacoes">
      <div className="section-heading-row">
        <div className="section-intro"><span className="eyebrow">Possível falta grave do empregador</span><h2>Quais situações podem ser avaliadas?</h2></div>
        <p>A rescisão indireta pode ser discutida quando existe uma possível falta grave do empregador. A análise considera gravidade, frequência, provas disponíveis e o momento atual do contrato.</p>
      </div>
      <div className="situations-layout">
        <div className="situations-grid">{situations.map(([number, title, text]) => <article className="situation-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="document-visual">
          <figure className="evidence-card evidence-documents"><div className="evidence-image"><img src="/assets/analise-documentos.png" width="1327" height="1147" alt="Lupa sobre documentos, representando a análise das provas" loading="lazy" /></div><figcaption><strong>Análise dos registros</strong><span>Mensagens, holerites, extratos e comunicados ajudam a compreender a frequência e o contexto dos fatos.</span></figcaption></figure>
          <figure className="evidence-card evidence-fgts"><div className="evidence-image"><img src="/assets/fgts-extrato-novo.png" width="1536" height="1024" alt="Aplicativo do FGTS aberto em um telefone celular" loading="lazy" /></div><figcaption><strong>Extrato do FGTS</strong><span>O documento pode ajudar a identificar ausências ou irregularidades nos depósitos.</span></figcaption></figure>
        </div>
      </div>
      <a className="secondary-button" href="#formulario">Quero informar meu caso</a>
    </section>

    <section className="guidance-section" id="orientacoes">
      <div className="guidance-photo"><img src="/assets/orientacao-trabalhista.jpg" width="6000" height="4000" alt="Conversa de orientação com documentos sobre uma mesa" loading="lazy" /></div>
      <div className="guidance-content"><span className="eyebrow">Antes de agir</span><h2>O que observar antes de tomar uma decisão?</h2><div className="guidance-list">{guidance.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><a className="primary-button" href="#formulario">Preencher formulário</a></div>
    </section>

    <section className="content-section direction-section" id="direcionamento">
      <div className="section-intro"><span className="eyebrow">Filtro de atendimento</span><h2>Antes de enviar, confira o direcionamento</h2></div>
      <div className="direction-grid">
        <article className="direction-card positive"><div className="direction-title"><BookOpenCheck /><h3>Este atendimento pode analisar</h3></div><ul>{["Possível falta grave praticada pelo empregador.", "Problemas relevantes ou recorrentes durante o vínculo de emprego.", "Situações com datas, contexto e informações mínimas para triagem.", "Casos com documentos, comunicações ou possíveis testemunhas.", "Dúvidas antes de pedir demissão ou tomar outra decisão relevante."].map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="direction-card caution"><div className="direction-title"><AlertTriangle /><h3>Este atendimento não é direcionado a</h3></div><ul>{["Insatisfação genérica, sem um fato concreto ligado ao empregador.", "Dúvidas pertencentes a outra área do Direito.", "Pedido de confirmação automática de rescisão indireta.", "Solicitação de conclusão jurídica sem análise dos fatos e documentos.", "Casos com processo ou advogado constituído sem prévia verificação ética e operacional."].map((item) => <li key={item}>{item}</li>)}</ul></article>
      </div>
      <p className="direction-note">Não se enquadrar nesta triagem não representa uma conclusão definitiva sobre seus direitos. Pode significar apenas que o tema exige outro direcionamento.</p>
    </section>

    <section className="office-section" id="atendimento">
      <figure><img src="/assets/atendimento-juridico.jpg" width="3963" height="5937" alt="Profissional revisando documentos durante um atendimento jurídico" loading="lazy" /><figcaption>Atendimento em São José/SC e possibilidade de atendimento digital.</figcaption></figure>
      <div className="office-copy"><span className="eyebrow">AQS Advocacia</span><h2>Atendimento em Direito do Trabalho</h2><p>A AQS Advocacia atua nas áreas Trabalhista, Previdenciária e Tributária. Nesta página, a triagem é dedicada exclusivamente a situações relacionadas à possível rescisão indireta. As informações são analisadas conforme as particularidades do relato e os documentos disponíveis.</p><p>Quando necessário, a equipe poderá solicitar informações complementares antes de indicar os próximos passos.</p><div className="other-areas"><span>Reconhecimento de vínculo empregatício</span><span>Salário-maternidade e auxílio-acidente</span><span>Isenção de IR por doença grave</span><span>Tributário para clínicas e empresas de saúde</span><span>Análise de ITBI</span></div><a className="secondary-button" href="#formulario">Enviar informações para avaliação</a></div>
    </section>

    <section className="team-section" id="profissionais">
      <div className="team-heading">
        <div className="section-intro"><span className="eyebrow">Responsáveis pelo atendimento</span><h2>Profissionais da AQS Advocacia</h2></div>
        <p>Atuação jurídica conduzida com análise individualizada, clareza e responsabilidade profissional.</p>
      </div>
      <div className="team-grid">
        <figure className="profile-card">
          <div className="profile-photo"><img src="/assets/ana-quint.jpg" width="1600" height="2400" alt="Ana Quint, sócia fundadora da AQS Advocacia" loading="lazy" /></div>
          <figcaption><span className="profile-index">01</span><div><h3>Ana Quint</h3><p>Sócia fundadora</p><strong>OAB/SC 51.785</strong></div></figcaption>
        </figure>
        <figure className="profile-card">
          <div className="profile-photo"><img src="/assets/roselei-machado.jpg" width="1024" height="1536" alt="Roselei Machado, profissional da AQS Advocacia" loading="lazy" /></div>
          <figcaption><span className="profile-index">02</span><div><h3>Roselei Machado</h3><strong>OAB/SC 79.520</strong></div></figcaption>
        </figure>
      </div>
    </section>

    <section className="faq-section" id="faq">
      <div className="section-intro"><span className="eyebrow">Informação antes da decisão</span><h2>Perguntas frequentes</h2></div>
      <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i>+</i></summary><p>{answer}</p></details>)}</div>
      <a className="secondary-button" href="#formulario">Contar o que aconteceu</a>
    </section>

    <section className="final-cta">
      <Scale aria-hidden="true" />
      <div><span className="eyebrow">Próximo passo</span><h2>Antes de tomar uma decisão no trabalho, entenda o que está acontecendo</h2><p>Preencha os dados iniciais para que a equipe possa verificar se a situação está dentro da área de atendimento e quais informações ainda são necessárias.</p></div>
      <a className="primary-button" href="#formulario">Ir para o formulário</a>
    </section>

    <section className="legal-section" aria-label="Informações legais">
      <details id="privacidade"><summary>Política de Privacidade</summary><p>Os dados informados são utilizados exclusivamente para realizar a triagem e possibilitar o contato sobre a solicitação. O envio deve limitar-se às informações necessárias para compreender o caso. A política definitiva deverá ser revisada e publicada com os dados do canal responsável antes da veiculação pública.</p></details>
      <details id="termos"><summary>Termos de Uso</summary><p>O conteúdo desta página é informativo. O preenchimento do formulário não cria relação advogado-cliente, não representa aceitação automática do caso e não garante resultado. A avaliação depende das circunstâncias e dos documentos de cada situação.</p></details>
    </section>
  </>;
}
