import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import cn from 'classnames';
import s from './App.css';

const App = () => {
    const match = useRouteMatch('/');
    console.log('#### this math:', match);
    return (
        <Switch>
            <Route path={'/404'} render={() => (
                <h1>404 not found</h1>
            )} />
            <Route>
                <>
                    <MenuHeader bgActiv={!match.isExact} />
                    <div className={cn(s.wrap, {
                        [s.isHomePage]: match.isExact
                    }
                    )}>
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/home' component={HomePage} />
                            <Route path='/game' component={GamePage} />
                            <Route path='/about' render={() => (
                                <h1>Holla</h1>
                            )} />
                            <Route render={
                                () => (
                                    <Redirect to='/404' />
                                )
                            } />
                        </Switch>
                    </div>
                    <Footer />
                </>
            </Route>
        </Switch>
    )
}

export default App;