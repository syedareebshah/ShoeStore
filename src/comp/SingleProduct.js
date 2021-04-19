import '../App.css';
import { useParams } from 'react-router-dom';
import shoe from '../Product.json'
import ErrorPage from './Error';


function SingleProduct() {
    const { id } = useParams()
    
    var item = shoe[+id]
    if(!item){
        return <ErrorPage />
    }

    return (
        <div>

            <div className="card center">
                <img src={item.pic} className="card-img-top" alt="Image" />
                <div className="card-body">
                    <p className="card-text">{item.desc}</p>
                    <h3>{item.price}</h3>
                </div>
            </div>

        </div>

    );
}

export default SingleProduct;
