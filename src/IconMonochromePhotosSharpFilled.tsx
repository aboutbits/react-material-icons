import React from 'react'
import { IconProps } from './types'

const IconMonochromePhotosSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM80-120v-640h206l74-80h240l74 80h206v640H80Zm400-80h320v-480H638l-73-80h-85v560Z" />
  </svg>
)

export { IconMonochromePhotosSharpFilled as default }
