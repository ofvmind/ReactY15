import React, { useState } from "react";
import "./styles/App.css"
import Main from "./components/Main";
import useSound from "use-sound";
import sound from "./components/sounds/click.mp3"

function App() {

  const [ play ] = useSound(sound);

  const [ toasts, setToasts ] = useState([
    'За зустріч!', 
    'Вип’ємо за ВДВ – Віру, Доблесть та Везіння!', 
    'За дружбу!',
    'За перемогу!',
    'Щоб хуй стояв і серце билось!',
    'За любих дівчат!',
    'За те щоб сонце заствітило!',
    'За ход ноги!',
  ]);

  return (
    <div className="App">
      <Main toasts={ toasts } audio={ play }/>
    </div>
  );
}

export default App;
