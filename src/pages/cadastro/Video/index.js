import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory }    from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

const CategoryWrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 28px;
    letter-spacing: 5px;
    margin-top: 0;
  }

  @media(max-width: 800px) {
    h1 {
      font-size: 18px;
    }
  }
`;

CategoryWrapper.button = styled.button`
  width: 100%;
  font-size: 20px;
  letter-spacing: 2px;
  border: none;
  border-radius: 8px;
  color: var(--white);
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
    border-radius: 0;
    transition: all 700ms;
  }
`;


function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({titulo}) => titulo)
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  })

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
      })
  }, [])

  return (
    <PageDefault>
      <CategoryWrapper>
        <h1> Cadastro de Vídeo </h1>

        <form onSubmit={(event) => {
          event.preventDefault()
          // alert('Video Cadastrado com sucesso!!!')

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria
          })

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!')
              history.push('/')
            })

        }}>
          <FormField
            label="Título"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <CategoryWrapper.button type="submit">
            Cadastrar
          </CategoryWrapper.button>
        </form>
      </CategoryWrapper>
    </PageDefault>
    )
}

export default CadastroVideo