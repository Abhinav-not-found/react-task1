import Button from "./button"

const Card = ({ data }) => {
  return (
    <div className='size-80 shadow-md inset-shadow-black/10 inset-shadow-2xs rounded-xl p-4 hover:-translate-y-2 transition-all'>
      <div className='w-full h-50 rounded-lg'>
        <img
          src={data.image}
          alt='product-image'
          className='object-contain h-full w-full'
        />
      </div>
      <div className='mt-2 flex flex-col justify-between'>
        <p className='text-lg hover:underline cursor-pointer underline-offset-2'>
          {data.name}
        </p>
        <div className='flex items-center justify-between mt-1'>
          <div className='flex gap-4 items-center'>
            <p className='text-xl font-medium'>{data.price}</p>
            <p className='text-neutral-500 text-sm border px-2 rounded-full'>{data.category}</p>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}

export default Card
