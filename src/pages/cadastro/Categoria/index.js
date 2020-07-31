import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  const CategoryWrapper = styled.div`
    h1 {
      text-align: center;
      font-size: 28px;
      letter-spacing: 5px;
      margin-top: 0;
    }

    h3 {
      font-size: 22px;
      margin-top: 50px; 
      text-align: center;
    }

    @media(max-width: 800px) {
      h1, h3 {
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

  CategoryWrapper.list = styled.ul`
    padding: 16px 6px;
    margin-bottom: 50px;
    width: 100%;
    min-height: 50px;
    border: 1px solid var(--primary);
    border-radius: 8px;
    font-size: 18px;
  `;

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://astolflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <CategoryWrapper>
        <h1>
          Cadastro de Categoria
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <CategoryWrapper.button>
            Cadastrar
          </CategoryWrapper.button>
        </form>

        <h3>Lista de Categorias</h3>
        <CategoryWrapper.list>
          <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.titulo}
                </li>
              )
            })}
          </ul>
        </CategoryWrapper.list>
      </CategoryWrapper>
    </PageDefault>
  );
}

export default CadastroCategoria;
