import React from "react";
import { Link } from 'react-router-dom';

const HeaderNavBottom = () => {
    return (
        <>
            <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left mb-16 py-2 px-6 bg-app sm:items-baseline w-full">
                <div className="wrapper flex justify-center mx-auto">
                    <div className="sm:mb-0 self-center">
                        <div className="h-10 flex items-center">
                            <Link to="/all-lots" className="text-lg no-underline text-textblack font-bold hover:text-blue-dark ml-2 px-1">Лоты</Link>
                            <Link to="/create-lot" className="text-lg no-underline text-textblack font-bold hover:text-blue-dark ml-2 px-1">Создать лот</Link>
                            <Link to="/profile" className="text-lg no-underline text-textblack font-bold hover:text-blue-dark ml-2 px-1">Профиль</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderNavBottom;