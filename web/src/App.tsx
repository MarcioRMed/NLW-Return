// declarando tipagem typecript
interface ButtonProps {
  // text: string;
  text?: string;
}


function Button(props: ButtonProps){
  console.log(props.text)
  // return <button>{props.text}</button>
  return <button>{props.text?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button text="Sair"/>
      <Button/>
      <Button/>
    </div>
  )

  // html - recebe atributo
  // react - recebe uma propriedade





}//tsx





export default App



/**
 * 
objeto
function Button(props){
  console.log(props.text)
  return <button>Enviar</button>
}



destruturação
function Button({text}){
  console.log(text)
  return <button>Enviar</button>
}
 *  
 */ 

