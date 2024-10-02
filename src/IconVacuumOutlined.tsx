import React from 'react'
import { IconProps } from './types'

export const IconVacuumOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-200q0-17-11.5-28.5T160-240q-17 0-28.5 11.5T120-200q0 17 11.5 28.5T160-160Zm160 80q14-18 22.5-37.5T356-160h84v-280q0-33-23.5-56.5T360-520H160v120q-21 0-41.5 4T80-384v-216h120v-136q0-77 53.5-130.5T384-920q56 0 102 30.5t68 81.5l273 648h93v80H640v-80h100L481-776q-12-29-38.5-46.5T384-840q-44 0-74 30t-30 74v136h80q66 0 113 47t47 113v360H320Zm-20-260Z" />
  </svg>
)
