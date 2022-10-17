import React,{useState, useEffect} from 'react'

export default function Product() {
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);

    let componentMounted = true;

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
            const response=await fetch("http://localhost:9000/store/products");
            console.log("response-------->",response);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log("filter")
            }

return ()=>{
    componentMounted=false;
}
        }
    
    getProducts();
    },[]);


    const Loading = () =>{
        return (
            <>
            Loading...
            </>
        )
    }

    const ShowProducts=()=>{
        return (
            <>
           
<div className="buttons d-flex justify-content-center">
            <div className="btn btn-outline-dark">ALL</div>
            <div className="btn btn-outline-dark">Mens cloths</div>
            <div className="btn btn-outline-dark">Womens cloths</div>
            <div className="btn btn-outline-dark">Jwellery</div>
            <div className="btn btn-outline-dark">Electronics</div>
        </div>
        {filter.map((products)=>{
            return (
                <>
<div className="col-md-3">
<div className="card h-100 text-center p-4 "  key={products.profile_id} style="width: 18rem;">
  <img src={products.images} class="card-img-top" alt={products.title}/>
  <div className="card-body">
    <h5 className="card-title">{products.title}</h5>
    <p className="card-text">${products.weight}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
                </>
            );
        })}
         </>
        )
        
    }
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col-12 mb-5">
            <h1 className='display-5 fw-bolder text-center'>Latest Products</h1>
            <hr />
        </div>
    </div>
    <div className="row justify-content-center">
        {loading ? <Loading/> : <ShowProducts/>}

    </div>
</div>
    </div>
  )
}
