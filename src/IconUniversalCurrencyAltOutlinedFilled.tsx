import React from 'react'
import { IconProps } from './types'

const IconUniversalCurrencyAltOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-320h160v-160h-60v100H600v60Zm-120-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM200-480h60v-100h100v-60H200v160ZM80-200v-560h800v560H80Z" />
  </svg>
)

export { IconUniversalCurrencyAltOutlinedFilled as default }
