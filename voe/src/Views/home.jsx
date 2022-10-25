import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function home() {

  // const [cadastro, setCadastro] = useState([]);
  //  const listarCadastro= async () => {
  //   try {
  //     await axios.get("http://localhost:8080/api/cadastro")
  //     .then ((response)=>{
  //       setCadastro(response.data)
  //     })
  //   }catch (erro) {
  //     alert(erro.message);

  //   }
  //  };

  //  useEffect(() =>{
  //   listarCadastro();
  //  }, [])



   return(




    <div className="container">
      <div className='py-4'>
        <table className="table table-striped border shadow">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col"> CPF</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {cadastro.map((cadastro, key)=> (
            <tr>
              <th scope="row" key={key}>{key+1}</th>
              <td>{cadastro.primeironome}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.email}</td>
              <td>
                <button className='btn btn-out-line-sucess mx-2'>
                  Ver
                </button>
                <button className='btn btn-sucess mx-2'>
                  Editar
                </button>
                <button className='btn btn-danger mx-2'>
                  Excluir
                </button>
              </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};
