import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const ROOT_URL = 'http://localhost:3000';
const ProfileImage = (props) => {
	return (
		<div className="picture">
		  <Card>
		    <CardMedia>
		      <img src={props.avatar} className="profile-image" alt="" />
		    </CardMedia>
		  </Card>
		</div>
	);
}

export default ProfileImage;
