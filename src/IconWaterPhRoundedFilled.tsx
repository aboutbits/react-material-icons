import React from 'react'
import { IconProps } from './types'

const IconWaterPhRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-160h-80v50q0 13-8.5 21.5T470-80q-13 0-21.5-8.5T440-110v-180q0-13 8.5-21.5T470-320h110q24 0 42 18t18 42v40q0 24-18 42t-42 18Zm160-20v70q0 13-8.5 21.5T710-80q-13 0-21.5-8.5T680-110v-180q0-13 8.5-21.5T710-320q13 0 21.5 8.5T740-290v50h80v-50q0-13 8.5-21.5T850-320q13 0 21.5 8.5T880-290v180q0 13-8.5 21.5T850-80q-13 0-21.5-8.5T820-110v-70h-80Zm-240-40h80v-40h-80v40ZM400-866q8 0 14.5 2.5T427-856q138 124 208 223.5T717-444q2 17-10 30.5T676-400H440q-33 0-56.5 23.5T360-320v188q0 17-11.5 29T320-91q-118 0-179-94T80-408q0-94 74.5-207.5T373-856q6-5 12.5-7.5T400-866Z" />
  </svg>
)

export { IconWaterPhRoundedFilled as default }
