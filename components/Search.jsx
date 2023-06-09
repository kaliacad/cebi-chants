import React from 'react'
import {ImSearch} from 'react-icons/im'

const Search = () => {
  return (
      <section>
          <div className='flex w-[364px] min-[790px]:w-[655px] h-[45px] border-2 mb-6 
          border-style-solid rounded-lg py-1.5 px-4'
          >
              <span className=''>{<ImSearch size={30} color="#ededed" />}</span>
              <input type="text" placeholder='Trouver un chant' className='border-none
               w-[250px] min-[790px]:w-[546px] text-black outline-none my-1 ml-4'
              />
              <span className=''>{<ImSearch size={30}  color="#000"/>}</span>
          </div>
    </section>
  )
}

export default Search