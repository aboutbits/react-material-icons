import React from 'react'
import { IconProps } from './types'

const IconFamilyHistoryRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-60q-63 0-106.5-43.5T330-210q0-52 31-91.5t79-53.5v-85H280q-33 0-56.5-23.5T200-520v-80h-60q-17 0-28.5-11.5T100-640v-200q0-17 11.5-28.5T140-880h200q17 0 28.5 11.5T380-840v200q0 17-11.5 28.5T340-600h-60v80h400v-85q-48-14-79-53.5T570-750q0-63 43.5-106.5T720-900q63 0 106.5 43.5T870-750q0 52-31 91.5T760-605v85q0 33-23.5 56.5T680-440H520v85q48 14 79 53.5t31 91.5q0 63-43.5 106.5T480-60Zm240-620q29 0 49.5-20.5T790-750q0-29-20.5-49.5T720-820q-29 0-49.5 20.5T650-750q0 29 20.5 49.5T720-680Zm-540 0h120v-120H180v120Zm300 540q29 0 49.5-20.5T550-210q0-29-20.5-49.5T480-280q-29 0-49.5 20.5T410-210q0 29 20.5 49.5T480-140ZM240-740Zm480-10ZM480-210Z" />
  </svg>
)

export { IconFamilyHistoryRounded as default }
