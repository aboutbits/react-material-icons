import React from 'react'
import { IconProps } from './types'

const IconDetectorStatusSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M438-120 296-262l57-56 85 85 169-170 57 57-226 226ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z" />
  </svg>
)

export { IconDetectorStatusSharp as default }
