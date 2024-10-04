import React from 'react'
import { IconProps } from './types.js'

export const IconWheelchairPickupOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-720q-33 0-56.5-23.5T180-800q0-33 23.5-56.5T260-880q33 0 56.5 23.5T340-800q0 33-23.5 56.5T260-720ZM200-80v-280h-80v-240q0-33 23.5-56.5T200-680h120q33 0 56.5 23.5T400-600v78q-63 36-101.5 100T260-280q0 57 21 107.5T340-84v4H200Zm340 0q-83 0-141.5-58.5T340-280q0-67 39.5-118.5T480-470v87q-27 16-43.5 43T420-280q0 50 35 85t85 35q50 0 85-35t35-85h80q0 83-58.5 141.5T540-80Zm297-92-99-148H520v-320h80v240h182l122 184-67 44Z" />
  </svg>
)