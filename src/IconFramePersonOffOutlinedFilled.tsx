import React from 'react'
import { IconProps } from './types'

export const IconFramePersonOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m818-28-52-52H640v-80h46l-80-80H240v-76q0-21 10.5-39.5T279-385q31-18 64.5-30.5T412-434L160-686v46H80v-126l-54-54 57-57L875-85l-57 57ZM600-600q0 26-10.5 48.5T562-512L392-682q17-17 39.5-27.5T480-720q50 0 85 35t35 85Zm280 280v126l-80-80v-46h80ZM160-80q-33 0-56.5-23.5T80-160v-160h80v160h160v80H160Zm640-560v-160H640v-80h160q33 0 56.5 23.5T880-800v160h-80ZM320-880v80h-46l-80-80h126Z" />
  </svg>
)
