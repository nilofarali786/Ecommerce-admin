import { Link } from "react-router-dom"

export default function  SideBar  (props){

 var change=()=>{

     props.chg({loging:false,token:undefined})
 }
   
    

  return<>

<header className="tm-header" id="tm-header">
<div className="tm-header-wrapper">
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="tm-site-header">
                <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
                <h1 className="text-center"> Hello custmer</h1>
            </div>
         {props.log?<><nav className="tm-nav" id="tm-nav">            
                <ul>
                    <li className="tm-nav-item active">
                    
                        <i className="fas fa-home"></i><Link to="/"> HOME</Link>
                        
                    
                    </li>
                    <li className="tm-nav-item">
                    <i className="fas fa-home"></i><Link to="cat"> catagory</Link>
                        
                    
                        </li>
                        
                      
                    <li className="tm-nav-item">
                  
                    <i className="fas fa-home"></i><Link to="brd"> Brand</Link>
                        
                    
                        </li>
                    
                        <li className="tm-nav-item">
                  
                  <i className="fas fa-home"></i><Link to="pro">
                    product
                  </Link>
                      
                  
                      </li>

                      <li className="tm-nav-item">
                  
                  <i className="fas fa-home">
                  <b onClick={change}>
                   login out

                  </b>
                  </i>
                    </li>
                      </ul>
                      
                      </nav></>:<>

                      <nav className="tm-nav" id="tm-nav">            
                <ul>
                    <li className="tm-nav-item active">
                    
                       
                    <b>LOGIN</b>

                        
                    </li>
                   
                    </ul>
                    </nav>

                      </>}
                      
                                 
                
                
            
            </div>
        </header>





  </>






}
