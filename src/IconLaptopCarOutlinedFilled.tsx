import React from 'react'
import { IconProps } from './types.js'

export const IconLaptopCarOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-120h80v-440q0-33 23.5-56.5T200-800h520q33 0 56.5 23.5T800-720v120H494q-37 0-68.5 19.5T382-526l-62 178v188H40Zm386 80q-11 0-18.5-7.5T400-106v-223l57-164q5-12 15-19.5t23-7.5h290q13 0 23 7.5t15 19.5l57 164v223q0 11-7.5 18.5T854-80h-28q-11 0-18.5-7.5T800-106v-34H480v34q0 11-7.5 18.5T454-80h-28Zm48-280h332l-35-100H509l-35 100Zm66 150q17 0 28.5-11.5T580-250q0-17-11.5-28.5T540-290q-17 0-28.5 11.5T500-250q0 17 11.5 28.5T540-210Zm200 0q17 0 28.5-11.5T780-250q0-17-11.5-28.5T740-290q-17 0-28.5 11.5T700-250q0 17 11.5 28.5T740-210Z" />
  </svg>
)