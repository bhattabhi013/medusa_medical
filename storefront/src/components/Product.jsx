import React,{useState, useEffect} from 'react';


export default function Product() {
    const [data,setData]=useState([ ]);
    const [filters,setFilters]=useState(data);
    const [loading,setLoading]=useState(false);

    

    let componentMounted = true;

    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            const response=await fetch("http://localhost:9000/store/products");
            // console.log("response-------->",response);
            if(componentMounted){
                setData(await response.clone().json());
                setFilters(await response.json());
                setLoading(false);
                console.log(filters);
            }

return ()=>{
    componentMounted=false;
}
        }
    
    getProduct();
    }, []);


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
       {[filters].map((product)=>{
            return (
                <>
<div className="col-md-3">
<div className="card h-100 text-center p-4 "  key={product.id} >
  <img src={product.thumbnail} class="card-img-top" alt={product.title}/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">${product.weight}</p>
    <a href="/" class="btn btn-primary">Buy Now</a>
  </div>
</div>
</div>
                </>
            );
        })}
         </>
        );
        
    };
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
