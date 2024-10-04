import React from 'react'
import { IconProps } from './types'

const IconCrop75SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-560h720v560H120Z" />
  </svg>
)

export { IconCrop75SharpFilled as default }
