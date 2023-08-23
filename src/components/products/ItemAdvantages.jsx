import React, { useEffect, useState } from 'react'
import { getAdvantages } from '../../api/data'

const ItemAdvantages = () => {
    const [advantages , setAdvantages] = useState([])

    const dataAdvantages = async () => {
        try {
            const res = await getAdvantages()
            setAdvantages(res.data); 
        } catch (error) {
            console.log(error);
        }
    }
    

useEffect(() => {
    dataAdvantages()
},[])

    return (
        <section className='w-10/12  mx-auto mt-15 lg:mt-20'>
            <div className="mx-auto">
                <h2 className='text-2xl w-52 lg:w-auto leading-6 lg:leading-9 lg:text-4xl font-semibold'> Почему выбирают нас? </h2>
                <div >
                    <div className='flex justify-between mt-12'>
                        {
                            advantages.map((e) => (
                                <div className='flex flex-col  lg:w-50' key={e.id}>
                                    <img src={e.img} alt="" className='object-contain w-16 h-16' />
                                    <p className='mt-7 text-xl font-semibold lg:text-2xl'>{e.title}</p>
                                    <p className='text-gray-400 w-44 text-sm xl:text-base font-light'>{e.description}</p>
                                </div>
                            )
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemAdvantages