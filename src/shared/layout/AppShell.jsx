import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "../../modules/home/pages/HomePage";
import { WorkAccidentPage } from "../../modules/home/pages/WorkAccidentPage";

export function AppShell({ children }) {
  const isAccidentPage = window.location.pathname.replace(/\/$/, "") === "/acidente-de-trabalho";
  const page = children ?? (isAccidentPage ? <WorkAccidentPage /> : <HomePage />);
  return <div className="site"><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo">{page}</main><Footer /></div>;
}
