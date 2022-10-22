import React,{useState, useEffect} from 'react';



    export default function Product(){

        // const [loading,setLoading]=useState(false);
    const [users, setUsers] = useState([]);
    
       
        
    
        const getUsers =  () => {
             
                const response =  fetch('http://localhost:9000/store/products')
                .then((response)=>{
                    return response.json();
                }).then((data)=>{
                    let product =data.products[1]
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
{[users].map((users)=>{
              return(
<div className="col-md-3">
<div className="card h-100 text-center p-4 "  key={users.id} >
  <img src={users.thumbnail} class="card-img-top" alt={users.title}/>
  <div className="card-body">
    <h5 className="card-title">{users.title}</h5>
    <p className="card-text">${users.weight}</p>
    <a href="/" class="btn btn-primary">Buy Now</a>
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