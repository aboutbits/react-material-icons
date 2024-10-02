import React from 'react'
import { IconProps } from './types'

export const IconLtePlusMobiledataBadgeSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-560 560Zm800-440h-80v-120H120v560h720v-120h80v200H40v-720h880v200ZM160-320h160v-80h-80v-240h-80v320Zm220 0h80v-240h60v-80H320v80h60v240Zm180 0h160v-80h-80v-40h60v-80h-60v-40h80v-80H560v320Zm250-80h60v-50h50v-60h-50v-50h-60v50h-50v60h50v50Z" />
  </svg>
)
