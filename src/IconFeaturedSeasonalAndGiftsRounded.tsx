import React from 'react'
import { IconProps } from './types.js'

export const IconFeaturedSeasonalAndGiftsRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-360q-33 0-56.5-23.5T80-600v-80q0-33 23.5-56.5T160-760h128q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h128q33 0 56.5 23.5T880-680v80q0 33-23.5 56.5T800-520v360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160Zm400-680q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z" />
  </svg>
)
