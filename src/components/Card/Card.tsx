import React from "react";

import ArrowIcon from "../../../public/assets/ArrowIcon";

const Card: React.FC = () => {
    return (
        <article className='grid grid-cols-2 p-16 h-[600px] mb-20 w-4/5 bg-[#007dfb] rounded-3xl group/card'>
            <div className='pt-20 flex justify-start flex-col gap-4 w-3/4 relative'>
                <h3 className='text-5xl font-bold text-[#E5E6E7]'>Make your raffles with total transparency</h3>
                <p className='text-2xl font-medium text-white'>We offer a service that allows you to make your raffles quickly, easily and effectively to cover all your needs</p>
                <button type='button' className='flex items-center gap-2 absolute -left-3 -bottom-2 text-white font-medium text-2xl group-hover/card:bg-[#0B6EF9] transition-colors px-3 py-2 rounded-full'>Get a raffle  <ArrowIcon />
                </button>

            </div>
            <div className='flex items-center justify-center'>
                <img className='w-96 group-hover/card:scale-105 transition-transform duration-500' src='/images/lotus.gif' alt='fire' />
            </div>
        </article>
    )
};

Card.defaultProps = {};

export default Card;
