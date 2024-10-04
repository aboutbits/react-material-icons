import React from 'react'
import { IconProps } from './types.js'

export const IconTamperDetectionOnOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M178-160q-17 0-31.5-6.5T121-184L0-304l14-14q9-9 20-13.5t22-4.5q12 0 23 4.5T98-318l22 22v-294q0-13 9-21.5t21-8.5q13 0 21.5 8.5T180-590v150h40v-210q0-13 9-21.5t21-8.5q13 0 21.5 8.5T280-650v210h40v-170q0-13 9-21.5t21-8.5q13 0 21.5 8.5T380-610v170h40v-130q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-570v330q0 33-23 56.5T400-160H178Zm382-120v-360q0-33-23.5-56.5T480-720H80v-120q0-33 23.5-56.5T160-920h480q33 0 56.5 23.5T720-840v180l160-160v440L720-540v180q0 33-23.5 56.5T640-280h-80Z" />
  </svg>
)
