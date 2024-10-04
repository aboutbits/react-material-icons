import React from 'react'
import { IconProps } from './types'

const IconRainyHeavySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M302-186 26-738l72-35 276 550-72 37Zm187 0L213-738l72-36 275 551-71 37Zm187 0L400-738l71-36 276 551-71 37Zm186-1L587-738l71-36 276 552-72 35Z" />
  </svg>
)

export { IconRainyHeavySharp as default }
