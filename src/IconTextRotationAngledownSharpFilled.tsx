import React from 'react'
import { IconProps } from './types'

const IconTextRotationAngledownSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-120v-80h64L92-572l56-56 372 372v-64h80v200H400Zm204-222-54-54 52-106-126-126-106 50-54-54 428-194 56 56-196 428Zm-66-316 92 94 84-174-2-2-174 82Z" />
  </svg>
)

export { IconTextRotationAngledownSharpFilled as default }
