import Card from "../ui/card"

const Hero = ({ data }) => {
  return (
    <main className='flex justify-center '>
      <div className='h-full grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 auto-rows-max gap-y-8 gap-x-8 lg:px-10'>
        {data.map((item) => {
          return <Card key={item.id} data={item} />
        })}
      </div>
    </main>
  )
}

export default Hero
