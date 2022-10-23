import React,{useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';


 export default function Products(){

        // const [loading,setLoading]=useState(false);
    const [users, setUsers] = useState([]);
    
       
        
    
        const getUsers =  () => {
             
                const response =  fetch('http://localhost:9000/store/products')
                .then((response)=>{
                    return response.json();
                }).then((data)=>{
                    let product =data.products;
                    console.log(product)

                    setUsers(product);
                })
              
            
            }
    
        useEffect(() => {
            getUsers();
        }, []);
    
    

    

    
    
  return (
    <div>
<div className="container">
    <h1>List of Products</h1>
{users.map((user)=>{
              return(
<div className="col-md-3">
<div className="card h-100 text-center p-4 "  key={user.id} >
  <img src={user.thumbnail} class="card-img-top" alt={user.title}/>
  <h3>{user.title}</h3>
  <div className="card-body">
    <h5 className="card-title">{users.title}</h5>
    {/* <p className="card-text">€{user.variants[0].prices[0].amount}</p> */}
    <p className="card-text">${user.variants[0].prices[1].amount}</p>
    {/* <NavLink href="/products/${user.id}" class="btn btn-primary">Buy Now</NavLink> */}
            <Link to = '/details'
            state = {{ data: user }}>Buy Now
            </Link>
  </div>
</div>
</div>
              )
          }) 
}
    </div>
    </div>
  )
}