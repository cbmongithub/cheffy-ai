import { useState } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Recipe = ({
  recipe,
  timestamp,
  title,
  description,
  ingredientsTitle,
  ingredients,
  instructionsTitle,
  instructions,
  viewRecipe,
  showLess,
}) => {
  const [showRecipe, setShowRecipe] = useState(false)
  return (
    <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
      <div className='flex justify-between items-center mb-5'>
        <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
          <svg
            className='mr-1 w-3 h-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
              clipRule='evenodd'
            ></path>
            <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
          </svg>
          <p>{recipe}</p>
        </span>
        <span className='text-sm'>
          {`${dayjs(timestamp ? timestamp : 1688320988).fromNow(true)} ago`}
        </span>
      </div>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
        {title}
      </h2>
      <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
        {description}
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <Image
            className='w-7 h-7 rounded-full'
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
            alt='Christian Martinez Avatar'
            width={28}
            height={28}
          />
          <span className='font-medium text-zinc-800 dark:text-zinc-50'>
            Cheffy
          </span>
        </div>
        <a
          aria-label='Cheffy AI Recipe Link'
          className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline cursor-pointer'
          onClick={() => setShowRecipe(!showRecipe)}
        >
          {showRecipe ? { showLess } : { viewRecipe }}
        </a>
      </div>
      {showRecipe ? (
        <div className='text-zinc-900 py-5'>
          <br />
          <p className='font-bold'>{ingredientsTitle}:</p>
          {ingredients.map((ingredient, i) => {
            return <p key={i}>- {ingredient}</p>
          })}
          <br />
          <p className='font-bold'>{instructionsTitle}:</p>
          {instructions.map((instruction, i) => {
            return (
              <p key={i}>
                {i + 1}- {instruction}
              </p>
            )
          })}
        </div>
      ) : null}
    </article>
  )
}

export default Recipe
