import s from './style.module.css';
import { useHistory } from 'react-router-dom';

const Header = ({ title, desc }) => {
    const history = useHistory();
    const handleClick = () => {
        console.log('####: <Header />');
        history.push('/game');

    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button className={s.button} onClick={handleClick}>
                    let the game start!!
                </button>
            </div>
        </header>
    );
}
export default Header;