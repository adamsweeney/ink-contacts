import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const ROOT_URL = 'http://localhost:3000';
const ProfileImage = (props) => {
	const image = props.avatar || `${ROOT_URL}/default-thumbnail.jpg`;
	return (
		<div className="picture">
		  <Card>
		    <CardMedia>
		      <img src={image} className="profile-image" alt="" />
		    </CardMedia>
		  </Card>
		</div>
	);
}

export default ProfileImage;
