
import React from 'react'
import Wrapper from '@/components/Wrapper'
import { useRouter  } from 'next/navigation'
import ProductCard from '@/components/ProductCard'

const Categories = () => {
 


  return (
    <section>
    <div className='blackbg my-8 bg-black text-white  '>
        <div className='text-5xl pt-14 font-bold text-center popinsfont'>Shop </div>
    </div>

    <Wrapper>
        <ProductCard/>


    </Wrapper>

    </section>



  )
}

export default Categories