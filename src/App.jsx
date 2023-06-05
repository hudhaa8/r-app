// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//        <h2>React Node MongoDB App</h2>
//       </div>
     
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

const API ="http://localhost:4000"

function App() {
  // const mobiles = [{
  //   model : "I phone 14",
  //   image : "https://img6.gadgetsnow.com/gd/images/products/additional/large/G390766_View_1/mobiles/smartphones/apple-iphone-14-128-gb-blue-6-gb-ram-.jpg",
  //   company : "Iphone"
  // },
  // {
  //   model : "Vivo X80",
  //   image : "https://img2.gadgetsnow.com/gd/images/products/additional/large/G364914_View_1/mobiles/smartphones/vivo-x80-256-gb-urban-blue-12-gb-ram-.jpg",
  //   company : "VIVO"
  // },
  // {
  //   model : "One plus 10 pro",
  //   image : "https://www.addmecart.com/wp-content/uploads/2022/11/01.2.jpg",
  //   company : "One plus"
  // },{
  //   model : "Samsung Galauxy S23",
  //   image : "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg",
  //   company : "Samsung"
  // }]
  const [mobiles,setMobiles] =useState([])
 useEffect(()=>{
  fetch(`${API}/mobiles`)
  .then((data)=>data.json())
  .then((mbs)=>setMobiles(mbs))
 },[])
  return (
    <div className="phone-list-container">
      {mobiles.map((mobile)=> <Phone mobile={mobile}/>)}
    </div>
  );
}

function Phone({mobile}) {
 
  return(
     <div className='phone-container'>
      
      <img src={mobile.image} alt={mobile.name} className="phone-picture" />
      <h2 className='phone-name'>{mobile.model}</h2>
      <p className='phone-company'>{mobile.company}</p>
    </div>
  
  )
}

export default App;

