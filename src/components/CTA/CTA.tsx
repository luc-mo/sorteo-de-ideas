import React from "react";

const CTA: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-10 w-[60%] py-20">
            <h2 className="text-6xl font-bold text-center">Join 30+ million people who already trust us with their raffle</h2>
            <button type="button" className="bg-[#191C1F] text-[#F9FBFC] text-2xl px-4 py-3 rounded-xl">Get started</button>
        </div>
    )
};

CTA.defaultProps = {};

export default CTA;
