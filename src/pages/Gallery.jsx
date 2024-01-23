import React from 'react';
import { useNavigate } from 'react-router-dom';
import { rose_paradise } from '../assets/img/cakes';
import { plant } from '../assets/img/plants';
import { flower } from '../assets/img/flowers';
import { softToy} from '../assets/img/toys_game';
import { Gifts_hamper } from '../assets/img/hampers';
import { bappa } from '../assets/img/idols';

const galleryData = [
  { id: 1, title: 'Cakes', image: rose_paradise, route: '/cakes' },
  { id: 2, title: 'Idols', image: bappa, route: '/idols' },
  { id: 3, title: 'Flowers', image: flower, route: '/flowers' },
  { id: 4, title: 'Plants', image: plant, route: '/plants' },
  { id: 5, title: 'Toys', image: softToy, route: '/toy' },
  { id: 6, title: 'Gift Hampers', image: Gifts_hamper, route: '/gift' },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className='gallary-mains'>
      <div className="container">
        <div className="row">
          <h2 className='mt-4 text-center'>Photo Gallery</h2>
            {galleryData.map((item) => (
          <div className="col-md-4 col-sm-6">
              <div key={item.id} className="card p-4 card-main" onClick={() => navigate(item?.route)}>
                <div className="card-header text-center">{item?.title}</div>
                <img src={item?.image} alt="photo" className='picGallery img-fluid' />
              </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
