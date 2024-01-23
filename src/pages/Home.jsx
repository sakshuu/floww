import React from 'react'
import { useNavigate } from 'react-router-dom'
import { jar_cake,  } from '../assets/img'

const Home = () => {
    const navigate = useNavigate()
  return <>
  <div className='landing'>
    <img src={jar_cake} alt="" className='img-fluid landing-img' />
    <div className='sub-landing'>
  <div className='bounce'>
    <i class="bi bi-arrow-down "></i>
    </div>
  <button type="button" onClick={e => navigate("photo-gallery")} class="btn btn-lg btn-navigate">Cake Gallery</button>
    </div>
  </div>
  </>
}

export default Home