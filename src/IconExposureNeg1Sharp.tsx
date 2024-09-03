import React from 'react'
import { IconProps } from './types'

const IconExposureNeg1Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-400H120v-80h280v80Zm230 200v-438l-92 66-46-70 164-118h64v560h-90Z" />
  </svg>
)

export { IconExposureNeg1Sharp as default }
