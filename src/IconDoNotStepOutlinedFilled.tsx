import React from 'react'
import { IconProps } from './types'

export const IconDoNotStepOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m740-333-56-56 179-179 57 56-180 179Zm-84-85L372-701l180-179 283 283-179 179ZM791-56 553-293 420-160H40v-105q0-26 14.5-46T92-340q17-7 37.5-17t41.5-24l55 55q6 6 14 6t14-6q6-6 6-14t-6-14l-51-52 15.5-15.5Q226-429 234-438l51 51q6 6 14 6t14-6q6-6 6-14t-6-14l-56-56q6-11 10.5-22t7.5-23l68 69q6 6 14 6t14-6q6-6 6.5-14t-5.5-14L56-791l56-57 735 736-56 56Z" />
  </svg>
)
