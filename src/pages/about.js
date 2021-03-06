import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"
import SocialImageLinks from "../components/SocialImageLinks"

const AboutPage = () => (
  <div>
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o Murilo Balducci, empreendedor e desenvolvedor"
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Murilo Balducci, sou apaixonado por
        desenvolvimento de software, desenvolvimento pessoal, 
        negócios e empreendedorismo.
      
      </p>

      <SocialImageLinks />

      <p>
        Sou desenvolvedor na HST Card Technology uma das melhores empresas de TI da américa. <br></br>
      </p>

      <p>
        Também sou especialista em vendas e marketing digital, tenho experiência
        fora do Brasil onde consegui adquirir novas habilidades para compartilhar com vocês.
      </p>

      <p>
        Estudei Ciências Econômicas na PUC-Campinas.<br></br>
        Atualmente cursando Sistemas de Informação na Universidade Paulista.
      </p>

      <p>
        Sou noivo, muito feliz com minha família. Composta por minha mulher e nossa filha de quatro patas.
      </p>

      <p>
        No meu tempo livre, costumo viajar, prático slack-line, gosto de correr, gosto de assitir
        Netflix, compartilho meu conhecimento através do blog e meu Instagram.
      </p>

      <h2>Habilidades</h2>

      <p>
        Meu início no mercado foi bem cedo com 16 anos, sempre fui apaixonado por fazer dinheiro 
        e ao mesmo tempo apaixonado por tecnologia. Antes de terminar o colégio já tinha comprado meu primeiro carro,
        Logo após, entrei para faculdade, com muito estudo e dedicação em 6 meses no curso Ciências Econômicas consegui um trabalho no <i>Banco Santander</i>,
        durante meu período de muito aprendizado no Santander, tive a oportunidade de morar na Calífornia, juntei tudo que tinha e fui.
        Aprendi muito e cresci muito, foi onde tive contato com o desenvolvimento na empresa <i>BitMonkeyDigital</i> (Marketing Digital, Suporte e Desenvolvimento Web).
        <br></br>
        Voltei para o Brasil, iniciei minha graduação em Sistemas de Informação, 
        Em menos de 4 meses e alguns cursos que vou indicar para vocês eu consegui um trabalho na HST Card Technology uma das melhores empresas de TI da américa.       
      </p>

      <h2>Foco</h2>

      <p>
        Hoje estou focado no desenvolvimento Full Stack com
        Javascript, React, e SpringBoot e todo ecossistema por volta dessas
        tecnologias.
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks />
    </MainContent>
  </Layout>
  </div>
)

export default AboutPage