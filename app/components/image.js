// import React, { Component } from 'react'

// import Dropzone from 'dropzone'
// import ReactCrop from 'react-image-crop'
// import'../index.css'
// import './c.css'


// const imageMaxSize = 1000000000 // bytes
// const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
// const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
// class ImgDropAndCrop extends React.Component {
//     constructor(props){
//         super(props)
        
//         this.state = {
//             imgSrc: null,
            
//             crop: {
//                 aspect: 1/1
//             }
//         }
//     }

//     verifyFile = (files) => {
//         if (files && files.length > 0){
//             const currentFile = files[0]
//             const currentFileType = currentFile.type
//             const currentFileSize = currentFile.size
//             if(currentFileSize > imageMaxSize) {
//                 alert("This file is not allowed. " + currentFileSize + " bytes is too large")
//                 return false
//             }
//             if (!acceptedFileTypesArray.includes(currentFileType)){
//                 alert("This file is not allowed. Only images are allowed.")
//                 return false
//             }
//             return true
//         }
//     }

//     handleOnDrop = (files, rejectedFiles) => {
//         if (rejectedFiles && rejectedFiles.length > 0){
//             this.verifyFile(rejectedFiles)
//         }


//         if (files && files.length > 0){
//              const isVerified = this.verifyFile(files)
//              if (isVerified){
//                  // imageBase64Data 
//                  const currentFile = files[0]
//                  let myFileItemReader =  new FileReader()
//                  myFileItemReader.addEventListener("load", ()=>{
//                      console.log(myFileItemReader.result)
//                      const myResult = myFileItemReader.result
//                      this.setState({
//                          imgSrc: myFileItemReader.result
                         
//                      })
//                  }, false)

//                  myFileItemReader.readAsDataURL(currentFile)

//              }
//         }
//     }


    
 


//   render() {
//       const {imgSrc} = this.state
//     return (
//       <div>
//         <h1>Drop and Crop</h1>

        
//         {imgSrc !== null ? 
//             <div>
              

            
//               <ReactCrop src={imgSrc} crop={this.state.crop}/>
//               </div>
//               :
             

            

//              <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes} multiple={false} maxSize={imageMaxSize}>Drop image here or click to upload</Dropzone>
//          }
        
//       </div>
//     )
//   }
// }

// export default ImgDropAndCrop


import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";
import { setState } from "react";
import "react-image-crop/dist/ReactCrop.css";


function App() {
  const [files, setFiles] = useState([]);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const newcrop = (newCrop) => {
    setCrop(newCrop);

    
  };

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <ReactCrop src={file.preview} crop={crop} onChange={newcrop} />
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Click here </p>
      </div>
      <h3>
      {crop.x?`x: ${crop.x}`:`x:0`}<br/>
      {crop.y?`y: ${crop.y}`:`y:0`}<br/>
      {crop.height?`heigth: ${crop.height}`:`height:0`}<br/>
      {crop.width?`width: ${crop.width}`:`width:0`}
    </h3>
      <div className="preview">{images}</div>

     
    </div>

  
  );

}

export default App;
