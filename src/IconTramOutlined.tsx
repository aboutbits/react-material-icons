import React from 'react'
import { IconProps } from './types.js'

export const IconTramOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-260v-380q0-97 85-127t195-33l30-60H280v-60h400v60H550l-30 60q119 3 199.5 32.5T800-640v380q0 59-40.5 99.5T660-120l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-260Zm500-140H240h480-60ZM480-240q25 0 42.5-17.5T540-300q0-25-17.5-42.5T480-360q-25 0-42.5 17.5T420-300q0 25 17.5 42.5T480-240Zm-2-440h228-450 222ZM240-480h480v-120H240v120Zm60 280h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm178-520q-134 0-172 14.5T256-680h450q-12-14-52-27t-176-13Z" />
  </svg>
)
