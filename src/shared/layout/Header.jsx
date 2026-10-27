import { Menu, X } from "lucide-react";
import { useState } from "react";
import { projectWhatsappUrl } from "../../config/project.data";

export function Header() {
  const [open, setOpen] = useState(false);
  const isAccidentPage = window.location.pathname.replace(/\/$/, "") === "/acidente-de-trabalho";
  const homePrefix = isAccidentPage ? "/" : "";
  const accidentWhatsapp = projectWhatsappUrl("Olá! Vim pela página sobre acidente de trabalho da AQS Advocacia. Gostaria de conversar sobre meu caso.");
  const close = () => setOpen(false);
  return <header className="site-header"><div className="header-inner"><a className="brand-logo brand-logo-horizontal" href={`${homePrefix}#inicio`} aria-label="AQS Advocacia — início"><img src="/assets/aqs-logo-horizontal.png" width="1166" height="186" alt="AQS Advocacia" /></a><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-principal" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button><nav id="menu-principal" className={open ? "nav open" : "nav"} aria-label="Navegação principal"><a href={`${homePrefix}#situacoes`} onClick={close}>{isAccidentPage ? "Situações" : "Vínculo empregatício"}</a><a href={`${homePrefix}#orientacoes`} onClick={close}>Orientações</a><a href={`${homePrefix}#profissionais`} onClick={close}>Profissionais</a><a href={`${homePrefix}#faq`} onClick={close}>Dúvidas</a>{!isAccidentPage && <a href="/acidente-de-trabalho" onClick={close}>Acidente de trabalho</a>}<a className="header-cta" href={isAccidentPage ? accidentWhatsapp : "#formulario"} target={isAccidentPage ? "_blank" : undefined} rel={isAccidentPage ? "noopener noreferrer" : undefined} onClick={close}>{isAccidentPage ? "Conversar" : "Informar meu caso"}</a></nav></div></header>;
}
