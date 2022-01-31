import React from "react";

import ReactDOM  from "react-dom";


import './c.css'
import { useState} from "react";
import { useEffect } from "react";
import Cropper from "react-easy-crop";


import ReactCrop from "react-image-crop"

import Basic from "./components/image";
import ImgDropAndCrop from "./components/image";




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
