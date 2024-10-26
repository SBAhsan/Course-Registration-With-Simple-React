import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    // add to cart
    const [cart, setCart] = useState([]);
    // total credit hour
    const [credit, setCredit] = useState(0);
    // total price
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCart = (newSelected) => {
        const doExist = cart.find((selectedCards => selectedCards.id == newSelected.id));
        if (credit < 13) {
            if (!doExist) {
                setCart([...cart, newSelected]);
                setTotalPrice(totalPrice + newSelected.price);
                setCredit(credit + newSelected.credit_hour);
            }
            else {
                alert("Already in cart");
            }
        }
    };

    // delete from cart
    const handleDeleteCart = (deleteId, deletedCredit, deletedPrice) => {

        const remainingCart = cart.filter((course => course.id !== deleteId));
        setCredit(credit - deletedCredit);
        setCart(remainingCart);
        setTotalPrice(totalPrice - deletedPrice);
    }




    return (
        <>
            <h1 className='text-center text-4xl bg-slate-700 font-extrabold p-10'>Course Registration</h1>
            <div className='main-container bg-slate-700'>

                {/* cards */}
                <div className="card-container w-1/2 lg:w-3/4 lg:grid lg:grid-cols-3 lg:gap-3 px-3">
                    {/* <h1>Cards</h1> */}
                    {
                        cards.map(card => <Card key={card.id} card={card} handleCart={handleCart}></Card>)
                    }
                </div>

                {/* cart */}
                <div className="cart-container w-1/2 lg:w-1/4 p-3">
                    <h1 className='pt-5 pb-3 px-5 font-bold bg-slate-500 rounded-t-md'>Total credit : {credit} hr</h1>
                    <hr></hr>
                    <div className='flex justify-between pt-5 px-5 font-bold bg-slate-500'>
                        <h3>No.</h3>
                        <h3>Name</h3>
                        <h3>Price</h3>
                    </div>
                    {
                        cart.map((course, index) =>
                        (
                            <div className='bg-slate-500 px-3'>
                                <div className='flex justify-between pt-4'>
                                    <p>{index + 1}</p>
                                    <h4>{course.title.slice(0, 25)}...</h4>
                                    <h4>{course.price}</h4>
                                </div>
                                <div className='px-8 pt-3 pb-1'>
                                    <button onClick={() => handleDeleteCart(course.id, course.credit_hour, course.price)} className="btn p-1 w-full  rounded-md text-white bg-neutral-700">Delete</button>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                    <div className='flex justify-between p-3 font-bold bg-slate-500 rounded-b-md'>
                        <h3>Total Price :</h3>
                        <p>{totalPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default App
