import React, { useEffect } from 'react'
import { getOffers } from '../../api/data'

const Header = () => {

        const dataOffers = async () => {
            try {
                const res = await getOffers()
                console.log(res); 
            }   catch ( error) {
                console.log(error);
            }
        }

    useEffect(() => {
        dataOffers()
    },[])

    return (
        <>
            {/* Header start */}
            <header className="header  left-0 right-0 top-0 bg-neutral ">
                <div className="w-10/12 mx-auto ">
                    <div className="mx-auto h-24 flex items-center justify-between">
                        <a className="text-ms lg:text-3xl text-blue-500 font-semibold uppercase" to="/"> окно<span className="text-black">профи</span>  </a>
                        <div className="space-x-4">
                            <button className='cursor-pointer text-white bg-blue-500 text-base px-5 py-2 border border-blue-500 rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70'> Калькулятор окон </button>
                            <button className='cursor-pointer text-blue-500 border-blue-500  text-base px-5 py-2 border rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70'> Бесплатный замер </button>
                        </div>
                        <div className='flex gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
                                <path d="M8.6803 3.47803C7.84521 3.47803 7.02887 3.72566 6.33452 4.18961C5.64017 4.65356 5.09899 5.31299 4.77941 6.08452C4.45984 6.85604 4.37622 7.705 4.53914 8.52405C4.70206 9.34309 5.10419 10.0954 5.69469 10.6859C6.28519 11.2764 7.03753 11.6786 7.85657 11.8415C8.67562 12.0044 9.52458 11.9208 10.2961 11.6012C11.0676 11.2816 11.7271 10.7404 12.191 10.0461C12.655 9.35175 12.9026 8.53541 12.9026 7.70032C12.9026 6.5805 12.4577 5.50654 11.6659 4.71471C10.8741 3.92287 9.80012 3.47803 8.6803 3.47803ZM8.6803 10.4489C8.13669 10.4489 7.60529 10.2877 7.15329 9.98565C6.7013 9.68363 6.34901 9.25437 6.14098 8.75214C5.93295 8.24991 5.87852 7.69727 5.98457 7.1641C6.09062 6.63094 6.3524 6.1412 6.73679 5.75681C7.12118 5.37241 7.61092 5.11064 8.14409 5.00459C8.67725 4.89854 9.22989 4.95297 9.73212 5.161C10.2344 5.36903 10.6636 5.72131 10.9656 6.17331C11.2676 6.62531 11.4288 7.15671 11.4288 7.70032C11.4269 8.428 11.1365 9.12521 10.6212 9.63907C10.106 10.1529 9.40798 10.4415 8.6803 10.4415V10.4489Z" fill="#2C7CBB" />
                                <path d="M8.68038 7.29447e-10C6.38516 0.00191703 4.18396 0.912019 2.55755 2.53153C0.931137 4.15104 0.0116797 6.34835 0 8.64354C0 12.0847 1.93061 14.9659 3.34541 17.066L3.60332 17.4492C5.01095 19.4893 6.52102 21.4568 8.12773 23.3442L8.68775 24L9.24778 23.3442C10.8543 21.4567 12.3643 19.4892 13.7722 17.4492L14.0301 17.0586C15.4375 14.9586 17.3681 12.0847 17.3681 8.64354C17.3564 6.34707 16.436 4.14865 14.808 2.52893C13.18 0.909213 10.9769 -2.97374e-05 8.68038 7.29447e-10ZM12.7995 16.2112L12.5342 16.6018C11.2668 18.5029 9.58674 20.6325 8.68038 21.6862C7.81087 20.6325 6.09395 18.5029 4.82653 16.6018L4.56862 16.2112C3.26435 14.2659 1.47375 11.6058 1.47375 8.61406C1.47375 7.66767 1.66015 6.73055 2.02232 5.8562C2.38449 4.98185 2.91532 4.1874 3.58452 3.5182C4.25372 2.84901 5.04817 2.31817 5.92252 1.956C6.79687 1.59383 7.73399 1.40743 8.68038 1.40743C9.62677 1.40743 10.5639 1.59383 11.4382 1.956C12.3126 2.31817 13.107 2.84901 13.7762 3.5182C14.4454 4.1874 14.9763 4.98185 15.3384 5.8562C15.7006 6.73055 15.887 7.66767 15.887 8.61406C15.887 11.6352 14.1038 14.2954 12.7995 16.2112Z" fill="#2C7CBB" />
                            </svg>

                            <div className='w-40 text-secondary text-gray-600'>
                                <p className="text-sm ">г. Челябинск, ул. Валдайская 25, оф.51</p>
                                <p className='text-xs mt-2'>Пн-Сб с 9:00 до 18:00</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <a href="tel:998910910090" className='font-semibold lg:text-xl text-black '>+7 (800) 000-00-00</a>
                            <div className="text-sm text-secondary text-gray-600">
                                или
                                <a href="/" className='text-primary underline text-blue-500'> закажите звонок</a>
                            </div>
                        </div>
                    </div>
                    {/* Navbar start */}
                    <nav className='lg:flex bg-gray-100 rounded-md py-4 place-content-between text-base text-secondary mt-4 px-16 flex-wrap'>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Окна</a>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Остекление балконов</a>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Остекление коттеджей</a>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Обслуживание и ремонт</a>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Цены</a>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Отзывы</a>
                        <a className='whitespace-nowrap mx-1 transition-all ease-in-out duration-[250ms] hover:opacity-70' href="#">Контакты</a>
                    </nav>
                    {/* Navbar end */}
                </div>
            </header>
            {/* Header end */}

            {/* Main start */}
            <main className='mt-20 lg:mt-0 content min-h-[79vh] relative'>
                <div className="opacity: 1">
                    <div className="bg-neutral relative ">
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
                                                    <path d="M1 4.80952L4.11111 9L9 1" stroke="#2C7CBB" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p>Гарантия до 10 лет</p>
                                        </div>
                                        <div className="flex space-x-1">
                                            <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M1 4.80952L4.11111 9L9 1" stroke="#2C7CBB" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p>Рассрочка 0% без переплат</p>
                                        </div>
                                        <div className="flex space-x-1">
                                            <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M1 4.80952L4.11111 9L9 1" stroke="#2C7CBB" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <p>Бесплатный замер</p>
                                        </div>
                                    </div>
                                    <a href="#" className='cursor-pointer text-[#7DAFE0] bg-white px-8 py-3 rounded-md font-semibold mt-10 transition-all ease-in-out duration-[250ms] hover:opacity-70'>Рассчитать стоимость</a>
                                </div>
                                <div className="flex items-end md:items:center background absolute h-96 right-0 lg:right-6 bottom-6 lg:bottom-auto ">
                                    <img src="../../../public/mainWindow.png" className='lg:ml-auto object-contain sm:object-cover h-72 lg:h-auto w-[300px] sm:w-auto' alt="" />
                                </div>
                            </div>
                        </section>
                        <section className='lg:mt-28 mt-32'>
                            <h2 className='text-center text-3xl'>Специальное предложение</h2>
                            <p className='uppercase select-none text-6xl tracking-wide z-0 leading-none absolute font-semibold opacity-40 border-solid text-white' style={{WebkitTextStrokeWidth : "1px" , WebkitTextStrokeColor : "#2C7CBB"}}>Специальное</p>
                            <div className="container">

                            </div>
                        </section>
                    </div>
                </div>

            </main>
            {/* Main end */}
        </>
    )
}

export default Header