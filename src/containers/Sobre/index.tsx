import React from 'react';
import Titulo from "../../components/Titulo/index";
import Paragrafo from "../../components/Paragrafo/index";
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo='secundario'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nam dolorem rerum provident molestias debitis voluptate tempora nulla, laborum, sed, deleniti ipsum cumque labore possimus voluptatem repellat sint modi fugit?
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=miguel11065&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=miguel11065&layout=compact&langs_count=7&theme=dracula"/>    </GithubSecao>
  </section>
)

export default Sobre
