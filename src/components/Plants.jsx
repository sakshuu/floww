import React from 'react'
import { useNavigate } from 'react-router-dom'
import { combo_bliss, hoya_red, jade_plant, money_plant, pink_plant, plant } from '../assets/img/plants'

const Plants = () => {

  const navigate = useNavigate()

    const dataGallery = [
    {
      id:"1",
      title :"jade plant",
      img:jade_plant
    },
    {
      id:"2",
      title:"Money Plant In Colourful Rajwada Printed Pot",
      img:money_plant
    },
    {
      id:"3",
      title:"Combo Of Bliss With Baby Buddha Figurines",
      img:combo_bliss
    },
    {
      id:"4",
      title:"plant",
      img:plant
      
    },
    {
      id:"5",
      title:"Pink Syngonium Plant In Best Wishes Metal Pot",
      img:pink_plant
    },
    {
      id:"6",
      title:"Hoya Plant Red Ceramic Art Pots",
      img:hoya_red
    }
      ]

  return <>
    <div className='gallary-mains'>
  <div className="container">
    <div className="row">
      <h2 className='mt-4 text-center'>Plants</h2>
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

export default Plants