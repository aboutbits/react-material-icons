import React from 'react'
import { IconProps } from './types'

const IconViewWeekSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h213v640H80Zm294 0v-640h213v640H374Zm293 0v-640h213v640H667Z" />
  </svg>
)

export { IconViewWeekSharpFilled as default }
