import './CourseDetails.css';
import Navbar from '../../../components/assests/Navbar/Navbar';
import mw_logo3 from './elements/Vector3.png';
import mw_logo4 from './elements/Vector4.png';
import mw_logo5 from './elements/Vector5.png';
import mw_logo6 from './elements/Vector6.png';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CourseDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId = 'Unknown Course' } = location.state || {};

  return (
    <div className="cd_body">
      <div id="cd_items">
        <div>
          <Navbar />
        </div>

        <div>
          <p id="cd_text">Course: {courseId}</p>
        </div>
      </div>

      <img src={mw_logo3} alt="comp1" id="mw_Vec3" className="mw_LogImage" />
      <img src={mw_logo4} alt="comp1" id="mw_Vec4" className="mw_LogImage" />
      <img src={mw_logo5} alt="comp1" id="mw_Vec5" className="mw_LogImage" />
      <img src={mw_logo6} alt="comp1" id="mw_Vec6" className="mw_LogImage" />

      <div id="cd_details_container">
        <div id="cd_details">
          <div id="cd_details1">
            <span className="cd_details1-text">Course Difficulty Rating:</span>
            <button className="cd_details-button" onClick={() => navigate('/CourseRating', { state: { courseId } })}>View rating</button>
          </div>

          <div id="cd_details2">
            <span className="cd_details2-text">Questions section</span>
            <button className="cd_details-button"
            onClick={() => navigate('/CourseQuestions', { state: { courseId } })}>View questions</button>
          </div>

          <div id="cd_details3">
            <span className="cd_details3-text">Discussions section</span>
            <button
              className="cd_details-button"
              onClick={() => navigate('/CourseDiscussions', { state: { courseId } })}
            >
              View discussions
            </button>
          </div>

          <div id="cd_details4">
            <span className="cd_details4-text">Files</span>
            <button className="cd_details-button"
             onClick={() => navigate('/Files', { state: { courseId } })}>View files</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;