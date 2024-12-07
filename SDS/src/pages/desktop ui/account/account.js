import React, { useState, useEffect, useContext } from 'react';
import './account.css';
import Navbar from '../../../components/assests/Navbar/Navbar';
import DeleteBtn from '../../../components/assests/DeleteBtn/DeleteBtn';
import axios from 'axios';
import { UserContext } from '../../../context/userContext';

import account_logo3 from './elements/Vector3.png';
import account_logo4 from './elements/Vector4.png';
import account_logo5 from './elements/Vector5.png';
import account_logo6 from './elements/Vector6.png';

function Account() {
  const { userName } = useContext(UserContext); // Access username from context
  console.log(userName+" account")
  const [fields, setFields] = useState({
    username: { value: userName, isEditing: false },
    firstName: { value: '', isEditing: false },
    lastName: { value: '', isEditing: false },
    major: { value: '', isEditing: false },
    level: { value: '', isEditing: false },
    password: { value: '', isEditing: false }
  });

  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(''); // For error handling

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!userName) {
        console.log('User name is not defined. Skipping fetch...');
        setLoading(false);
        return;
      }
  
      console.log('Fetching user details with username:', userName);
  
      try {
        const response = await axios.get('http://localhost:3002/user', {
          params: { userName },
        });
  
        console.log('Response from server:', response.data);
  
        if (response?.data) {
          setFields({
            username: { value: userName, isEditing: false },
            firstName: { value: response.data.fName || '', isEditing: false },
            lastName: { value: response.data.lName || '', isEditing: false },
            major: { value: response.data.major || '', isEditing: false },
            level: { value: response.data.year || '', isEditing: false },
            password: { value: response.data.password || '', isEditing: false },
            
            
          });
        }
  
        setLoading(false);
      } catch (err) {
        console.error('Error occurred while fetching user details:', err);
  
        if (err.response) {
          console.error('Error response data:', err.response.data);
        }
  
        setError('Failed to load user details');
        setLoading(false);
      }
    };
  
    fetchUserDetails();
  }, [userName]);

  // Handle edit button click
  const handleEditClick = (field) => {
    setFields(prevState => ({
      ...prevState,
      [field]: { ...prevState[field], isEditing: !prevState[field].isEditing }
    }));
  };

  // Handle input change
  const handleInputChange = (field, event) => {
    setFields(prevState => ({
      ...prevState,
      [field]: { ...prevState[field], value: event.target.value }
    }));
  };

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className='account_body'>
      <div id='account_items'>
        <div>
          <Navbar />
        </div>

        <div>
          <p id='account_text'>Account</p>
        </div>
      </div>

      <img src={account_logo3} alt="comp1" id='account_Vec3' className='account_LogImage' />
      <img src={account_logo4} alt="comp1" id='account_Vec4' className='account_LogImage' />
      <img src={account_logo5} alt="comp1" id='account_Vec5' className='account_LogImage' />
      <img src={account_logo6} alt="comp1" id='account_Vec6' className='account_LogImage' />

      <div id='account_details_container'>
        <div id='account_details'>
          <div>
            <p id='account_text2'>Personal Info</p>

            <div id='account_details1'>
              <form>
                {/* Username */}
                <div id='account_details_list' className='account_underline'>
                  <label htmlFor="account_username">Username:</label>
                  <input
                    type="text"
                    id="account_username"
                    name="account_username"
                    value={fields.username.value}
                    onChange={(e) => handleInputChange('username', e)}
                    readOnly={!fields.username.isEditing}
                    className={fields.username.isEditing ? 'editable' : ''} // Apply editable class
                  />
                  <button type="button" onClick={() => handleEditClick('username')}>
                    {fields.username.isEditing ? 'Save' : 'Edit'}
                  </button>
                </div>

                {/* First name */}
                <div id='account_details_list' className='account_underline'>
                  <label htmlFor="account_first-name">First name:</label>
                  <input
                    type="text"
                    id="account_first-name"
                    name="account_first-name"
                    value={fields.firstName.value}
                    onChange={(e) => handleInputChange('firstName', e)}
                    readOnly={!fields.firstName.isEditing}
                    className={fields.firstName.isEditing ? 'editable' : ''} // Apply editable class
                  />
                  <button type="button" onClick={() => handleEditClick('firstName')}>
                    {fields.firstName.isEditing ? 'Save' : 'Edit'}
                  </button>
                </div>

                {/* Last name */}
                <div id='account_details_list' className='account_underline'>
                  <label htmlFor="account_last-name">Last name:</label>
                  <input
                    type="text"
                    id="account_last-name"
                    name="account_last-name"
                    value={fields.lastName.value}
                    onChange={(e) => handleInputChange('lastName', e)}
                    readOnly={!fields.lastName.isEditing}
                    className={fields.lastName.isEditing ? 'editable' : ''} // Apply editable class
                  />
                  <button type="button" onClick={() => handleEditClick('lastName')}>
                    {fields.lastName.isEditing ? 'Save' : 'Edit'}
                  </button>
                </div>

                {/* Major */}
                <div id='account_details_list' className='account_underline'>
                  <label htmlFor="account_major">Major:</label>
                  <input
                    type="text"
                    id="account_major"
                    name="account_major"
                    value={fields.major.value}
                    onChange={(e) => handleInputChange('major', e)}
                    readOnly={!fields.major.isEditing}
                    className={fields.major.isEditing ? 'editable' : ''} // Apply editable class
                  />
                  <button type="button" onClick={() => handleEditClick('major')}>
                    {fields.major.isEditing ? 'Save' : 'Edit'}
                  </button>
                </div>

                {/* Level */}
                <div id='account_details_list' className='account_underline'>
                  <label htmlFor="account_level">Level:</label>
                  <input
                    type="text"
                    id="account_level"
                    name="account_level"
                    value={fields.level.value}
                    onChange={(e) => handleInputChange('level', e)}
                    readOnly={!fields.level.isEditing}
                    className={fields.level.isEditing ? 'editable' : ''} // Apply editable class
                  />
                  <button type="button" onClick={() => handleEditClick('level')}>
                    {fields.level.isEditing ? 'Save' : 'Edit'}
                  </button>
                </div>

                {/* Password */}
                <div id='account_details_list'>
                  <label htmlFor="account_password">Password:</label>
                  <input
                    type="text"
                    id="account_password"
                    name="account_password"
                    value={fields.password.value}
                    onChange={(e) => handleInputChange('password', e)}
                    readOnly={!fields.password.isEditing}
                    className={fields.password.isEditing ? 'editable' : ''} // Apply editable class
                  />
                  <button type="button" onClick={() => handleEditClick('password')}>
                    {fields.password.isEditing ? 'Save' : 'Edit'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <p id='account_text2'>Contributions</p>
            <div id='account_details2'>
              <div id='account_details_list' className='account_underline'>
                <label htmlFor="account_ratings">2 rating/s</label>
              </div>

              <div id='account_details_list' className='account_underline'>
                <label htmlFor="account_questions">5 question/s</label>
              </div>

              <div id='account_details_list' className='account_underline'>
                <label htmlFor="account_answers">1 answer/s</label>
              </div>

              <div id='account_details_list' className='account_underline'>
                <label htmlFor="account_files">2 file/s uploaded</label>
              </div>

              <div id='account_details_list'>
                <label htmlFor="account_discussions">0 discussion/s</label>
              </div>
            </div>

            <span id='account_delete_btn'>
              <DeleteBtn />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
