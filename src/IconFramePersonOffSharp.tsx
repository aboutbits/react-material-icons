import React from 'react'
import { IconProps } from './types'

const IconFramePersonOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m818-28-52-52H640v-80h46l-80-80H240v-76q0-21 10.5-39.5T279-385q31-18 64.5-30.5T412-434L160-686v46H80v-126l-54-54 57-57L875-85l-57 57ZM526-320l-40-40q-45 0-85 10t-75 30h200Zm74-280q0 26-10.5 48.5T562-512l-57-57q7-5 11-13t4-18q0-17-11.5-28.5T480-640q-10 0-18 4t-13 11l-57-57q17-17 39.5-27.5T480-720q50 0 85 35t35 85Zm280 280v126l-80-80v-46h80ZM80-80v-240h80v160h160v80H80Zm720-560v-160H640v-80h240v240h-80Zm-323 43Zm9 277ZM320-880v80h-46l-80-80h126Z" />
  </svg>
)

export { IconFramePersonOffSharp as default }
