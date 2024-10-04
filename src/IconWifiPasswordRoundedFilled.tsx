import React from 'react'
import { IconProps } from './types.js'

export const IconWifiPasswordRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760 0q-17 0-28.5-11.5T720-40v-120q0-17 11.5-28.5T760-200v-40q0-33 23.5-56.5T840-320q33 0 56.5 23.5T920-240v40q17 0 28.5 11.5T960-160v120q0 17-11.5 28.5T920 0H760Zm40-200h80v-40q0-17-11.5-28.5T840-280q-17 0-28.5 11.5T800-240v40Zm-320 80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0-440q75 0 142.5 24T745-470q20 15 20.5 39.5T748-388q-17 17-42 17.5T661-384q-38-26-84-41t-97-15q-51 0-97 15t-84 41q-20 14-45 13t-42-18q-17-18-17-42.5t20-39.5q55-42 122.5-65.5T480-560Zm0-240q125 0 235.5 41T914-643q20 17 21 42t-17 43q-17 17-42 17.5T831-556q-72-59-161.5-91.5T480-680q-100 0-189.5 32.5T129-556q-20 16-45 15.5T42-558q-18-18-17-43t21-42q88-75 198.5-116T480-800Z" />
  </svg>
)
