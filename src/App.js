import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
