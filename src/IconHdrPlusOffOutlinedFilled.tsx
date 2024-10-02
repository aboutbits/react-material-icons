import React from 'react'
import { IconProps } from './types'

export const IconHdrPlusOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-540h60v-120h-60v120ZM340-340h80v-40h-80v40Zm-60 140h60v-80h44l34 80h62l-36-84q15-9 25.5-23.5T480-340v-40q0-25-17.5-42.5T420-440H280v240Zm0-280h60v-84l-60-60v144ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31-156.5T199-761l562 562q-51 57-123.5 88T480-80Zm340 52L28-820l56-56L876-84l-56 56Zm-6-232L594-480h46q24 0 42-18t18-42v-120q0-24-18-42t-42-18H520v166l-40-40v-126h-60v66L259-815q47-32 103-48.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 62-17 117.5T814-260Z" />
  </svg>
)
