import React from 'react'
import { IconProps } from './types'

const IconOpenInNewDownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v360h-80v-280H200v560h280v80H120Zm440 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" />
  </svg>
)

export { IconOpenInNewDownSharp as default }
