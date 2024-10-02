import React from 'react'
import { IconProps } from './types'

export const IconPlannerBannerAdPtSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm120-160h400L542-420l-92 120-62-80-108 140Z" />
  </svg>
)
