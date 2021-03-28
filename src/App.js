import './App.css';
import Profil from './profil/Profil.js'
import Mehdi from './Medii.jpg'

function App(props) {
  function handleName(x){
  alert(x)
}
  const Fullname = "Mehdi Zayani";
  const Bio = "Heyy u i love u";
  const Profession ="student";

return(
  <Profil fullname={Fullname} bio={Bio} profession={Profession} handleName={handleName}>
    <img src={Mehdi} width= '600px' />
    </Profil>
   
  )
}

export default App;
