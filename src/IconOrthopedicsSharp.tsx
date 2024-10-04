import React from 'react'
import { IconProps } from './types'

const IconOrthopedicsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-72q-46 0-115.5-14T264-115q-11-5-17.5-15t-6.5-22v-40h-40q-17 0-28.5-11.5T160-232v-60q0-17 11.5-28.5T200-332h40v-80h-40q-17 0-28.5-11.5T160-452v-60q0-17 11.5-28.5T200-552h40v-80h-40q-17 0-28.5-11.5T160-672v-60q0-17 11.5-28.5T200-772h40v-60q0-22 18-33t38-3q1 0 55 18t129 18q75 0 129-18t55-18q20-8 38 3.5t18 32.5v60h40q17 0 28.5 11.5T800-732v60q0 17-11.5 28.5T760-632h-40v80h40q17 0 28.5 11.5T800-512v60q0 17-11.5 28.5T760-412h-40v80h40q17 0 28.5 11.5T800-292v60q0 17-11.5 28.5T760-192h-40v40q0 12-6.5 22T696-115q-31 15-100.5 29T480-72Zm0-534q38 0 80.5-7t79.5-20v-143q-38 11-79.5 17.5T480-752q-38 0-79.5-6.5T320-776v143q36 13 79 20t81 7Zm0 228q37 0 79.5-7t80.5-21v-144q-44 12-83.5 18t-76.5 6q-39 0-80-6t-80-18v144q38 14 80.5 21t79.5 7Zm0 226q38 0 80.5-7t79.5-20v-143q-38 11-79.5 17.5T480-298q-38 0-79.5-6.5T320-322v143q36 13 79 20t81 7Z" />
  </svg>
)

export { IconOrthopedicsSharp as default }
