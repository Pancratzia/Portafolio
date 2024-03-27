import Interests from "./aboutme/Interests"
import Languages from "./aboutme/Languages"


const ExtraInfo = () => {
  return (
    <div className="container grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] gap-5 items-center">
       
        <Interests />
        <Languages />
        
      </div>
  )
}

export default ExtraInfo