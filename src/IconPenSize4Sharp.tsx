import React from 'react'
import { IconProps } from './types'

const IconPenSize4Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M229-229q-29-29-29-71t29-71l360-360q29-29 71-29t71 29q29 29 29 71t-29 71L371-229q-29 29-71 29t-71-29Z" />
  </svg>
)

export { IconPenSize4Sharp as default }
