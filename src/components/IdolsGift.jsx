import React from 'react'
import { useNavigate } from 'react-router-dom'
import { adiyogi_shiva, bappa, dancing_ganesha, golden_grace_krishna, marble_ram, tirupatibalaji } from '../assets/img/idols'

const IdolsGift = () => {

    const navigate = useNavigate()

    const dataGallery = [
    {
      id:"1",
      title :"Dancing Ganesha Idols Set of 4",
      img:dancing_ganesha
    },
    {
      id:"2",
      title:"Adiyogi Shiva Statue Large",
      img:adiyogi_shiva
    },
    {
      id:"3",
      title:"tirupati-balaji-car-idol_1",
      img:tirupatibalaji
    },
    {
      id:"4",
      title:"Dancing Ganesha",
      img:bappa 
      
    },
    {
      id:"5",
      title:"marble-dust-ram-darbar-idol_1",
      img:marble_ram
    },
    {
      id:"6",
      title:"golden-grace-krishna-idol_1",
      img:golden_grace_krishna
    }
      ]

  return <>
  
  <div className='gallary-mains'>
  <div className="container">
    <div className="row">
      <h2 className='mt-4 text-center'>Idols</h2>
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

export default IdolsGift