import { useState } from "react";
import { projectWhatsappUrl } from "../../../config/project.data";

const registrationOptions = [
  "6 meses ou mais",
  "Menos de 6 meses",
  "Todo o período foi registrado em carteira",
  "Não sei informar",
];

const employmentOptions = [
  "Ainda estou trabalhando",
  "Saí há menos de 6 meses",
  "Saí entre 6 e 12 meses",
  "Saí entre 1 e 2 anos",
  "Saí há mais de 2 anos",
];

function maskPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function IntakeForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationPeriod, setRegistrationPeriod] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  const cleanName = name.trim().replace(/\s+/g, " ");
  const nameValid = cleanName.split(" ").length >= 2;
  const phoneValid = /^[1-9][1-9]9\d{8}$/.test(phone.replace(/\D/g, ""));
  const formComplete = Boolean(nameValid && phoneValid && registrationPeriod && employmentStatus);
  const currentStep = !nameValid ? 1 : !phoneValid ? 2 : !registrationPeriod ? 3 : 4;

  function continueOnWhatsapp(event) {
    event.preventDefault();
    if (!formComplete) return;

    const message = [
      "Olá! Vim pela página sobre reconhecimento de vínculo da AQS Advocacia e gostaria de conversar sobre meu caso.",
      `Nome completo: ${cleanName}`,
      `WhatsApp com DDD: ${phone}`,
      `Tempo sem registro em carteira para a mesma empresa: ${registrationPeriod}`,
      `Situação atual nessa empresa: ${employmentStatus}`,
    ].join("\n");

    window.location.assign(projectWhatsappUrl(message));
  }

  return <form className="intake-form staged-form" onSubmit={continueOnWhatsapp}>
    <p className="form-progress" aria-live="polite">Etapa {currentStep} de 4</p>

    <div className="form-step">
      <span className="form-step-index" aria-hidden="true">01</span>
      <label className="form-field" htmlFor="lead-name"><span>Nome completo</span><input id="lead-name" name="nome" type="text" autoComplete="name" maxLength="120" value={name} onChange={(event) => setName(event.target.value)} required aria-describedby="name-help" /></label>
      <p className="form-help" id="name-help">Informe nome e sobrenome.</p>
    </div>

    {nameValid && <div className="form-step">
      <span className="form-step-index" aria-hidden="true">02</span>
      <label className="form-field" htmlFor="lead-phone"><span>WhatsApp com DDD</span><input id="lead-phone" name="whatsapp" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(48) 99999-9999" maxLength="15" value={phone} onChange={(event) => setPhone(maskPhone(event.target.value))} required aria-describedby="phone-help" /></label>
      <p className="form-help" id="phone-help">Informe um celular com DDD, incluindo o nono dígito.</p>
    </div>}

    {nameValid && phoneValid && <div className="form-step">
      <span className="form-step-index" aria-hidden="true">03</span>
      <label className="form-field" htmlFor="lead-registration"><span>Durante quanto tempo você trabalhou sem registro em carteira para a mesma empresa?</span><select id="lead-registration" name="tempo_sem_registro" value={registrationPeriod} onChange={(event) => setRegistrationPeriod(event.target.value)} required><option value="" disabled>Selecione uma opção</option>{registrationOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
    </div>}

    {nameValid && phoneValid && registrationPeriod && <div className="form-step">
      <span className="form-step-index" aria-hidden="true">04</span>
      <label className="form-field" htmlFor="lead-status"><span>Qual é sua situação atual nessa empresa?</span><select id="lead-status" name="situacao_atual" value={employmentStatus} onChange={(event) => setEmploymentStatus(event.target.value)} required><option value="" disabled>Selecione uma opção</option>{employmentOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
    </div>}

    <button className="primary-button form-submit" type="submit" disabled={!formComplete}>Continuar no WhatsApp</button>
    <p className="form-note">Ao continuar, o WhatsApp abrirá com suas respostas em uma mensagem. Revise e envie a mensagem para iniciar o contato. Isso não representa aceitação do caso nem cria relação advogado-cliente.</p>
  </form>;
}
