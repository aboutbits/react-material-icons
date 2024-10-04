import React from 'react'
import { IconProps } from './types'

const IconCrop54SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-640h720v640H120Z" />
  </svg>
)

export { IconCrop54SharpFilled as default }
