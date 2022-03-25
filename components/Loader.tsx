import React from 'react'
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
type LoaderProps = {
    color:string;
    size:number;
}
const style = {
   position: 'fixed',
   top: '50%',
   left: '50%',
   tranform: 'translate(-50%, -50%)'
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader: React.FC<LoaderProps> = ({color,size}) => {
  return (
    <div className="sweet-loading" style={style as React.CSSProperties}>
         <PulseLoader color={color} css={override} size={size} />

    </div>
  )
}

export default Loader