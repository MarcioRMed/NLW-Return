// referência para estudo 

// declarando tipagem typecript
interface ButtonProps {
  // text: string;
  text?: string;
}


function Button(props: ButtonProps){
  console.log(props.text)
  // return <button>{props.text}</button>
  return <button className="bg-[#8257e6] px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text?? 'Default'}</button>
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



// return <button className="bg-violet-500 px-4 h-10 rounded">{props.text?? 'Default'}</button>



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

