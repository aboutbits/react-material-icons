import React from 'react'
import { IconProps } from './types.js'

export const IconNestWifiProSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280q25 0 42.5-17.5T540-340q0-25-17.5-42.5T480-400q-25 0-42.5 17.5T420-340q0 25 17.5 42.5T480-280ZM360-80q-77 0-124-40t-73-100q-26-61-34.5-130T120-479q0-102 15.5-176.5T192-781q41-50 110-74.5T480-880q109 0 178 24.5T768-781q41 51 56.5 125.5T840-479q0 60-8.5 129T797-220q-26 60-73 100T600-80H360Zm-1-80h240q54 0 85-35t48-86q17-51 22-105.5t5-92.5q0-85-10-145.5T708-724q-30-39-84.5-57.5T479-800q-90 0-144.5 18.5T250-724q-31 39-41 99.5T199-479q0 38 5 92.5T226-281q17 51 48 86t85 35Zm120-320Z" />
  </svg>
)
