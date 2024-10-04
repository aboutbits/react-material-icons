import React from 'react'
import { IconProps } from './types'

const IconBrightnessAutoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M312-320h64l32-92h146l32 92h62L512-680h-64L312-320Zm114-144 52-150h4l52 150H426Zm54 436L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Z" />
  </svg>
)

export { IconBrightnessAutoSharpFilled as default }
