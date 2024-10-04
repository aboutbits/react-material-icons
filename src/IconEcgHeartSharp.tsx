import React from 'react'
import { IconProps } from './types'

const IconEcgHeartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L479-82 148-415Zm166-345q-66 0-110 50.5T160-590q0 18 3 35.5t10 34.5h208l47 70 54-172h71l68 102h166q7-17 10.5-34.5T801-590q-2-69-46-118.5T645-758q-31 0-59.5 12T536-711l-42 45h-29l-42-45q-21-23-49-36t-60-13Zm166 564 243-244H578l-46-70-54 173h-72l-68-103H236l244 244Zm0-282Z" />
  </svg>
)

export { IconEcgHeartSharp as default }
