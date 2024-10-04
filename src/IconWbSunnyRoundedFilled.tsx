import React from 'react'
import { IconProps } from './types.js'

export const IconWbSunnyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-840v-40q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v40q0 17-11.5 28.5T480-800q-17 0-28.5-11.5T440-840Zm0 760v-40q0-17 11.5-28.5T480-160q17 0 28.5 11.5T520-120v40q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80Zm440-360h-40q-17 0-28.5-11.5T800-480q0-17 11.5-28.5T840-520h40q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440Zm-760 0H80q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h40q17 0 28.5 11.5T160-480q0 17-11.5 28.5T120-440Zm670-293-14 14q-11 11-27.5 11T720-720q-11-11-11.5-27.5T719-776l15-15q11-12 28-12t29 12q12 12 11.5 29T790-733ZM241-184l-15 15q-11 12-28 12t-29-12q-12-12-11.5-29t12.5-29l14-14q11-11 27.5-11t28.5 12q11 11 11.5 27.5T241-184Zm492 14-14-14q-11-11-11-27.5t12-28.5q11-11 27.5-11.5T776-241l15 15q12 11 12 28t-12 29q-12 12-29 11.5T733-170ZM184-719l-15-15q-12-11-12-28t12-29q12-12 29-11.5t29 12.5l14 14q11 11 11 27.5T240-720q-11 11-27.5 11.5T184-719Zm296 479q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
  </svg>
)