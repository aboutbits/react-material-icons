import React from 'react'
import { IconProps } from './types'

export const IconCommentBankRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm260-560v245q0 12 10 17.5t20-.5l55-33q8-5 15-5t15 5l55 33q10 6 20 .5t10-17.5v-245H500Z" />
  </svg>
)
