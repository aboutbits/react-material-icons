import React from 'react'
import { IconProps } from './types'

export const IconLanguageUsColemakOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-360h140v-240H580v240Zm-340 80q-33 0-56.5-23.5T160-360v-240q0-33 23.5-56.5T240-680h180v80H240v240h180v80H240Zm340 0q-33 0-56.5-23.5T500-360v-240q0-33 23.5-56.5T580-680h140q33 0 56.5 23.5T800-600v240q0 33-23.5 56.5T720-280H580Z" />
  </svg>
)
