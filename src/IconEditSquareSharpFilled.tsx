import React from 'react'
import { IconProps } from './types.js'

export const IconEditSquareSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360v-170l425-425 167 171-422 424H360Zm424-368 57-56-56-56-57 56 56 56ZM120-120v-720h437L280-563v283h282l278-278v438H120Z" />
  </svg>
)
