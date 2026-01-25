import React from 'react'
import { IconProps } from './types.js'

export const IconHardDriveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280h640v-240H160v240Zm520-60q25 0 42.5-17.5T740-400q0-25-17.5-42.5T680-460q-25 0-42.5 17.5T620-400q0 25 17.5 42.5T680-340Zm200-260H767l-80-80H273l-80 80H80l160-160h480l160 160ZM80-200v-400h800v400H80Z" />
  </svg>
)
