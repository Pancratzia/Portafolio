import { socials } from "../../../data/data";
import SocialSquare from "../SocialSquare";


const Socials = () => {
  return (
    <div className="w-full my-5 py-2">
        <div className="flex justify-center items-center gap-6">
            {socials.map((social, index) => (
                <SocialSquare
                    key={index}
                    Icon={social.Icon}
                    text={social.text}
                    links={social.links}
                />
            ))}
        </div>
      </div>
  )
}

export default Socials