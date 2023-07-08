import React from "react";

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-center flex-col xl:flex-row pb-32'>
      <div className='flex flex-col items-center gap-6 w-2/3 xl:w-1/3'>
        <h1 className='text-8xl font-bold text-center pb-3'>One app, all things raffle</h1>
        <p className="text-2xl font-bold text-center w-2/3">From a bet between friends, raffles and great prizes.</p>
        <button type="button" className="bg-[#191C1F] text-[#F9FBFC] text-2xl px-4 py-3 rounded-xl">Get a free raffle</button>
      </div>
      <img className='flex-1 w-11/12 xl:w-2/3' src="/images/peopleWatching.webp" alt="People Watching" />
    </header>
  )
};

Header.defaultProps = {};

export default Header;
