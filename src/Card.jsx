import React from 'react';

const Card = ({ card, handleCart }) => {
    // console.log(handleCart);
    const { cover, title, description, price, credit_hour } = card;
    return (
        <div>
            <div className="card card-compact bg-neutral-500 mt-3 pr-3 pl-3 h-[435px] rounded-md shadow-xl">
                <figure className='flex justify-center pt-2 pb-2'>
                    <img
                        src={cover}
                        alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl pt-2 pb-2">{title}</h2>
                    <p className='pt-2 pb-2'>{description}</p>
                    <div className='flex justify-between pt-2 pb-2'>
                        <p>$ Price : {price}</p>
                        <p>Credit : {credit_hour}</p>
                    </div>
                    <div className="card-actions pt-2 pb-2">
                        <button onClick={() => handleCart(card)} className="btn p-1 w-full rounded-md text-white bg-neutral-700">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;