import s from './style.module.css';

const GamePage = ({onClickButton}) => {
    
    const handleClick = () => {
        
        console.log('get home page')
        
        onClickButton && onClickButton('home');
        
    }

    return (

        <>
         <div>
            This is game page!!
             
        </div>
         <button className={s.button} onClick={handleClick}>
            get home page !!
        </button>
        </>
       
    )
}
export default GamePage;