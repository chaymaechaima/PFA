import { Link } from 'react-router-dom';
const OneProduct = ({ image, title, link }) => {
  let srcimage = require('../pics/categories/' + image);
  return (
    <div id="products" class="col mb-5">


      <div id='card' class="card h-100">
      <Link to={link} className='header-link'>
        {/* Product image */}
        <img class="card-img-top" src={srcimage} alt="Product Image" />
        </Link>
        {/* Product details */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* Product name */}
            <a id='title' >{title}</a>
          </div>
        </div>

        {/* Product actions */}


      </div>

    </div>
  )
}

export default OneProduct;

