import React from 'react'
import { IconProps } from './types'

const IconStepsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-80 296-580H76l232-311 132 66v131l147-35 88 267 205 205-30 177h-30Zm-315 0L43-500h222L703-80H505Z" />
  </svg>
)

export { IconStepsSharpFilled as default }
