import React from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import {FiCopy} from 'react-icons/fi'
import { Toaster,toast } from 'react-hot-toast';

const OutputCard = ({title, content}) => {
  return (
    <div className="output-card">
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
         <CopyToClipboard
        text={content}
        onCopy={() => toast.success('Text has been copied!',{
            style: {
              border: '1px solid rgba(255, 255, 255, 0.125)',
              padding: '16px',
              color: 'white',
              backdropFilter: 'blur(16px) saturate(180%)',
              backgroundColor: 'rgb(17, 25, 40, 0.75)',
              
            }
          })}>
       <span><FiCopy /></span>
     </CopyToClipboard>
        <h3>{title}</h3>
        <p className='copywriting-output'>{content}</p>
    </div>
  )
}

export default OutputCard