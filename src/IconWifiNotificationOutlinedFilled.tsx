import React from 'react'
import { IconProps } from './types.js'

export const IconWifiNotificationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q23 5 43.5 15t39.5 24q-78 22-146.5 64T354-587l306 307h140v80H160Zm534-160-57-56q11-11 25.5-17.5T694-440q17 0 31 6.5t25 17.5l-56 56Zm-99-99-43-43q27-27 63-42.5t78-15.5q42 0 78.5 15.5T835-502l-43 43q-19-20-44-30.5T694-500q-29 0-54.5 11T595-459Zm-85-85-43-42q44-44 102.5-69T694-680q66 0 124 25t102 69l-43 42q-35-35-82.5-55.5T693-620q-54 0-101 20.5T510-544Z" />
  </svg>
)
