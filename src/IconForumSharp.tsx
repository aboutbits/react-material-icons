import React from 'react'
import { IconProps } from './types'

const IconForumSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-120h520v-360h120v640L720-240H240ZM80-280v-600h600v440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z" />
  </svg>
)

export { IconForumSharp as default }
