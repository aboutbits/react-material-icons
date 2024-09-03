import React from 'react'
import { IconProps } from './types'

const IconNestWakeOnPressOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-440q-25 0-42.5-17.5T760-500v-240q0-25 17.5-42.5T820-800q25 0 42.5 17.5T880-740v240q0 25-17.5 42.5T820-440ZM328-120q-18 0-36.5-6.5T262-144L80-335l33-34q7-7 16.5-10t20.5-1l130 30v-430q0-25 17.5-42.5T340-840q25 0 42.5 17.5T400-780v240h36q8 0 18 2t18 6l164 82q23 11 35 34.5t8 48.5l-25 178q-5 30-27 49.5T575-120H328Z" />
  </svg>
)

export { IconNestWakeOnPressOutlinedFilled as default }
