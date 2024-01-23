import React from 'react'
import { useNavigate } from 'react-router-dom'
import { beautiful_pink_roses, blissful_roses, blue_moon, divine, magical_bouquet, magicl, red_hearty } from '../assets/img/flowers'

const Flowers = () => {
  const navigate = useNavigate()

    const dataGallery = [
    {
      id:"1",
      title :"red hearty flowers",
      img:red_hearty
    },
    {
      id:"2",
      title:"magical flower Bunch",
      img:magicl
    },
    {
      id:"3",
      title:"magical bouquet",
      img:magical_bouquet
    },
    {
      id:"4",
      title:"divine",
      img:divine
      
    },
    {
      id:"5",
      title:"blue moon",
      img:blue_moon
    },
    {
      id:"6",
      title:"blissful roses",
      img:blissful_roses
    },
    {
      id:"6",
      title:"beautiful pink roses",
      img:beautiful_pink_roses
    }
      ]
  return <>
    <div className='gallary-mains'>
  <div className="container">
    <div className="row">
      <h2 className='mt-4 text-center'>Bouquet</h2>
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

export default Flowers