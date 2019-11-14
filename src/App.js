import React, {useState, useEffect, Fragment} from 'react';
//axios
import axios from 'axios';
//components
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {
  

  //utilizar useState con 3 states
  const [ artista, addArtista ] = useState('');
  const [ letra, addLetra ] = useState([]);
  const [ info, addInfo ] = useState({});

    //metodo para consultar la api de letras de canciones
    const cunsultarAPILetra = async busqueda => {    
        //console.log(busqueda);
        //tremos los datos del state de busqueda
        const {artista, cancion} = busqueda;
      
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

        //cunsulta de la api
        const res = await axios(url);

        //almacenar el artista que se busco
        addArtista(artista);

        //almacenar la letra en el state
        //console.log(res.data.lyrics)
        addLetra(res.data.lyrics);

    }

    //Método para consutar la API de información
    const consultarAPIInfo = async () => {

      if(artista){
        //consultar la api
        const urlInfo = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        //consulta a la api
        const res = await axios(urlInfo);

        //almacenar la info 
        addInfo(res.data.artists[0]);
        //console.log(res.data);
      }
       return null;
    }

    useEffect(
      () => {
        consultarAPIInfo();
      }, [artista]
    )

  return(
    <Fragment>
      <Formulario
        cunsultarAPILetra={cunsultarAPILetra}
      />
      <br/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>

          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>

    </Fragment>
  )

}

export default App;
