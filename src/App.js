import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header'
import Home from './page/home'
import Footer from './components/Footer'
import Page404 from './page/Page404'
import About from './page/About'
import AddressList from './page/Account/components/AddressList'
import Account from './page/Account'
import Order from './page/Account/components/Order'
import OrderList from './page/Account/components/OrderList'
import Payment from './page/Account/components/Payment'
import PaymentList from './page/Account/components/PaymentList'
import PersonalInfo from './page/Account/components/PersonalInfo'
import Auth from './page/Auth'
import Checkout from './page/Checkout'
import ContactUs from './page/ContactUs'
import ProductDetail from './page/ProductDetail'
import ShippingAndReturns from './page/ShippingAndReturns'
import ShoppingCart from './page/ShoppingCart'
import StoreLocator from './page/StoreLocator'
import FAQ from './page/FAQ'
import Shop from './page/Shop'
import OrderComplete from './page/OrderComplete'
import AppProvider from './core/AppProvider';
import reducers from './redux/reducers';
import PrivateRouter from './core/PrivateRouter';

function App() {
  return (
    <AppProvider reducers={reducers}>
      <Header />
      <Switch>
        <PrivateRouter path="/account" exact component={Account} />
        <Route path="/shipping-and-returns" exact component={ShippingAndReturns} />
        <Route path="/about" exact component={About} />
        <Route path="/store-locator" exact component={StoreLocator} />
        <Route path="/shopping-cart" exact component={ShoppingCart} />
        <Route path="/faq" exact component={FAQ} />
        {/* <Route path="/about" exact component={About} /> */}
        <Route path="/product:slug" exact component={ProductDetail} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </AppProvider>
  );
}

export default App;
