import React from 'react'
import { IconProps } from './types'

const IconBringYourOwnIpOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q20 0 40 2.5t40 4.5v82q-20-2-40-4.5t-40-2.5q-26 36-45 75.5T404-640h116v80H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h188q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40h80q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h136q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40h82q4 20 6 40t2 40q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm206 222q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5ZM204-640h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm276 478q26-36 45-75.5t31-82.5H404q12 43 31 82.5t45 75.5Zm104-16q55-18 99-54.5t73-87.5H638q-9 37-22.5 72.5T584-178Zm56-462v-240h240v240H640Zm120-120h80v-80h-80v80Z" />
  </svg>
)

export { IconBringYourOwnIpOutlined as default }