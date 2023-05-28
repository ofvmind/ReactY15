import React, { useState } from "react";
import MyButton from "../components/UI/MyButton";
import Loader from "../components/UI/Loader";
import Gif from "./Gif/Gif";

const Main = ( { toasts, audio } ) => {

    const [ btn, setBtn ] = useState('Вип`ємо');

    const [ toast, setToast ] = useState('Ваш тост');
  
    const [ click, setClick ] = useState(false);

    const [ count, setCount ] = useState(0);

    function clicked() {
      if (toast === 'Ваш тост') {
        setClick(true);
        setCount(count + 1);
        audio();
        setTimeout(() => {
            setClick(false);
            setToast(toasts[Math.floor(Math.random() * toasts.length)]);
            setBtn('Ще козаче?')
        }, 3400);
      } else {
        setToast('Ваш тост');
        setBtn('Вип`ємо')
      };
    };

    function Generator() {
        return (
            <div>
                <div className="toast">
                    {  click 
                    ?
                        <Gif />
                    :
                        <h1>{ toast }</h1>
                    }
                </div>
                { click 
                    ? <button onClick={clicked} className="btn" disabled><Loader /></button> 
                    : <button onClick={clicked} className="btn" >{ btn }</button> 
                }
                <div className="countGlass">
                    <h2 style={{ textAlign: 'center' }}>{ count }<br /> чарка</h2>
                </div>
            </div>
        );
    };

    return <Generator />
};

export default Main;