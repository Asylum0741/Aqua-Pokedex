import React from 'react'
import { LucideSearch } from 'lucide-react'

const Search = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col gap-7 py-5'>
        <div className='font-jaro text-4xl sm:text-6xl '>Search Pokemon</div>
        <div className='flex flex-row justify-between items-center gap-2 sm:gap-4'>
            <input type="text" className="sm:w-xl h-15 caret-teal-700 pl-4 focus:outline-none relative rounded-[15px] focus:shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] border-[3px] border-teal-500 text-teal-700 font-bold text-xl font-mont" />
            <button className='flex bg-teal-500 h-14 w-14 sm:h-16 sm:w-16 rounded-[100%] items-center justify-center shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] active:scale-[0.95]' >
                <LucideSearch color='white' size={32}/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Search
