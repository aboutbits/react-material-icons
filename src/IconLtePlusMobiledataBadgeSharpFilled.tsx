import React from 'react'
import { IconProps } from './types'

const IconLtePlusMobiledataBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-320h160v-80h-80v-240h-80v320Zm220 0h80v-240h60v-80H320v80h60v240Zm180 0h160v-80h-80v-40h60v-80h-60v-40h80v-80H560v320ZM40-120v-720h880v330h-50v-50h-60v50h-50v60h50v50h60v-50h50v330H40Z" />
  </svg>
)

export { IconLtePlusMobiledataBadgeSharpFilled as default }
