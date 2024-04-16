import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='h-full md:w-1/2 p-10 flex flex-col justify-center items-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-primary'>SMARTPREP</h1>
                <p className='text-center mt-8 text-xs md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sint facere asperiores labore laboriosam aspernatur magnam harum ducimus accusantium tempore aliquam voluptas nostrum laudantium quisquam ipsam libero impedit doloremque veniam.</p>
                <button className=' md:w-48 md:h-12 w-1/2 mt-20'>
                    <span className="span-mother">
                        <span>G</span>
                        <span>e</span>
                        <span>t</span>
                        <span className='w-1'></span>
                        <span>S</span>
                        <span>t</span>
                        <span>a</span>
                        <span>r</span>
                        <span>t</span>
                        <span>e</span>
                        <span>d</span>
                    </span>
                    <span className="span-mother2">
                        <span>Y</span>
                        <span>a</span>
                        <span>Y</span>
                        <span>!</span>
                        <span>!</span>
                    </span>
                </button>

            </div>
            <div className='h-full hidden w-1/2 md:flex justify-center items-center'>
                <img className='w-3/4' src="landing.svg" alt="landing img" />
            </div>
        </div>

    )
}

export default Hero
