import React from 'react'

function ScheduleSidebar({ setCurrentCourse }) {
    const courses = [
        {id: 1, name: "Introduction to Computer Science and Programming "},
        {id: 2, name: "Web Development Bootcamp"},
        {id: 3, name: "Python for Data Science and Machine Learning"},
        {id: 4, name: "Java Programming and Software Engineering Fundamentals"},
        {id: 5, name: "AWS Certified Solutions Architect"},
        {id: 6, name: "Cybersecurity Essentials"},
        {id: 7, name: "Data Structures and Algorithms"},
        {id: 8, name: "SQL Database Administration"},
        {id: 9, name: "Mobile App Development with React Native"},
        {id: 10, name: "DevOps and Continuous Integration/Continuous Deployment (CI/CD)"},
        {id: 11, name: "Blockchain and Cryptocurrency Fundamentals"},
        {id: 12, name: "Machine Learning with TensorFlow"},
        {id: 13, name: "Linux System Administration"},
        {id: 14, name: "Frontend Frameworks: React, Angular, Vue.js"},
        {id: 15, name: "Big Data Analytics with Hadoop"},
        {id: 16, name: "Azure Certified Solutions Architect"},
        {id: 17, name: "System Architecture Design"},
    ]

    return (
        <div className='schedule-sidebar w-100 '>
            <ul className='w-100'>

            {
                courses && courses.map((course, index) => {
                    return <li className="single-course d-flex align-items-center fs-6 pl-4 my-1 w-100 rounded-3" key={course.id} onClick={() =>setCurrentCourse(course)}>{course.name}</li>
                })
            }
            </ul>
            
        </div>
    )
}

export default ScheduleSidebar