import React       from 'react'
import { Link }    from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'


function CadastroCategoria() {
    return (
      <PageDefault>
        <h1> Category register page </h1>

        <form>
          <label>
            Nome da Categoria:
            <input 
              type="text"
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>

        <Link to='/'>
          Go to Home!
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria