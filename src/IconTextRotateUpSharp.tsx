import React from 'react'
import { IconProps } from './types'

const IconTextRotateUpSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-160h-80v-528l-42 42-56-56 138-138 140 138-58 56-42-42v528ZM560-276 120-440v-80l440-164v76l-112 38v178l112 40v76ZM384-414v-132l-182 64v4l182 64Z" />
  </svg>
)

export { IconTextRotateUpSharp as default }
