import React, {useState, useEffect, Fragment} from 'react';


function Formulario(props) {

    const [busqueda, addBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    //funcion  para actualizar el state de los inputs
    const actualizarState = e => {
        addBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

        //console.log(busqueda);
    }

    //cuando hacemos submit al form
    const enviarInfo = e => {
        e.preventDefault();

        //le pongo el state local
        props.cunsultarAPILetra(busqueda);
    }

    return(
        <div className="">
          <div className="container">
              <div className="row">
                  <form onSubmit={enviarInfo}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción"
                                        onChange={actualizarState} 
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;