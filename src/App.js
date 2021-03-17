import { useState } from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';


const App = () => {

    const [page, setPage] = useState('app');

    const handlePageChange = (page) => {

        console.log('####: <App />');
        setPage(page);
    }


    switch (page) {

        case 'app':
            return <HomePage onChangePage={handlePageChange} />
        case 'game':
            return <GamePage onChangePage={handlePageChange} />
        default:
            return <HomePage />
    }


}

export default App;