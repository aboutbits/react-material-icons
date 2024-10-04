import React from 'react'
import { IconProps } from './types.js'

export const IconSwapHorizontalCircleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M354-360h126q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440H354l35-36q11-11 11-27.5T388-532q-11-11-28-11t-28 11L228-428q-12 12-12 28t12 28l104 104q11 11 27.5 11.5T388-268q11-11 11.5-27.5T389-324l-35-36Zm252-160-35 36q-11 11-11 27.5t12 28.5q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L628-692q-11-11-27.5-11.5T572-692q-11 11-11.5 27.5T571-636l35 36H480q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520h126ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)