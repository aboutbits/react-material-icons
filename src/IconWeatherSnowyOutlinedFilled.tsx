import React from 'react'
import { IconProps } from './types'

const IconWeatherSnowyOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-200q-21 0-35.5-14.5T210-250q0-21 14.5-35.5T260-300q21 0 35.5 14.5T310-250q0 21-14.5 35.5T260-200ZM380-80q-21 0-35.5-14.5T330-130q0-21 14.5-35.5T380-180q21 0 35.5 14.5T430-130q0 21-14.5 35.5T380-80Zm120-120q-21 0-35.5-14.5T450-250q0-21 14.5-35.5T500-300q21 0 35.5 14.5T550-250q0 21-14.5 35.5T500-200Zm240 0q-21 0-35.5-14.5T690-250q0-21 14.5-35.5T740-300q21 0 35.5 14.5T790-250q0 21-14.5 35.5T740-200ZM620-80q-21 0-35.5-14.5T570-130q0-21 14.5-35.5T620-180q21 0 35.5 14.5T670-130q0 21-14.5 35.5T620-80ZM300-360q-91 0-155.5-64.5T80-580q0-83 55-145t136-73q32-57 87.5-89.5T480-920q90 0 156.5 57.5T717-719q69 6 116 57t47 122q0 75-52.5 127.5T700-360H300Z" />
  </svg>
)

export { IconWeatherSnowyOutlinedFilled as default }
