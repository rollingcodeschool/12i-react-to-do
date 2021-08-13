import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tareas from "./Components/Tareas"
import ListaDibujada from './Components/ListaDibujada';
import Item from './Components/Item';


function App() {
  return (
    <div>
      <Tareas></Tareas>
      <ListaDibujada></ListaDibujada>
      <Item></Item>
    </div>
  );
}

export default App;
