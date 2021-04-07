import './assets/custom.scss'
import './App.css';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header'
import Home from './page/Home'
import Footer from './components/Footer'
import Page404 from './page/Page404'
import About from './page/About'
import Account from './page/Account'
import Catalog from './page/Catalog'
import Auth from './page/Auth'
import Checkout from './page/Checkout'
import ContactUs from './page/ContactUs'
import ProductDetail from './page/ProductDetail'
import ShippingAndReturns from './page/ShippingAndReturns'
import ShoppingCart from './page/ShoppingCart'
import StoreLocator from './page/StoreLocator'
import FAQ from './page/FAQ'
import AppProvider from './core/AppProvider';
import reducers from './redux/reducers';
import PrivateRouter from './core/PrivateRouter';
import ModelCart from './components/ModelCart';
import saga from './redux/saga';
import ComingSoon from './page/ComingSoon';
import ModelSearch from './components/ModelSearch';
import ModelSizeChart from './components/ModelSizeChart';
import { useRef } from 'react';

function App() {
  let sizeChartRef = useRef();

  return (
    <AppProvider reducers={reducers} saga={saga}>
      <Header />
      <Switch>
        <PrivateRouter path="/account" exact component={Account} />
        <Route path="/shipping-and-returns" exact component={ShippingAndReturns} />
        <Route path="/about" exact component={About} />
        <Route path="/store-locator" exact component={StoreLocator} />
        <Route path="/shopping-cart" exact component={ShoppingCart} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/product:slug" exact component={ProductDetail} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={Home} />
        <Route path="/coming-soon" exact component={ComingSoon} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer sizeChartRef={sizeChartRef} />
      <ModelSearch />
      <ModelCart />
      <ModelSizeChart ref={sizeChartRef} />
    </AppProvider>
  );
}

export default App;
