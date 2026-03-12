import data from "../utils/data"
import Card from "./card"

const Hero = () => {
  return (
    <main className='h-full grid grid-cols-4 auto-rows-max gap-y-8 px-10'>
      {data.map((item) => {
        return <Card key={item} data={item} />
      })}
    </main>
  )
}

export default Hero
