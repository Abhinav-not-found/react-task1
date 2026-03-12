import Button from "./button"

const Card = ({ data }) => {
  return (
    <div className='size-80 shadow-md inset-shadow-black/10 inset-shadow-2xs rounded-xl p-4'>
      <div className='w-full h-50 rounded-lg'>
        <img
          src={data.image}
          alt='product-image'
          className='object-contain h-full w-full'
        />
      </div>
      <div className='mt-2 flex flex-col justify-between'>
        <p className='text-lg'>{data.name}</p>
        <div className='flex items-center justify-between mt-1'>
          <p className='text-xl font-medium'>₹{data.price}</p>
          <Button></Button>
        </div>
      </div>
    </div>
  )
}

export default Card
