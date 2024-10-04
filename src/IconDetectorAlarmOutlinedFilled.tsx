import React from 'react'
import { IconProps } from './types'

const IconDetectorAlarmOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-200h80v200h-80Zm323-101L621-362l57-57 141 142-56 56Zm-566 0-56-56 141-142 57 57-142 141Zm127-419 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-120h720v120q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336Z" />
  </svg>
)

export { IconDetectorAlarmOutlinedFilled as default }
