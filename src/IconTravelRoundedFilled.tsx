import React from 'react'
import { IconProps } from './types'

const IconTravelRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M431-544 181-652q-24-11-29.5-35.5T165-731l16-16q8-8 19.5-12t23.5-2l360 64 124-125q23-23 56.5-23t56.5 23q23 23 23 56.5T821-709L697-584l63 359q2 12-1.5 24T747-181l-16 15q-19 19-44 14t-36-29L544-431 442-330l22 124q2 10-1 19.5T453-170l-17 17q-14 14-34.5 11T371-163l-73-135-135-73q-18-10-21-30.5t11-34.5l17-17q7-7 16.5-10t19.5-1l123 21 102-101Z" />
  </svg>
)

export { IconTravelRoundedFilled as default }
