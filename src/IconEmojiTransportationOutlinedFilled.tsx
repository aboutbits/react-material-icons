import React from 'react'
import { IconProps } from './types'

export const IconEmojiTransportationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-106v-228l56-160q5-11 14.5-18.5T494-520h292q14 0 23.5 7.5T824-494l56 160v228q0 11-7.5 18.5T854-80h-28q-11 0-18.5-7.5T800-106v-34H480v34q0 11-7.5 18.5T454-80h-28q-11 0-18.5-7.5T400-106Zm80-274h320l-28-80H508l-28 80Zm40 160q17 0 28.5-11.5T560-260q0-17-11.5-28.5T520-300q-17 0-28.5 11.5T480-260q0 17 11.5 28.5T520-220Zm240 0q17 0 28.5-11.5T800-260q0-17-11.5-28.5T760-300q-17 0-28.5 11.5T720-260q0 17 11.5 28.5T760-220ZM240-400v-80h80v80h-80Zm200-240v-80h80v80h-80ZM240-240v-80h80v80h-80Zm0 160v-80h80v80h-80ZM80-80v-560h200v-240h400v280h-80v-200H360v240H160v480H80Z" />
  </svg>
)
