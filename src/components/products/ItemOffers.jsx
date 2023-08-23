import React, { useEffect, useState } from 'react'
import { getOffers } from '../../api/data'
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

const ItemOffers = () => {
    const [offers, setOffers] = useState([])

    const dataOffers = async () => {
        try {
            const res = await getOffers()
            setOffers(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dataOffers()
    }, [])

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
        document.body.style.overflow ="hidden"
    }

    function afterOpenModal() {
        // subtitle.style.color = '#f00';
        
    }

    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow ="auto"
    }

    return (
        <section className='lg:mt-28 mt-32 relative'>
            <h2 className='text-center text-3xl'>Специальное предложение</h2>
            <p className='uppercase select-none text-6xl tracking-wide z-0 leading-none absolute font-semibold opacity-40 border-solid text-white' style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#2C7CBB" }}>Специальное</p>
            
            <div className=" w-10/12  mx-auto ">
            <p className='uppercase  select-none  right-0 -bottom-8  text-6xl tracking-wide z-0 leading-none absolute font-semibold opacity-40 border-solid text-white  ' style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#2C7CBB" }}>предложение</p>
                <div className='flex flex-col lg:flex-row lg:mx-0 mt-12 leading-4 justify-between gap-10 mb-10 bg-gray-100'>
                    {
                        offers.map((e) =>
                            <div className='flex flex-col  place-items-start bg-white rounded-2xl px-10 py-14 w-full drop-shadow-3xl z-10' key={e.id}>
                                <p className='text-xl mb-8 leading-4 font-semibold items-center text-center self-center'>
                                    {e.title}
                                </p>

                                <div className='h-72 mx-auto self-center'>
                                    <div className='h-48 mx-auto'>
                                        {/* <div className='bg-blue-300 w-0.5 h-48 absolute -z-10 '></div> */}
                                        <img src={e.img} alt="" className='object-contain ' />
                                    </div>
                                </div>

                                <s className=' decoration-red-500 leading-5 text-lg'>

                                    {
                                        (Math.floor(e.price + (e.price * e.discount / 100)).toString().replace(/(\d)(\d*)/, '$1 $2'))
                                    }
                                    {e.measurement}
                                </s>

                                <p className='text-2xl font-semibold mt-4'>
                                    {e.price}  {e.measurement}
                                </p>

                                <div className='w-full block bg-gray-300 h-px mt-3 mb-1'></div>

                                <div>
                                    <p className='flex flex-row gap-1 mt-2 font-normal'>
                                        <span> Расрочка за </span>
                                        <span>
                                            {
                                                Math.floor(e.price / 6)
                                            }
                                        </span>
                                        <span>р/мес</span>
                                    </p>
                                </div>

                                <button onClick={openModal} className='text-white bg-blue-500 px-12 py-4 rounded-md mt-12 self-center cursor-pointer text-base border border-blue-500 transition-all ease-in-out duration-[250ms] hover:opacity-70'>
                                    Заказать сейчас
                                </button>

                            </div>
                        )
                    }
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

export default ItemOffers