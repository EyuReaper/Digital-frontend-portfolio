import React from "react";

const Navbar: React.FC = () => {
    return (
        <header className="bg-primary p-4 shadow-md">
           <div className="container mx-auto flex justify-between item-center">
            <div className="text-2xl font-bold text-secondary">Eyu G.</div>
                <nav>
                    <ul className="flex space-x-6 text-secondary">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Works</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                    </nav>      
                    <button className="p-2 bg-secondary text-white rounded-full">🌙</button>
            </div>       
        </header>
    );
};

export default Navbar;