import React from 'react'
import WorkItem from './WorkItem'


const data= [
    {
        year:2023,
        title:'Microsoft Power Apps',
        duration: '2 Months',
        details:'Design and implementation of custom Power Apps solutions tailored to specific business needs, demonstrating proficiency in building user-friendly interfaces and functionality.'
    },
    {
        year:2023,
        title:'Microsoft SharePoint',
        duration: '2 Months',
        details:' Integration of Power Apps with SharePoint to streamline data management, document collaboration, and workflow automation within SharePoint environments.'
    },
    {
        year:2023,
        title:'Microsoft Power AutoMate Workflows',
        duration: '2 Months',
        details:' Creation of automated workflows using Power Automate to enhance productivity, automate repetitive tasks, and facilitate seamless data flow between different systems.'
    },
    {
        year:2023,
        title:'Figma Prototyping',
        duration: '2 Months',
        details:'Utilization of Figma for prototyping and designing user interfaces, demonstrating the ability to create visually appealing and intuitive layouts for web and mobile applications.'
    },
    {
        year:2023,
        title:'React Frontend Development',
        duration: '2 Months',
        details:'Integration of React components to enhance the frontend experience of Power Apps solutions, leveraging Reacts capabilities to create dynamic and responsive user interfaces.'
    }
    
]
const Work = () => {
  return (
    <div id="Work" className="max-w-[1040px] m-auto md::pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1> 
    {data.map((item,idx)=>(
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
    ))}
    </div>
  )
}

export default Work
