import React  from 'react'
import styled from 'styled-components'
import Menu   from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel   from '../../components/Carousel'
import Footer     from '../../components/Footer'

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[3].videos[1].titulo}
        url={dadosIniciais.categorias[3].videos[1].url}
        videoDescription={"A continuação de uma das melhores franquia de games de sobrevivência Zombie foi anunciado pela Microsoft em sua última conferência."}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </AppWrapper>
  )
}

export default Home