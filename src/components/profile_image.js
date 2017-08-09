import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const ProfileImage = () => (
	<div className="picture">
	  <Card>
	    <CardMedia
	      overlay={<CardTitle subtitle="Eric Hoffman" />}
	    >
	      <img src="https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46--ginger-kitten-ginger-cats.jpg" className="profile-image" alt="" />
	    </CardMedia>
	  </Card>
	</div>
);

export default ProfileImage;
