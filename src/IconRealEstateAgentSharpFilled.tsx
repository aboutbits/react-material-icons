import React from 'react'
import { IconProps } from './types'

const IconRealEstateAgentSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-360v-96L374-600h-94v-100l280-200 280 200v340h-80ZM580-640h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM40-80v-440h160v440H40Zm520 0-280-79v-361h79l321 120v80H520l-70-27-14 37 84 30h360v80L560-80Z" />
  </svg>
)

export { IconRealEstateAgentSharpFilled as default }
