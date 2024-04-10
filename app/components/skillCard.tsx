import { Poppins } from 'next/font/google'


const bodyPoppins = Poppins({
    subsets: ['latin'],
    weight: "300",
    style: "normal"
    })

    const SkillCard = ({ source, caption, exClass = "" }: { source: string; caption: string; exClass?: string }) => {
        return (
          <div className={bodyPoppins.className.concat(" ", " p-1 m-5 border text-center text-sm md:text-base  rounded-lg col-span-1 grid grid-rows-2")}>
            {source && <img className={exClass.concat(" ", " p-8 row-span-1 h-auto w-full")} src={source} alt={caption} />}
            <div className=" p-1 row-span-1">{caption}</div>
          </div>
        );
      };
      
      export default SkillCard;