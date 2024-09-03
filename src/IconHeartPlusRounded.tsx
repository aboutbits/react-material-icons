import React from 'react'
import { IconProps } from './types'

const IconHeartPlusRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M434-494ZM40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q71 0 122 35.5t77 91.5q7 15 1 30.5T799-660q-15 7-30.5 1T746-680q-18-40-53-60t-73-20q-46 0-84 26t-66 64q-5 8-13 11.5t-17 3.5q-9 0-17-4t-13-11q-28-38-66-64t-84-26q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228l89-78q12-11 28-10t27 12q12 12 11.5 29.5T582-246l-89 79q-11 10-25 15t-28 5q-14 0-28-5t-25-16q-45-40-104.5-91T169-368.5Q115-427 77.5-491T40-621Zm680 221h-80q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h80v-80q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v80h80q17 0 28.5 11.5T920-440q0 17-11.5 28.5T880-400h-80v80q0 17-11.5 28.5T760-280q-17 0-28.5-11.5T720-320v-80Z" />
  </svg>
)

export { IconHeartPlusRounded as default }
