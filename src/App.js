import './css/App.css';

// Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";

// MUI
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="background">
      <div className="card">
        <div className="card-title">
          <div className="card-title-text">
            <h2>Software Development<br /><span className="title-span">Our flagship 3-stack coding bootcamps</span></h2>
          </div>
          <div className="logo-background">
            <img src="https://cutecdn.codingdojo.com/svg_images/campuses/other_icons/web-development-courses-icon.svg" alt="Img" className="logo" />
          </div>
        </div>
        <div className="classes">
           <button className="learn-more">Learn More <MdOutlineArrowForwardIos className="Icon" /></button>
            <h4>Onsite Full-Time<span className="classes-box">Virtual Only</span></h4>
            <h6 className="class-info">14 WEEKS | MON-FRI | 70-90 HRS/WK</h6>
            <br></br>
            <Divider className="class-divider"></Divider>
            <button className="learn-more">Learn More <MdOutlineArrowForwardIos className="Icon" /></button>
            <h4>Online Full-Time</h4>
            <h6 className="class-info">16 WEEKS | MON-FRI | 70-90 HRS/WK</h6>
            <br></br>
            <Divider className="class-divider"></Divider>
            <button className="learn-more">Learn More <MdOutlineArrowForwardIos className="Icon" /></button>
            <h4>Online Part-Time Accelerated</h4>
            <h6 className="class-info">18-34 WEEKS | 25-30 HRS/WK</h6>
            <br></br>
            <Divider className="class-divider"></Divider>
            <button className="learn-more">Learn More <MdOutlineArrowForwardIos className="Icon" /></button>
            <h4>Online Part-Time Flex</h4>
            <h6 className="class-info">30 WEEKS | 10-15 HRS/WK</h6>
          </div>
      </div>
    </div>
  );
}

export default App;
