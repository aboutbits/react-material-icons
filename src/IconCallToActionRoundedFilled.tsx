import React from 'react'
import { IconProps } from './types.js'

export const IconCallToActionRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm140-120h360q25 0 42.5-17.5T720-340q0-25-17.5-42.5T660-400H300q-25 0-42.5 17.5T240-340q0 25 17.5 42.5T300-280Z" />
  </svg>
)
