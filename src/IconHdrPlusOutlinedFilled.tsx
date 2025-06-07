import React from 'react'
import { IconProps } from './types.js'

export const IconHdrPlusOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-260h60v-60h60v-60h-60v-60h-60v60h-60v60h60v60ZM280-480h60v-100h80v100h60v-240h-60v80h-80v-80h-60v240Zm240 0h120q24 0 42-18t18-42v-120q0-24-18-42t-42-18H520v240ZM420-340h-80v-40h80v40Zm-2 140h62l-36-84q15-9 25.5-23.5T480-340v-40q0-25-17.5-42.5T420-440H280v240h60v-80h44l34 80Zm162-340v-120h60v120h-60ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
