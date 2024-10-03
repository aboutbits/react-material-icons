import React from 'react'
import { IconProps } from './types.js'

export const IconCommentsDisabledSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-527l-53-53 57-57L876-85l-57 57-212-212H80Zm800 45L755-320h45v-480H275l-80-80h685v685ZM160-320h367l-80-80H240v-80h127l-40-40h-87v-80h7l-87-87v367Zm515-80-80-80h125v80h-45ZM555-520l-80-80h245v80H555ZM435-640l-80-80h365v80H435Zm-91 136Zm171-56Z" />
  </svg>
)
