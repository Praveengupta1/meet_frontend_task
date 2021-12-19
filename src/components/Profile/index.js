import React from  "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import "./profile.css"
const Profile = ({data})=>{
    return (
        <div className="Profile-main-card">
            <div className="candidate-image">
                <img src={require("../../assets/img1.jpg")} alt="profile"/>
            </div>
            <div className="canddate-info">
                <div className="about">
                    <p>
                        {data && data.jobseeker_name ? data.jobseeker_name : ""} |
                        <LocationOnIcon/>
                        <span>
                            {data && data.area ? data.area : ""}, {data && data.distric ? data.distric : ""}
                        </span>
                    </p>
                </div>
                <div className='experience'>
                    <span className="icon"> 
                        <BusinessCenterIcon/>
                    </span>
                    <span className="exper">Experience</span>
                    <span className="total">{data && data.total_months_exp ? data.total_months_exp + " months": ""}</span>
                    {data && (data.user_experiences.length > 0) &&
                    <React.Fragment>
                        <div className='item'>
                            <span className='area'>{data.user_experiences[0].user_post ? data.user_experiences[0].user_post : ""}</span>
                            <span className='company-name'>{data.user_experiences[0].company_name ? data.user_experiences[0].company_name :"" }</span>
                            <span className='time'>{data.user_experiences[0].company_starting_date ? data.user_experiences[0].company_starting_date: ""} - {data.user_experiences[0].company_ending_date ? data.user_experiences[0].company_ending_date: ""}</span>
                        </div>
                    </React.Fragment>
                    }
                    {data && (data.user_experiences.length > 1) &&
                    <React.Fragment>
                        <div className='item'>
                            <span className='area'>{data.user_experiences[1].user_post ? data.user_experiences[1].user_post : ""}</span>
                            <span className='company-name'>{data.user_experiences[1].company_name ? data.user_experiences[1].company_name :"" }</span>
                            <span className='time'>{data.user_experiences[1].company_starting_date ? data.user_experiences[1].company_starting_date: ""} - {data.user_experiences[1].company_ending_date ? data.user_experiences[1].company_ending_date: ""}</span>
                        </div>
                    </React.Fragment>
                    }
                    
                </div>
                <div className="education">
                    <span className='icon'><SchoolIcon/></span>
                    <span className='text'>education</span>
                    <div className='details'>
                        <span className='info'>UG Diploma—Electronics Engineering</span>
                        <span className='college-name'>
                        The Indian Institute of Welding | 2019 - 2020
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;