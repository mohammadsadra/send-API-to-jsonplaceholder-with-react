import React from 'react'
import PropTypes from 'prop-types'
import userImage from '../../user.png';
import style from './user.module.css';

User.defaultProps = {
  key : 0,
  name: 'no name',
  website: 'no web',
  email: 'no email',
  phone: 'no phone'
}

User.prototype = {
  key: PropTypes.number,
  name: PropTypes.string,
  website: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number
}
function User({key,name, website, email, phone}) {

    return(
        <div key={key}>
          <img src={userImage} />
          <div className={style.userContainer}>
            <div className={style.att}>
              Name: {name}
            </div>
            <div className={style.att}>
              Website: {website}
            </div>
            <div className={style.att}>
              Email: {email}
            </div>
            <div className={style.att}>
              Phone: {phone}
            </div>
          </div>
          
        </div>
    )
    
}

export default User