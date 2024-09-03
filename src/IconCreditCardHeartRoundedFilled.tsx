import React from 'react'
import { IconProps } from './types'

const IconCreditCardHeartRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M716-157q-8 0-15-2.5t-13-8.5L576-280q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5T880-337q0 15-6 30t-18 27L744-168q-6 6-13 8.5t-15 2.5Zm-556-3q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v153q0 17-11.5 28.5T840-527q-17 0-28.5-11.5T800-567v-73H160v160h300q17 0 25 16t-3 31q-22 33-34 72t-12 81q0 19 2.5 37.5T446-207q5 17-5.5 32T413-160H160Z" />
  </svg>
)

export { IconCreditCardHeartRoundedFilled as default }
