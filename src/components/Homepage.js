
import { Link } from 'react-router-dom'
import Button from './Button'

const Homepage = () => {
    return(
        <div>
          <div className = "Header">
            <h1 style= {{color:"green", textAlign:"center" }}>Estoybuscando.com</h1>
          </div>
    
          <div className= "homepage-div"> 
                <h1> Quiero comprar </h1>
                <p><h2> Si tienes la intención de comprar un producto publicalo aqui</h2></p>
                <Link to="/publish">
                  <Button
                  color={'green'}
                  text={'Publicar'}
                  onClick={({})=> {return "bien"}}          
                  />                
                </Link>
                
          </div>
        
          <div className="homepage-div2"> 
                <h1> Vengo a vender </h1>
                <p><h2> Tengo un producto que puede estar ofertado o simplemente quiero chismosear</h2></p>
                
                <Link to= '/ecommerce'>

                <Button
                  color={'green'}
                  text={'Ver Productos'}
                  onClick={({})=> {return "bien"}}          
                />
                </Link>
          </div>
      
      
      
        </div>)
}

export default Homepage



