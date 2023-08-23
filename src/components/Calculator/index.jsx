import React, { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '40%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-35%, -35%)',
    zIndex: "1000",

  }
};

const Calculator = () => {

  const [changeBtnHeaderCalculation, setChangeBtnHeaderCalculation] = useState(false)
  const [windowTypes, setWindowTypes] = useState({ bilateral: true, trilateral: false, balconyBlock: false })
  const [sliderValue, setSliderValue] = useState(1250);
  const [sliderValueTwo, setSliderValueTwo] = useState(1250);



  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden"
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';

  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto"
  }


  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    console.log(sliderValue);
  };

  const handleSliderChangeTwo = (event) => {
    setSliderValueTwo(event.target.value);
    console.log(sliderValue);
  };

  const getValueSize = (e) => {
    setSliderValue(e.target.value);
  }

  const getValueSizeTwo = (e) => {
    setSliderValueTwo(e.target.value)
  }

  return (
    <section className='relative mt-16 lg:mt-20' >

      <div className="w-10/12  mx-auto mt-14" >
        <p className='text-6xl uppercase absolute text-transparent opacity-40 -top-11 left-0' style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#2C7CBB" }} >КАЛЬКУЛЯТОР СТОИМОСТИ </p>
        <div className="relative z-40 mt-24  bg-white px-4 py-12 lg:py-17 lg:px-17 xl:px-28 drop-shadow-3xl-2xl rounded-2xl">
          <h2 className='text-xl lg:text-2xl font-semibold leading-6 lg:leading-8 text-center'>Калькулятор стоимости</h2>
          <div className="flex justify-center space-x-2 my-8 lg:space-x-5 lg:my-14">
            <button onClick={() => setChangeBtnHeaderCalculation(false)} className={changeBtnHeaderCalculation ? "cursor-pointer text-black bg-white text-base px-14 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70" : "cursor-pointer text-white bg-blue-500 text-base px-14 py-2 border border-blue-500 rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70"}> Калькулятор окон </button>
            <button onClick={() => setChangeBtnHeaderCalculation(true)} className={changeBtnHeaderCalculation ? "cursor-pointer text-white bg-blue-500 text-base px-14 py-2 border border-blue-500 rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70" : "cursor-pointer text-black bg-white text-base px-14 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70"}> Калькулятор балконов </button>
          </div>
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-16 justify-between">
              <div className="flex flex-col grow ">
                <div className='w-full'>
                  <p className='text-sm lg:text-md font-medium'> Тип окна </p>
                  <div className='flex mt-8 gap-5'>
                    <button onClick={() => setWindowTypes({ bilateral: true, trilateral: false, balconyBlock: false })} className={windowTypes.bilateral ? "cursor-pointer text-white bg-blue-500 text-base px-2 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70" : "cursor-pointer text-black bg-white text-base px-2 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70"}> Двустворчатое </button>
                    <button onClick={() => setWindowTypes({ bilateral: false, trilateral: true, balconyBlock: false })} className={windowTypes.trilateral ? "cursor-pointer text-white bg-blue-500 text-base px-2 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70" : "cursor-pointer text-black bg-white text-base px-2 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70"}> Трехстворчатое </button>
                    <button onClick={() => setWindowTypes({ bilateral: false, trilateral: false, balconyBlock: true })} className={windowTypes.balconyBlock ? "cursor-pointer text-white bg-blue-500 text-base px-2 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70" : "cursor-pointer text-black bg-white text-base px-2 py-2 border  rounded-md transition-all ease-in-out duration-[250ms] hover:opacity-70"}> Балконный блок </button>
                  </div>
                </div>

                <div className="mt-8 lg:mt-10 flex items-center gap-2">
                  <p className='font-medium text-sm'> Тип открывания </p>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="8.5" stroke="#A5A5A5" />
                      <path d="M8.42 11.096C8.42 10.744 8.496 10.416 8.648 10.112C8.8 9.808 8.984 9.548 9.2 9.332C9.416 9.116 9.632 8.912 9.848 8.72C10.064 8.52 10.248 8.304 10.4 8.072C10.552 7.832 10.628 7.58 10.628 7.316C10.628 6.916 10.488 6.612 10.208 6.404C9.936 6.188 9.58 6.08 9.14 6.08C8.26 6.08 7.696 6.468 7.448 7.244L6.5 6.716C6.7 6.156 7.04 5.732 7.52 5.444C8 5.148 8.544 5 9.152 5C9.864 5 10.472 5.2 10.976 5.6C11.488 6 11.744 6.556 11.744 7.268C11.744 7.604 11.668 7.92 11.516 8.216C11.364 8.512 11.18 8.768 10.964 8.984C10.748 9.2 10.532 9.412 10.316 9.62C10.1 9.82 9.916 10.048 9.764 10.304C9.612 10.552 9.536 10.816 9.536 11.096H8.42ZM8.972 13.688C8.756 13.688 8.572 13.612 8.42 13.46C8.268 13.308 8.192 13.124 8.192 12.908C8.192 12.692 8.268 12.508 8.42 12.356C8.572 12.204 8.756 12.128 8.972 12.128C9.196 12.128 9.38 12.204 9.524 12.356C9.676 12.508 9.752 12.692 9.752 12.908C9.752 13.124 9.676 13.308 9.524 13.46C9.38 13.612 9.196 13.688 8.972 13.688Z" fill="#A5A5A5" />
                    </svg>
                  </div>
                </div>

                <div className='flex flex-row mt-6 gap-4 lg:gap-8 flex-wrap'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="46" viewBox="0 0 62 46" fill="none">
                      <g clip-path="url(#clip0_101_2169)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H31V44.518H1V1Z" fill="white" stroke="#2C7CBB" stroke-width="2" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31 1H61V44.518H31V1Z" fill="white" stroke="#2C7CBB" stroke-width="2" />
                        <path d="M16.001 27.0334C18.3616 27.0334 20.2754 25.1197 20.2754 22.759C20.2754 20.3983 18.3616 18.4846 16.001 18.4846C13.6403 18.4846 11.7266 20.3983 11.7266 22.759C11.7266 25.1197 13.6403 27.0334 16.001 27.0334Z" stroke="#2C7CBB" />
                        <path d="M31 44.518L46 1L61 44.518L31 22.759L61 1" stroke="#2C7CBB" stroke-width="1.00157" stroke-linejoin="round" stroke-dasharray="2 2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_101_2169">
                          <rect width="62" height="45.518" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="46" viewBox="0 0 62 46" fill="none">
                      <g clip-path="url(#clip0_101_2174)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H31V44.518H1V1Z" fill="white" stroke="#A5A5A5" stroke-width="2" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31 1H61V44.518H31V1Z" fill="white" stroke="#A5A5A5" stroke-width="2" />
                        <path d="M31 44.518L46 1L61 44.518L31 22.759L61 1" stroke="#A5A5A5" stroke-width="1.00157" stroke-linejoin="round" stroke-dasharray="2 2" />
                        <path d="M1 44.518L31 22.759L1 1" stroke="#A5A5A5" stroke-width="1.00157" stroke-linejoin="round" stroke-dasharray="2 2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_101_2174">
                          <rect width="62" height="45.518" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className='mt-8'>
                  <p className='text-sm lg:text-md font-medium'> Тип дома </p>
                  <div className='flex flex-col lg:flex-row gap-4 lg:gap-8  mt-4'>
                    <div className="flex place-items-center">
                      <input type="radio" id='calculaton-1' name="typeHose" checked className='h-5 w-5 mr-2' />
                      <label for="calculaton-1" className="opacity-60 cursor-pointer inline-block text-black">Панельный</label>
                    </div>
                    <div className="flex place-items-center">
                      <input type="radio" id='calculaton-2' name="typeHose" className='h-5 w-5 mr-2' />
                      <label for="calculaton-2" className="opacity-60 cursor-pointer inline-block text-black">Кирпичный</label>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className='text-sm lg:text-md font-medium'> Тип профиля </p>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8  mt-4">
                      <div className='flex place-items-center'>
                        <input type="radio" name='profileType' id='screen-1' className='h-5 w-5 mr-2' />
                        <label for="screen-1" className='opacity-60 cursor-pointer inline-block text-black'>Эконом (Alpenprof)</label>
                      </div>
                      <div className='flex place-items-center'>
                        <input type="radio" name='profileType' id='comfort-1' className='h-5 w-5 mr-2' />
                        <label for="comfort-1" className='opacity-60 cursor-pointer inline-block text-black'>Комфорт (КБЕ, Grain) </label>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8  ">
                      <div className='flex place-items-center'>
                        <input type="radio" name='profileType' id='standard-1' className='h-5 w-5 mr-2' />
                        <label for="standard-1" className='opacity-60 cursor-pointer inline-block text-black'>Стандарт (GoodWin, EXPROF)</label>
                      </div>
                      <div className='flex place-items-center'>
                        <input type="radio" name='profileType' id='premum-1' className='h-5 w-5 mr-2' />
                        <label for="premum-1" className='opacity-60 cursor-pointer inline-block text-black'>Премиум (Veka, Rehau)</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className='flex gap-5 '>
                    <div className='flex flex-col'>
                      <p className='text-sm lg:text-md font-medium'> Дополнительно </p>

                      <div className='flex flex-col mt-4'>
                        <div className='flex place-items-center'>
                          <input type="radio" id='mounting-1' className='h-5 w-5 mr-2' />
                          <label for="mounting-1" className='opacity-60 cursor-pointer inline-block text-black'>Монтажные работы</label>
                        </div>
                        <div className='flex place-items-center mt-4'>
                          <input type="radio" id='windowsill-1' className='h-5 w-5 mr-2' />
                          <label for="windowsill-1" className='opacity-60 cursor-pointer inline-block text-black'>Подоконник, водоотлив</label>
                        </div>
                      </div>

                    </div>
                    <div>
                      <p className='text-sm lg:text-md font-medium'> Ламинация </p>
                      <div className='flex flex-col mt-4'>
                        <div className='flex place-items-center'>
                          <input type="radio" name='lamination' id='withoutLamination-1' className='h-5 w-5 mr-2' />
                          <label for="withoutLamination-1" className='opacity-60 cursor-pointer inline-block text-black'>Без ламинации</label>
                        </div>
                        <div className='flex place-items-center mt-4'>
                          <input type="radio" name='lamination' id='withLamation-1' className='h-5 w-5 mr-2' />
                          <label for="withLamation-1" className='opacity-60 cursor-pointer inline-block text-black'>С ламинацией</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">

                <div className='ml-16'>
                  <p className='text-sm lg:text-md font-medium'> Размеры </p>
                  <div className='flex flex-row mt-4 '>
                    <div className="flex flex-row gap-6 place-items-center text-gray-500">
                      <p className='text-sm text-black font-medium opacity-60'>Ширина</p>
                      <input type="number" onChange={getValueSize} className='opacity-60 border border-[#A5A5A5] w-16 rounded-md text-center focus:outline-blue-500 p-1.5' placeholder='2500' />
                    </div>

                    <div className="flex flex-row gap-6 place-items-center text-gray-500 ml-16">
                      <p className='text-sm text-black font-medium opacity-60'>Высота</p>
                      <input type="number"  onChange={getValueSizeTwo} className='opacity-60 border border-[#A5A5A5] w-16 rounded-md text-center focus:outline-blue-500 p-1.5' placeholder='2500' />
                    </div>
                  </div>
                </div>

                <div className="relative ">
                  <div className="flex place-content-center mt-12 -ml-10">
                    <div className="flex flex-col   mr-4 place-items-center">
                      <span className='text-sm text-[#C4C4C4] font-medium text-center'>2500</span>
                      <input    value={sliderValue} onChange={handleSliderChange} type="range" className='-rotate-90 w-56 grow  accent-blue-500 ' aria-orientation='vertical' max="2500" min="800" />
                      <p className='items-center text-center text-blue-500 text-base font-medium -rotate-90  mr-14 mt-32 absolute'>{sliderValue} <span className='ml-1'>mm</span></p>
                      <span className='text-sm text-[#C4C4C4] font-medium text-center'>800</span>
                    </div>
                    <div className="flex shrink-0 py-12 px-3 bg-blue-500 bg-opacity-5 rounded-2xl">
                      <img src="../../../public/images/calculation/image1.png" alt="" />
                    </div>
                  </div>
                  <div className="ml-14  w-full">
                    <input type="range" value={sliderValueTwo} onChange={handleSliderChangeTwo} className='mt-5 ml-24 w-72 accent-blue-500' max="2500" min="800" />
                    <p className='items-center text-center text-blue-500 text-base font-medium'>{sliderValueTwo} <span className='ml-1'>mm</span></p>
                    <div className="flex justify-between">
                      <span className='text-sm text-[#C4C4C4] font-medium text-center' > 800 </span>
                      <span className='text-sm text-[#C4C4C4] font-medium text-center' > 2500 </span>
                    </div>
                    <div className="mt-5">
                      <div>
                        <div className='flex justify-between'>
                          <div className='flex items-center gap-2'>
                            <p className='font-medium text-sm'> Тип открывания </p>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="8.5" stroke="#A5A5A5" />
                                <path d="M8.42 11.096C8.42 10.744 8.496 10.416 8.648 10.112C8.8 9.808 8.984 9.548 9.2 9.332C9.416 9.116 9.632 8.912 9.848 8.72C10.064 8.52 10.248 8.304 10.4 8.072C10.552 7.832 10.628 7.58 10.628 7.316C10.628 6.916 10.488 6.612 10.208 6.404C9.936 6.188 9.58 6.08 9.14 6.08C8.26 6.08 7.696 6.468 7.448 7.244L6.5 6.716C6.7 6.156 7.04 5.732 7.52 5.444C8 5.148 8.544 5 9.152 5C9.864 5 10.472 5.2 10.976 5.6C11.488 6 11.744 6.556 11.744 7.268C11.744 7.604 11.668 7.92 11.516 8.216C11.364 8.512 11.18 8.768 10.964 8.984C10.748 9.2 10.532 9.412 10.316 9.62C10.1 9.82 9.916 10.048 9.764 10.304C9.612 10.552 9.536 10.816 9.536 11.096H8.42ZM8.972 13.688C8.756 13.688 8.572 13.612 8.42 13.46C8.268 13.308 8.192 13.124 8.192 12.908C8.192 12.692 8.268 12.508 8.42 12.356C8.572 12.204 8.756 12.128 8.972 12.128C9.196 12.128 9.38 12.204 9.524 12.356C9.676 12.508 9.752 12.692 9.752 12.908C9.752 13.124 9.676 13.308 9.524 13.46C9.38 13.612 9.196 13.688 8.972 13.688Z" fill="#A5A5A5" />
                              </svg>
                            </div>
                          </div>
                          <div className='text-xl font-semibold'>{Math.floor(sliderValue * sliderValueTwo /100).toString().replace(/(\d)(\d*)/, '$1 $2')} руб.</div>
                        </div>
                        <div className='flex justify-between mt-4'>
                          <div className='text-base font-medium'> Расрочка за { Math.floor((sliderValue * sliderValueTwo) / 600).toString().replace(/(\d)(\d*)/, '$1 $2') } р/мес. </div>
                          <div>
                            <s className=' decoration-red-500 leading-5 text-lg '>
                              <span className=''> { Math.floor(sliderValue * sliderValueTwo * 1.1 /100).toString().replace(/(\d)(\d*)/, '$1 $2')  } руб.</span>
                            </s>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={openModal} className='text-white bg-blue-500 px-12 py-4 rounded-md font-semibold mt-8 ml-auto transition-all ease-in-out duration-[250ms] hover:opacity-70'>
              Получить расчет
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      // className="bg-slate-100"
      >
        <div className=' w-[280px] sm:w-[440px] h-[457px] lg:w-[575px] lg:h-[491px] rounded-2xl relative flex flex-col py-9 px-[10px] sm:px-[29px] lg:py-12 lg:px-12  z-50'>
          <button onClick={closeModal}>close</button>
          <p></p>
          <p></p>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Modal>
    </section>
  )
}

export default Calculator