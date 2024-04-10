import { Poppins } from 'next/font/google'
import SkillCard from '../components/skillCard'


const bodyPoppins = Poppins({
subsets: ['latin'],
weight: "300",
style: "normal"
})

export default function Projects() {
return (
<div className='pl-8 lg:pl-0 pt-8 pr-16'>
    <div className={bodyPoppins.className.concat(" ", " text-left text-base md:text-lg")}>
        Skills
    </div>
    <div className='md:grid grid-cols-4 pt-8'>
        <SkillCard source="file-type-python.svg" caption="My preferred backend coding language is Python.
         But I also have experience in Go and Ruby." />
        <SkillCard source="django.svg" caption="Experience with the Django Framework.
         Expecially with using the ORM and optimizing queries." />
        <SkillCard source="github.svg" caption="Knowledge of version control and
         peer code review using Git and Github." />
        <SkillCard source="vs-code.svg" caption="I use VS code as my main IDE and have
         a good knowledge of using useful extentions like pytest and beautify."/>
        <SkillCard source="linux.svg" caption="Experience with Linux based systems and command line.
         I know my way around a man page." />
        <SkillCard source="elasticsearch.svg" caption="Debugging with logs in Elastic Search to 
        find bugs and solve user issues." />
        <SkillCard source="sql.svg" caption="Knowledge of SQL queries and database structure." />
        <SkillCard source="celery.svg" caption="Use to using Celery as an asynchronous event 
        bus to run blocks of code on a cron schedule." />
    </div>
</div>
)
}