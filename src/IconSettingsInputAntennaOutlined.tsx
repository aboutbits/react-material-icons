import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsInputAntennaOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-480q0-92 34.5-172T169-791.5q60-59.5 140-94T480-920q91 0 171 34.5t140 94Q851-732 885.5-652T920-480h-80q0-75-28.5-140.5T734-735q-49-49-114.5-77T480-840q-74 0-139.5 28T226-735q-49 49-77.5 114.5T120-480H40Zm160 0q0-118 82-199t198-81q116 0 198 81t82 199h-80q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480h-80ZM360-64l-56-56 136-136v-132q-27-12-43.5-37T380-480q0-42 29-71t71-29q42 0 71 29t29 71q0 30-16.5 55T520-388v132l136 136-56 56-120-120L360-64Z" />
  </svg>
)
