import React from 'react'
import { IconProps } from './types.js'

export const IconBluetoothConnectedRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-420q-25 0-42.5-17.5T140-480q0-25 17.5-42.5T200-540q25 0 42.5 17.5T260-480q0 25-17.5 42.5T200-420Zm560 0q-25 0-42.5-17.5T700-480q0-25 17.5-42.5T760-540q25 0 42.5 17.5T820-480q0 25-17.5 42.5T760-420ZM440-137v-247L284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l156 156v-247q0-18 12-29.5t28-11.5q8 0 15 3t13 9l172 172q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L536-480l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-108q-6 6-13 9t-15 3q-16 0-28-11.5T440-137Zm80-439 76-76-76-74v150Zm0 342 76-74-76-76v150Z" />
  </svg>
)
