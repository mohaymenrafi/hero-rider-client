import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyAccount from './pages/MyAccount/MyAccount';
import NotFound from './pages/NotFound/NotFound';
import Payment from './pages/Payment/Payment';
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/my-account">
            <MyAccount />
          </PrivateRoute>
          <PrivateRoute path="/purchase/:id">
            <Payment />
          </PrivateRoute>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
