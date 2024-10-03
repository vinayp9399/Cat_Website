import '../css/products.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Products = ()=>{
    const navigate = useNavigate();
    const [productdata, setproductdata] = useState('');
    const [actualdata, setactualdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const [searchname, setsearchname] = useState('');
    // console.log(searchname);

    const userid = localStorage.getItem('id');
    const getallproductData = ()=>{
       
        axios.get("https://api.thecatapi.com/v1/breeds").then((response)=>{
            setIsLoading(false);
            setactualdata(response.data);
            setproductdata((response.data).slice(0,6));
        })
    }

    const handleSearch=()=>{
        let searchedData = actualdata.filter((data)=>{
            if(data.name == searchname){
                return(data)
            }
        })
        console.log(searchedData);
        setproductdata(searchedData);

    }

    const searchData=(e)=>{
        setsearchname(e.target.value);
    }

    const filterData=(searchData)=>{

        let filteredData = actualdata.filter((data)=>{
            if(data.origin == searchData){
                return(data)
            }
            else if(searchData==""){
                return(productdata.slice(0,6))
            }
        })
        setproductdata(filteredData.slice(0,6));

    }


    const pagination = (n)=>{
        let newdata = actualdata.slice(6*n,6*(n+1))
        setproductdata(newdata)
    }

    const productDetails =(product)=>{
        localStorage.setItem('product', JSON.stringify(product));
        navigate('/productdetails');
        console.log(product)
    }
    // if(location.pathname===`/products/${params.category}`){
    //     path
    // }


    useEffect(()=>{
            getallproductData();
            // searchData();
    },[])
   
    return(
        <>
        <div id="content">
        <div id="menu">
            <nav style={{lineHeight:"50px", color:"rgb(24 53 115)"}}>
                <h2 style={{textAlign:"center",backgroundColor:"rgb(24, 53, 115)",color:"white"}}>Search By</h2><br/>
                <ul class="list1"><li class="a2">Origin</li>
                <ul style={{marginLeft:"-33px",marginTop:"10px",lineHeight:"47px"}} class="list1">
                <li onClick={()=>{filterData("United States")}} style={{cursor:"pointer"}} class="options"><span>United States</span></li>
                                  <li onClick={()=>{filterData("Egypt")}} style={{cursor:"pointer"}} class="options"><span>Egypt</span></li>
                                  <li onClick={()=>{filterData("Greece")}} style={{cursor:"pointer"}} class="options"><span>Greece</span></li>
                                  <li onClick={()=>{filterData("United Arab Emirates")}} style={{cursor:"pointer"}} class="options"><span>United Arab Emirates</span></li>
                                  <li onClick={()=>{filterData("")}} style={{cursor:"pointer"}} class="options"><span>All Origin</span></li></ul>
                </ul>
             </nav>
        </div>
        <div id="contentarea">
        <div id="search"><input onChange={searchData} class="search_box" type="text" placeholder="Search cat breed..." name="search"/><i onClick={()=>{handleSearch()}} class="fa fa-search fa-lg searchbutton" aria-hidden="true"></i></div>
        {
                    IsLoading===true ?
                    <div className="loader" style={{marginBottom:"40px"}}>
                    </div>
                    : 
                <>{ productdata && productdata.map((product)=>(
                    <>
                    
                    <div class="card2">
                    <img class="img1" src={`https://cdn2.thecatapi.com/images/${product.reference_image_id}.jpg`} alt=""/>
                    <h3>{product.name}</h3>
                    <p>{product.description.slice(0,90)}...</p><br />
                    <div><button class="button1" onClick={()=>{productDetails(product)}}>Know More</button></div>
                    </div></>
                ))}</>
            }  
            
        </div>  
        <ul class="listw">
                <li onClick={()=>pagination(0)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>1</li>
                <li onClick={()=>pagination(1)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>2</li>
                <li onClick={()=>pagination(2)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>3</li>
                <li onClick={()=>pagination(3)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>4</li>
                <li onClick={()=>pagination(4)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>5</li>
                <li onClick={()=>pagination(5)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>6</li>
                <li onClick={()=>pagination(6)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>7</li>
                <li onClick={()=>pagination(7)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>8</li>
                <li onClick={()=>pagination(8)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>9</li>
                <li onClick={()=>pagination(9)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>10</li>
                <li onClick={()=>pagination(10)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>11</li>
                <li onClick={()=>pagination(11)} style={{cursor:"pointer", backgroundColor:"rgb(24, 53, 115)", padding:"12px", color:"white", borderRadius:"10%"}}>12</li>
                </ul>   
                </div>
            
        </>
    )
}
export default Products