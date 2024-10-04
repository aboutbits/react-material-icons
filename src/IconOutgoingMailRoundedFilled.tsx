import React from 'react'
import { IconProps } from './types'

const IconOutgoingMailRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M727-280H600q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q5 5 8 12.5t3 15.5q0 8-3 15.5t-8 12.5L748-188q-11 11-27.5 11.5T692-188q-11-11-11-28t11-28l35-36ZM416-520l264-154v-86h-10L416-613 169-760h-9v88l256 152ZM155-280q-31 0-53-22t-22-53v-410q0-31 22-53t53-22h530q31 0 53 22t22 53v173q0 14-11 24t-25 9q-49-2-93.5 16T551-490q-35 35-53.5 80T481-316q1 14-9 25t-24 11H155Z" />
  </svg>
)

export { IconOutgoingMailRoundedFilled as default }
