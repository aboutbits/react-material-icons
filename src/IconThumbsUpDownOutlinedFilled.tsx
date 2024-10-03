import React from 'react'
import { IconProps } from './types.js'

export const IconThumbsUpDownOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-400q-33 0-56.5-23.5T0-480v-240q0-12 5-23t13-19l198-198 30 30q6 6 10 15.5t4 18.5v8l-28 128h208q17 0 28.5 11.5T480-720v50q0 6-1 11.5t-3 10.5l-90 212q-7 17-22.5 26.5T330-400H80ZM744 0l-30-30q-6-6-10-15.5T700-64v-8l28-128H520q-17 0-28.5-11.5T480-240v-50q0-6 1-11.5t3-10.5l90-212q8-17 23-26.5t33-9.5h250q33 0 56.5 23.5T960-480v240q0 12-4.5 22.5T942-198L744 0Z" />
  </svg>
)
