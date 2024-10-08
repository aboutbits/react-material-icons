import React from 'react'
import { IconProps } from './types'

const IconEvShadowOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m389-347 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm338 70q29-35 47-76t23-86L547-189q8 3 16.5 7t16.5 6q44-14 81-40t66-61ZM160-480q0 122 79 211.5T436-163q-72-55-114-137.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Zm317 247 315-314q-4-18-9-35t-13-33L432-278q11 13 21 23.5t24 21.5Zm3 153q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM363-525l247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Zm217 45Z" />
  </svg>
)

export { IconEvShadowOutlined as default }
