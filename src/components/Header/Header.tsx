import React from "react";

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-center flex-col lg:flex-row'>
      <div className='w-2/3 lg:w-1/3'>
        <h1 className='text-8xl font-bold text-center pb-3'>One app, all things raffle</h1>
      </div>
      <img className='flex-1 w-11/12 lg:w-2/3' src="/public/images/peopleWatching.webp" alt="People Watching" />
    </header>
  )
};

Header.defaultProps = {};

export default Header;
