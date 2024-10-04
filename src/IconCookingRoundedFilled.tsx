import React from 'react'
import { IconProps } from './types.js'

export const IconCookingRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-120q-17 0-28.5-11.5T360-160v-80H120q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h240q33 0 56.5 23.5T440-240v80q0 17-11.5 28.5T400-120Zm160 0q-17 0-28.5-11.5T520-160v-80q0-33 23.5-56.5T600-320h240q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240H600v80q0 17-11.5 28.5T560-120ZM240-360q-50 0-85-35t-35-85v-120q0-17 11.5-28.5T160-640h640q17 0 28.5 11.5T840-600v120q0 50-35 85t-85 35H240Zm-80-320q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h200v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h200q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Z" />
  </svg>
)