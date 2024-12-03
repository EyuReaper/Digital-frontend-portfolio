import React from "react";

const Hero: React.FC = () => {
    return(
        <section className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-8">
            <div className="container mx-auto flex flex-col lg:flex-row item-center">
                <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl font-bold text-secondary">
                        Hey, I'm Eyuel, a Frontend Developer with 3 Years of Experience
                    </h1>
                    <p className="text-lg text-secondary">
                        I create aesthetically pleasing web applications and user-friendly digital experiences.
                    </p>
                    <button className="bg-secondary text-white px-6 py-2 rounded-md">Contact Me</button>
                </div>
                <img src="#" alt="#" className="rounded-full w-64 mt-8 lg:mt-0 " />
            </div>
        </section>
    );
};

export default Hero;