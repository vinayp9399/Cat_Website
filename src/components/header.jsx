import { useNavigate } from 'react-router-dom'
import '../css/header.css'

const Header = ()=>{
    const navigate = useNavigate();

    return(
        <>

    <header>
        <div class="container_12">
            <div class="logo">
            <a onClick={()=>{navigate('/')}}><img style={{height:"77px", width:"290px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBnhLBfMKrA39U_aOTw8mu9DTWeiZSZ8x0g&s" alt=""/></a>
                
            </div>
            <label for="checkbox-toggle" class="hamburger1">☰</label>
            <nav class="navhome">
                <ul>
                    <li>
                    <a style={{cursor:"pointer",color:"rgb(24, 53, 115)"}}>Home</a>
                    </li>
                    <li>
                    <a style={{cursor:"pointer",color:"rgb(24, 53, 115)"}}>About Us</a>
                    </li>
                    <li>
                    <a style={{cursor:"pointer",color:"rgb(24, 53, 115)"}}>Services</a>
                    </li>
                    <li>
                    <a style={{cursor:"pointer",color:"rgb(24, 53, 115)"}}>Login</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>

        </>
    )
}
export default Header

 