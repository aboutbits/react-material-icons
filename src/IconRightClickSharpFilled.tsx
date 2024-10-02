import React from 'react'
import { IconProps } from './types'

export const IconRightClickSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m492-240 25-84q54-13 88.5-56T640-480q0-66-47-113t-113-47q-57 0-100 34.5T324-517l-84 25q5-96 74-162t166-66q100 0 170 70t70 170q0 97-66 166t-162 74ZM139-60l-79-79 171-171-151-50 400-120L360-80l-50-151L139-60Z" />
  </svg>
)
