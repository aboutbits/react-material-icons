import React from 'react'
import { IconProps } from './types'

export const IconCalendarViewWeekSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M510-200v-560h135v560H510Zm-195 0v-560h135v560H315Zm-195 0v-560h135v560H120Zm585 0v-560h135v560H705Z" />
  </svg>
)
