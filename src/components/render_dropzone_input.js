import React from 'react';
import Dropzone from 'react-dropzone';

const RenderDropzoneInput = (field) => {
	const file = field.input.value;
	const style = {
		height: 50,
		width: 250,
		borderWidth: 2,
		borderColor: "black",
    borderStyle: "dashed",
    borderRadius: 5
	}
  return (
    <div>
      <Dropzone
				name={field.name}
				multiple={false}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
				style={style}
      >
      	<div>Click to upload image</div>
      </Dropzone>
			{file && file[0] && (
        <ul>
          { <li key={1}>{file[0].name}</li> }
        </ul>
      )}
    </div>
  );
}

export default RenderDropzoneInput;
