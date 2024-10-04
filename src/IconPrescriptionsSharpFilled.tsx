import React from 'react'
import { IconProps } from './types.js'

export const IconPrescriptionsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m735-77 46-46-178-178-46 46q-37 37-37 89t37 89q37 37 89 37t89-37Zm102-102 46-46q37-37 37-89t-37-89q-37-37-89-37t-89 37l-46 46 178 178ZM280-600h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Zm-35 670H120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v325q-42-10-83.5-1.5T680-485v-35H280v80h349l-80 80H280v80h195q-23 35-31.5 76.5T445-120Z" />
  </svg>
)