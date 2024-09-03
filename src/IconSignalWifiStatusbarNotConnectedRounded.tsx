import React from 'react'
import { IconProps } from './types'

const IconSignalWifiStatusbarNotConnectedRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M423-177 61-539q-13-13-18.5-28T38-599q1-17 7-32t20-26q81-71 194.5-107T480-800q125 0 234 41t203 122q9 8 13.5 17.5T935-599q0 11-3.5 21T920-560q-28-36-69.5-58T760-640q-83 0-141.5 58.5T560-440q0 49 22 90.5t58 69.5L537-177q-12 12-26.5 18t-30.5 6q-16 0-30.5-6T423-177Zm337 17q-17 0-29.5-12.5T718-202q0-17 12.5-29.5T760-244q17 0 29.5 12.5T802-202q0 17-12.5 29.5T760-160Zm116-297q0 23-10 41t-38 46q-17 17-24.5 28t-9.5 25q-2 12-11.5 20.5T761-288q-13 0-22-9t-7-21q3-23 14-40t37-43q21-21 27-31.5t6-26.5q0-18-14-31.5T765-504q-15 0-29 7t-24 20q-7 9-17.5 13t-21.5-1q-11-5-16.5-15t.5-20q16-28 44.5-44t63.5-16q49 0 80 29t31 74Z" />
  </svg>
)

export { IconSignalWifiStatusbarNotConnectedRounded as default }