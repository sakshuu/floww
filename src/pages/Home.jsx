import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg   from './../assets/img/bg.webp'

const Home = () => {
    const navigate = useNavigate()
  return <>
  <div className='landing'>
    <img src={bg} alt="" className='img-fluid landing-img' />
    <div className='sub-landing'>
  <div className='bounce'>
    <i class="bi bi-arrow-down "></i>
    </div>
  <button type="button" onClick={e => navigate("/photo-gallery")} class="btn btn-lg btn-navigate">Gallery</button>
    </div>
  </div>
  </>
}

export default Home