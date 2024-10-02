import React from 'react'
import { IconProps } from './types'

export const IconTextRotationDownSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120 100-258l58-56 42 42v-528h80v528l42-42 56 56-138 138Zm160-156v-76l112-38v-178l-112-40v-76l440 164v80L400-276Zm176-138 182-64v-4l-182-64v132Z" />
  </svg>
)
