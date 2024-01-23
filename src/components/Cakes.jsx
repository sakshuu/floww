import React from 'react'
import { blueberry_glaze, brownie_cake, butterscotch, chocolate_truffle, cute_panda, fruit_overload, kaju_katli, red_velvet, rich_coffee, rose_paradise } from '../assets/img/cakes'
import { useNavigate } from 'react-router-dom'

const Cakes = () => {
    const navigate = useNavigate()

const dataGallery = [
{
  id:"1",
  title :"heavenly-butterscotch-cream-cake-half-kg-eggless_1",
  img:butterscotch
},
{
  id:"2",
  title:"chocolate-truffle-cream-cake-half-kg-eggless_1",
  img:chocolate_truffle
},
{
  id:"3",
  title:"Rose Paradise Chocolate Cake Eggless Half Kg",
  img:rose_paradise
},
{
  id:"4",
  title:"Fudge Brownie Cake Half kg Eggless",
  img:brownie_cake
  
},
{
  id:"5",
  title:"Red Velvet Fresh Cream Cake Half kg",
  img:red_velvet
},
{
  id:"6",
  title:"Fruit Overload Cake- Half Kg Eggless",
  img:fruit_overload
},
{
  id:"7",
  title:"festive-favourite-kaju-katli-cake-1kg_1",
  img:kaju_katli
},
{
  id:"8",
  title:"Rich Coffee Cream Cake Half Kg",
  img:rich_coffee
},
{
  id:"9",
  title:"Blueberry Glaze Cake- Half Kg",
  img:blueberry_glaze
},
{
  id:"10",
  title:"Cute Panda Chocolate Cake Eggless Half Kg",
  img:cute_panda
}
  ]

  return <>

<div className='gallary-mains'>
  <div className="container">
    <div className="row">
      <h2 className='mt-4 text-center'>Cakes</h2>
{ dataGallery?.map(item => <>
         <div className="col-md-4 col-sm-6">
          <div className="card p-4 card-main">
            <div className="card-header">
 {item?.title}
            </div>
 <img src={item?.img} alt="photo"  className='picGallery'/>
          </div>
         </div> </>)}
    </div>
    <button type="button" onClick={e => navigate("/photo-gallery")} class="btn btn-lg btn-navigate m-4">Back to Gallery</button>
  </div>
  </div>
  </>
}

export default Cakes 