import '../App.css'
import Shoe from '../Product.json'
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core'




function Store() {

    return (
        <div className='container mt-5 mb-5'>
            <div className='row '>
                {
                    Shoe.map((obj, ind) => {
                        return (
                            <div key={ind} class="self col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div class="hovereffect">
                                    <img className="gridImage img-responsive" src={obj.pic} />
                                    <div className="overlay">
                                        <br />
                                        <br />
                                        <br />
                                        <Button>
                                        <Link className="Navigation__link" to={`/Details ${ind}`} >
                                                Show Details
                                             </Link>
                                        </Button>        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Store;

