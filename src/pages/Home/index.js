import React, { useEffect, useState } from 'react'
import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain'
import Carousel   from '../../components/Carousel'
import AppWrapper from './styles'
import categoriasRepository from '../../repositories/categorias'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      console.log(categoriasComVideos)
      setDadosIniciais(categoriasComVideos)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])


  return (
    <AppWrapper>
      <PageDefault paddingAll={0} >
        
        {dadosIniciais.map((categoria, indice) => {
          if(indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain 
                  videoTitle={dadosIniciais[3].videos[1].titulo}
                  url={dadosIniciais[3].videos[1].url}
                  videoDescription={"A continuação de uma das melhores franquia de games de sobrevivência Zombie foi anunciado pela Microsoft em sua última conferência."}
                />
          
                <Carousel 
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            )
          }

          return (
            <Carousel 
              key={categoria.id}
              category={categoria}
            />
          )
        })}

      </PageDefault>
    </AppWrapper>
  )
}

export default Home