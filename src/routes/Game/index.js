// import MenuHeader from '../../components/MenuHeader';
import s from './style.module.css';
import { useHistory } from 'react-router-dom';

const GamePage = () => {
    const history = useHistory();
    const handleClick = () => {
        console.log('get home page');
        history.push('./home')
    }
    return (
        <>

            <div>
                This is game page!!
           </div>
            <button
                style={{ marginTop: '30px' }}
                className={s.button} onClick={handleClick}>
                get home page !!
           </button>
        </>
    )
}
export default GamePage;