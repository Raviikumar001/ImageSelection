import React from "react";

import ReactDOM  from "react-dom";


import './c.css'
import { useState} from "react";
import { useEffect } from "react";
import Cropper from "react-easy-crop";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";

import $ from 'jquery';
import Jcrop from 'jcrop';

import ReactCrop from "react-image-crop"

import Basic from "./components/image";
import ImgDropAndCrop from "./components/image";

export const ImageUpload = () => {
    const inputRef = React.useRef();
    const triggerFileSelectPopup = () => inputRef.current.click();
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <input type='file'  ref={inputRef}
            style={{display:"none"}} onChange={onSelectFile} />
            

            <button className="btn btn-head btn-dark" onClick={triggerFileSelectPopup}>Choose file</button>
            {selectedFile &&  <img  src={preview} height={720} width={500}/> }
        </div>
    )
}


class App extends React.Component{
    render()
    {
      return(
         <React.Fragment>
       <Basic/>
         </React.Fragment>
       
      )
    }
}

ReactDOM.render(
      <App />,
      document.getElementById('app')
)
