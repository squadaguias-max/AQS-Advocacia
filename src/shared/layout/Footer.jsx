import { projectData } from "../../config/project.data";

export function Footer() {
  const { contact, location } = projectData;
  const phoneHref = `tel:${contact.phone.replace(/\D/g, "")}`;

  return <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img className="footer-logo" src="/assets/aqs-logo-padrao.png" width="1205" height="671" alt="AQS Advocacia" loading="lazy" />
        <p>Atuação Trabalhista, Previdenciária e Tributária.<br />São José/SC e possibilidade de atendimento digital.</p>
      </div>
      <div className="footer-col"><h3>Responsáveis</h3><span>Ana Quint · Sócia fundadora</span><span>OAB/SC 51.785</span><span>Roselei Machado</span><span>OAB/SC 79.520</span></div>
      <div className="footer-col"><h3>Contato</h3><a href={phoneHref}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">{contact.instagram}</a><address>{location.address}</address></div>
      <div className="footer-col"><h3>Navegação</h3><a href="#situacoes">Situações avaliadas</a><a href="#profissionais">Profissionais</a><a href="#faq">Perguntas frequentes</a><a href="#formulario">Formulário de triagem</a><a href="#termos">Termos de Uso</a><a href="#privacidade">Política de Privacidade</a></div>
    </div>
    <div className="footer-bottom">Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos. O preenchimento do formulário não cria relação advogado-cliente.</div>
    <a className="developed-by" href="https://somos4juris.com.br/" target="_blank" rel="noopener noreferrer">Desenvolvido por 4Juris</a>
  </footer>;
}
