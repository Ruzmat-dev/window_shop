import React from 'react'

const Swiper = () => {
  return (
    <section className='w-full  mx-auto lg:container px-0'>
    <div className="relative   w-10/12  mx-auto  mt-20 lg:mt-10  pt-20 pb-20 lg:py-22 bg-center bg-cover lg:rounded-2xl flex items-center  bg-[#7DAFE0] overflow-hidden">
        <div className="container flex flex-col lg:ml-20 mx-auto text-white items-start z-10 lg:max-w-2xl">
            <h2 className='lg:text-5xl text-3xl font-semibold lg:w-128 leading-8'>
                Остекление квартир и домов от производителя
            </h2>
            <p className='my-8 text-ms font-light'>Установим без наценок посредников за 5 дней с расширенной гарантией</p>
            <div className='flex flex-row font-light gap-5'>
                <div className="flex space-x-1">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 4.80952L4.11111 9L9 1" stroke="#2C7CBB" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Гарантия до 10 лет</p>
                </div>
                <div className="flex space-x-1">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 4.80952L4.11111 9L9 1" stroke="#2C7CBB" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Рассрочка 0% без переплат</p>
                </div>
                <div className="flex space-x-1">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center z-10 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M1 4.80952L4.11111 9L9 1" stroke="#2C7CBB" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Бесплатный замер</p>
                </div>
            </div>
            <a href="#calculator" className='cursor-pointer text-[#7DAFE0] bg-white px-8 py-3 rounded-md font-semibold mt-10 transition-all ease-in-out duration-[250ms] hover:opacity-70'>Рассчитать стоимость</a>
        </div>
        <div className="flex items-end md:items:center background absolute h-96 right-0 lg:right-6 bottom-6 lg:bottom-auto ">
            <img src="../../../public/mainWindow.png" className='lg:ml-auto object-contain sm:object-cover h-72 lg:h-auto w-[300px] sm:w-auto' alt="" />
        </div>
    </div>
</section>
  )
}

export default Swiper