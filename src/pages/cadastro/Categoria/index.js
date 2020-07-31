import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import { Containercss } from './styles.js'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <Containercss>

        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="text"
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

          <button>
            Cadastrar
          </button>
        </form>

        
        <span>Lista de Categorias</span>
        <Containercss.list>
          <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>
        </Containercss.list>
      </Containercss>
    </PageDefault>
  )
}

export default CadastroCategoria;