import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Gifts_hamper, jivisa, meditations, organic_chai, sweet_sensation, vahdam_tea } from '../assets/img/hampers'

const GiftHampers = () => {
  const navigate = useNavigate()

  const dataGallery = [
  {
    id:"1",
    title :"iViSa Premium Tea Time Gift Box",
    img:jivisa
  },
  {
    id:"2",
    title:"Gifts hampees Tea n Coffee",
    img:Gifts_hamper
  },
  {
    id:"3",
    title:"Organic Chai Collection Gift Set",
    img:organic_chai
  },
  {
    id:"4",
    title:"Vahdam Assorted Tea Sampler Gift Box",
    img:vahdam_tea
    
  },
  {
    id:"5",
    title:"Meditations In My Tea Cup Gift Box",
    img:meditations
  },
  {
    id:"6",
    title:"Chayam Sweet Sensation Exotic Tea Hamper",
    img:sweet_sensation
  }
    ]
  return <>
  <div className='gallary-mains'>
  <div className="container">
    <div className="row">
      <h2 className='mt-4 text-center'>Gift Hampers</h2>
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

export default GiftHampers