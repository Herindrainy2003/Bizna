import { Route ,  BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import '../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FormAddproduct from './component/FormAddproduct.js';
import FormAddProductRecommanded from "./component/FormAddProductRecommanded.js"
import Products from "./component/Products.js" 
import ProductRecommanded from "./component/ProductRecommanded.js"



export default function App() {
  return (
    <div>
      
  
    <BrowserRouter>
       <Navbar />
        <Route exact path = "/" render = {()=> <Products /> } />
        <Route  path = "/addProduct" render={()=><FormAddproduct />} />
        <Route  path = "/addRecomanded" render = {()=> <FormAddProductRecommanded />} />
        <Route  path = "/recommanded" render = {()=> <ProductRecommanded />} />    
    </BrowserRouter> 
   
    </div>
  );
}

