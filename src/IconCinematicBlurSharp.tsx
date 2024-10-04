import React from 'react'
import { IconProps } from './types'

const IconCinematicBlurSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m160-840 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h200v720H80v-720h80Zm0 240v400h640v-400H160Zm0 0v400-400Zm160 360h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Z" />
  </svg>
)

export { IconCinematicBlurSharp as default }
