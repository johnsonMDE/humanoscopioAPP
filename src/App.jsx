import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let estilos = {color: 'green', background: 'blue', paddingLeft: '25px'}
const App = () => {
  return (

<h1 className='row' style={estilos}>humanoscopio app</h1>


  );




// si este código que estoy ocultando, si está tal cual como lo tiene el docente en clase, ¿por qué no me compila?
// <>
//   <button onClick={() => { alert('humanoscopio') }}>
//      Hola a todos
//    </button>
//  </>
//  };

}



export default App;