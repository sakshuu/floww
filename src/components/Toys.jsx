import React from 'react'
import { alphabets, coco_bunny, countdown, softToy, soft_plush, tortoise } from '../assets/img/toys_game'
import { useNavigate } from 'react-router-dom'

const Toys = () => {
  const navigate = useNavigate()

    const dataGallery = [
    {
      id:"1",
      title :"soft plush",
      img:soft_plush
    },
    {
      id:"2",
      title:"Toy",
      img:softToy
    },
    {
      id:"3",
      title:"Countdown Party Game",
      img:countdown
    },
    {
      id:"4",
      title:"Capital Alphabets Tray With Knob",
      img:alphabets
      
    },
    {
      id:"5",
      title:"Coco Bunny Knitted Soft Toy- Mustard",
      img:coco_bunny 
    },
    {
      id:"6",
      title:"Mack The Tortoise Cuddly Soft Toy",
      img:tortoise
    }
      ]
  return <>
  <div className='gallary-mains'>
  <div className="container">
    <div className="row">
      <h2 className='mt-4 text-center'>Toys</h2>
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

export default Toys