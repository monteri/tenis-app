import { FiPlusSquare } from "@react-icons/all-files/fi/FiPlusSquare";
import { Rating } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import RENT_LIST from './data/rentList';


function RentList () {
 return (
    <>
    <h3><Rating className="rating" value={5}  /><br/>Ping-Pong</h3>
    {
        RENT_LIST.map((rent) =>{
            return (
                <main className="item" key={rent.id}>
                    <img src={"./img/" + rent.img} alt="for rent"/>
                    <h1>{rent.name}</h1>
                    <span>{rent.description}</span>
                    <p>{rent.price}</p>
                    <Link to={`/book/${rent.id}`}>
                        <FiPlusSquare className="plusB hover:text-orange-800 " />
                    </Link>
                </main>
            )
        })
    }



    </>
    );
}

export default RentList
