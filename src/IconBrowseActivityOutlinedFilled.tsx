import React from 'react'
import { IconProps } from './types'

export const IconBrowseActivityOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-200h215l69 138q5 10 14.5 16t20.5 6q11 0 21-5t15-15l123-215 26 53q5 11 15 16.5t21 5.5h260v200q0 33-23.5 56.5T800-240H160Zm243-245-47-93q-5-10-15-16t-21-6H80v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160H645l-49-98q-5-11-15-16.5t-21-5.5q-11 0-20 5.5T526-700L403-485Z" />
  </svg>
)
