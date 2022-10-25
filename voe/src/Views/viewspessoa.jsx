import React, {useState} from 'react';
import axios from 'axios';
import { Navigate, Link , useParams} from 'react-router-dom';

export default function ViewPessoa() {

    // const navigate = useNavigate();

    // const [nome, setNome] = useState("");
    // const [CPF, setCPF] = useState("");
    // const [Email, setEmail] = useState("");

    // const salvar = async ( e )=> {
    //   e.preventDefault();
    //   console.log (nome, CPF, Email);
    //   await axios.post ("localhost:8080/api/user", {
    //     nome: nome,
    //     CPF: CPF,
    //     Email: email,

    //   }).then ((result)=> {
    //     alert ("Cadastrado. ");
    //     navigate("/home")
    //   }).catch ((erro) => {
    //     console.log(erro);
    //   })
    // }




  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounder p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Visualizar Cadastro </h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputNome" class="form-label"> Nome Completo </label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
              value={nome} onChange={(e) => setNome(e.target.value )}/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">Email </label>
              <input type="text" class="form-control" id="exampleInputPassword1" 
              value={email} onChange={(e) => setEmail(e.target.value )}/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"
              value={CPF} onChange={(e) => setCPF(e.target.value )}/>
              <label class="form-check-label" for="exampleCPF1"> CPF </label>
            </div>
            <button type="submit" class="btn btn-outine-sucess" onClick={salvar}>Salve</button>
            <Link to="/home" class="btn btn-outline-danger mx-2">Cancelar</Link>
          </form>

        </div>


      </div>

    </div>
  )
};

