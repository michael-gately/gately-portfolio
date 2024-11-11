import {Rubik, Poppins} from 'next/font/google'
import Link from 'next/link'

const rubik = Rubik({
subsets: ["latin"],
weight: "300",
style: "normal"
})
 
const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "500",
style: "normal"
})

const lowerPoppins = Poppins({
  subsets: ['latin'],
  weight: "300",
  style: "normal"
  })


export default function Home() {
return (
<main className="text-lg">
  <div className='flex gap-5 pb-10'>
    <a href="/" className='text-lg'>Home</a>
    <a href="/projects" className='text-lg'>Projects</a>
    <a href="https://github.com/michael-gately" className='text-lg'>Github</a>
  </div>
  <div className='flex'>
    <img className="border-2" src='gately-mike.jpg'/>
      <div className='pl-5 col-span-2'>
        <p className={bodyPoppins.className.concat(" ", "text-5xl pb-2")}>Michael Gately</p>
        <p className='pl-5'>Backend Software Engineer</p>
        <p className='pl-5'>Specializing in Python and Django</p>
        <p className='pl-5'>3 Years of Experience</p>
        <p className='pl-5'>Quick Learner and Great Communicator</p>
      </div>
  </div>
  <div className='pt-10 flex-col'>
    <p className='text-4xl pb-5'>About Me</p>
    <p className='pb-5'>With three years of experience as a software engineer at STRATIS IoT,
      I have developed a strong and diverse technical skill set, especially in backend development.
      I regularly build internal tools, resolve complex bugs, and contribute to new feature development,
      deepening my expertise in technologies such as Python, TypeScript, React-Redux, Kubernetes, Azure,
      gRPC, GraphQL, and Django ORM. I am dedicated to continuously advancing my skills and making impactful contributions to the team.</p>
    <p className='text-4xl pb-5'>Experience</p>
    <p className=''>STRATIS IoT - Backend Python Developer II</p>
    <ul className='list-disc pl-5'>
      <li>Experienced in optimizing database queries and managing data models using Django ORM for efficient data retrieval and storage.</li>
      <li>Proven track record of delivering high-quality code following best practices such as code reusability, modularity, and maintainability in Python and Django environments.</li>
      <li>Proficient in applying Domain-Driven Design principles to architect and develop backend solutions, ensuring alignment with business requirements and promoting maintainability, scalability, and clarity.</li>
      <li>Skilled in designing and implementing RESTful APIs using Django Rest Framework to facilitate seamless communication between front-end and back-end systems. </li>
    </ul>
    <p className='pt-2'>Northrop Grumman - Software Engineer Intern</p>
    <ul className='list-disc pl-5 pb-5'>
      <li>Collaborated within an Agile framework alongside a team of software engineers to proficiently develop unit test software solutions in C++ and C#.</li>
      <li>Enhanced team productivity by introducing a streamlined test output framework capable of exporting data to Excel or CSV formats, fostering clearer insights and smoother workflows.</li>
      <li>Designed a unit test master suite that runs an input of unit tests on VxWorks 7 RTOS to increase team efficiency.</li>
    </ul>
    <p className='text-4xl pb-5'>Education</p>
    <p className='pt-2'>Computer Engineering Major - Bachelor of Science - San Diego State University</p>
    <ul className='list-disc pl-5 pb-5'>
      <li>Studied a wide range of computer principles like Computer Architecture, Embedded Systems, and Computer Logic.</li>
      <li>Computer Science Minor that let me learn more about data structures, algorithms, and system administration.</li>
    </ul>
  </div>
</main>
)
}