import React from 'react'
import Cards from './components/Cards';

function App() {
  const jobData = [
  {
    company: "Amazon",
    logo: "https://americanbazaaronline.com/wp-content/uploads/2015/02/Amazon-Logo.jpg",
    postDate: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
    applyLink: "#"
  },
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    postDate: "2 days ago",
    jobTitle: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    pay: "$100/hr",
    location: "Bangalore, India",
    applyLink: "#"
  },
  {
    company: "Microsoft",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
    postDate: "1 week ago",
    jobTitle: "Backend Engineer",
    type: "Full-Time",
    level: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India",
    applyLink: "#"
  },
  {
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    postDate: "3 days ago",
    jobTitle: "React Native Developer",
    type: "Contract",
    level: "Mid Level",
    pay: "$95/hr",
    location: "Remote",
    applyLink: "#"
  },
  {
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    postDate: "4 days ago",
    jobTitle: "UX Researcher",
    type: "Internship",
    level: "Intern",
    pay: "$40/hr",
    location: "Remote",
    applyLink: "#"
  },
  {
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    postDate: "1 day ago",
    jobTitle: "iOS Developer",
    type: "Full-Time",
    level: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India",
    applyLink: "#"
  },
  {
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    postDate: "3 days ago",
    jobTitle: "Data Visualization Engineer",
    type: "Contract",
    level: "Mid Level",
    pay: "$105/hr",
    location: "Remote",
    applyLink: "#"
  },
  {
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    postDate: "2 weeks ago",
    jobTitle: "UI Developer",
    type: "Part-Time",
    level: "Mid Level",
    pay: "$90/hr",
    location: "Chennai, India",
    applyLink: "#"
  },
  {
    company: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    postDate: "5 days ago",
    jobTitle: "Web Designer",
    type: "Freelance",
    level: "Entry Level",
    pay: "$80/hr",
    location: "Kolkata, India",
    applyLink: "#"
  }
];

  return (
    <div className='Parent'>
      {jobData.map((elem, idx)=>{
        return <div key={idx}><Cards company={elem.company} postDate={elem.postDate} jobTitle={elem.jobTitle} type={elem.type} pay={elem.pay} location={elem.location} image={elem.logo}/></div> 
      })}
      
    </div>
  )
}

export default App
