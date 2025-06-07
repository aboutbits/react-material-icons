import React from 'react'
import { IconProps } from './types.js'

export const IconTamperDetectionOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-160q-17 0-28.5-11.5T560-200v-88L248-600H120q-17 0-28.5-11.5T80-640v-80q0-11 2.5-20.5T90-758l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11L678-170q-8 5-17.5 7.5T640-160h-40Zm120-192L272-800h368q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v68ZM178-40q-17 0-31.5-6.5T121-64L0-184l14-14q8-8 19-13t23-5q12 0 23 4.5T98-198l22 22v-294q0-13 9-21.5t21-8.5q13 0 21.5 8.5T180-470v150h40v-210q0-13 9-21.5t21-8.5q13 0 21.5 8.5T280-530v210h40v-170q0-13 9-21.5t21-8.5q13 0 21.5 8.5T380-490v170h40v-130q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-450v330q0 33-23 56.5T400-40H178Z" />
  </svg>
)
