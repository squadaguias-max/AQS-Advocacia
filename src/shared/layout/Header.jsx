import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="header-inner"><a className="brand-logo brand-logo-horizontal" href="#inicio" aria-label="AQS Advocacia — início"><img src="/assets/aqs-logo-horizontal.png" width="1166" height="186" alt="AQS Advocacia" /></a><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-principal" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button><nav id="menu-principal" className={open ? "nav open" : "nav"} aria-label="Navegação principal"><a href="#situacoes" onClick={close}>Situações avaliadas</a><a href="#orientacoes" onClick={close}>Antes de decidir</a><a href="#atendimento" onClick={close}>Atendimento</a><a href="#profissionais" onClick={close}>Profissionais</a><a href="#faq" onClick={close}>Dúvidas</a><a className="header-cta" href="#formulario" onClick={close}>Informar meu caso</a></nav></div></header>;
}
