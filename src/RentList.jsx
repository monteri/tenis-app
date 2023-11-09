import { FiPlusSquare } from "@react-icons/all-files/fi/FiPlusSquare";
import { Rating } from "@material-tailwind/react";

const lists = [
{
    name: 'Оренда столу (1 год)',
    description: '(Ракетки та мʼяч в комплекті)',
    prize: '250 ₴',
    id: 1,
    img: '1h.webp',
},
{
    name: 'Оренда столу (2 год)',
    description: 'Знижка 5% (Ракетки та мʼяч в комплекті)',
    prize: '475 ₴',
    id: 2,
    img: '2h.png',
},
{
    name: 'Оренда столу (3 год)',
    description: 'Знижка 10% (Ракетки та мʼяч в комплекті)',
    prize: '675 ₴',
    id: 3,
    img: '3h.webp',
},
{
    name: 'Оренда столу (4 год)',
    description: 'Знижка 15% (Ракетки та мʼяч в комплекті)',
    prize: '850 ₴',
    id: 4,
    img: '4h.png',
}
]


function RentList () {
 return (
    <>
    <h3><Rating className="rating" value={5}  /><br/>Ping-Pong</h3>
    {
        lists.map((rent) =>{
            return (
                <main className="item" key={rent.id}>
                    <img src={"./img/" + rent.img} alt="for rent"/>
                    <h1>{rent.name}</h1>
                    <span>{rent.description}</span>
                    <p>{rent.prize}</p>
                    <FiPlusSquare className="plusB hover:text-orange-800 " />
                </main>
            )
        })
    }
    

    
    </>
    );
}

export default RentList