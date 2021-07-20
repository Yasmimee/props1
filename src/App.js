import Fullname from './profile/fullname';
import Bio from './profile/bio';
import Prof from './profile/profession';
import Photo from './photo.png'
import './App.css';

function App() {
  const handleAlert =user =>{
    alert(`hello World`)
  }
  const user={
    name:"luki"
  }
  return (
    <div className="App">
     <Fullname name="Yasmine Bacha" />
     <Bio>
       <img src={Photo} alt="photo"></img>
       </Bio>
     <Prof handleAlert={handleAlert}/>
    </div>
  );
}

export default App;
