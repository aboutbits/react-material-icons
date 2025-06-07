import React from 'react'
import { IconProps } from './types.js'

export const IconCameraswitchSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-400h120l40-40h160l40 40h120v400H240Zm240-120q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM342-940q34-11 68.5-15.5T480-960q94 0 177.5 33.5t148 93Q870-774 911-693.5T960-520h-80q-7-72-38-134.5T762.5-765Q714-813 651-842.5T516-878l62 62-56 56-180-180ZM618-20Q584-9 549.5-4.5T480 0q-94 0-177.5-33.5t-148-93Q90-186 49-266.5T0-440h80q8 72 38.5 134.5t79 110.5Q246-147 309-117.5T444-82l-62-62 56-56L618-20Z" />
  </svg>
)
