const Button = ({children}) => {
  return (
    <button
      type='button'
      className='bg-black text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-neutral-700'
    >
      {children}
    </button>
  )
}

export default Button
