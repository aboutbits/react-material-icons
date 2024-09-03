import React from 'react'
import { IconProps } from './types'

const IconCalendarViewMonthSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-500v-260h213v260H120Zm253 0v-260h214v260H373Zm254 0v-260h213v260H627ZM120-200v-260h213v260H120Zm253 0v-260h214v260H373Zm254 0v-260h213v260H627Z" />
  </svg>
)

export { IconCalendarViewMonthSharpFilled as default }
