import React from 'react'
import { IconProps } from './types.js'

export const IconInkEraserOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M763-84 602-244l-58 60q-11 11-25.5 17.5T487-160H223q-16 0-30.5-6T167-183l-62-62q-23-23-23.5-57t22.5-58l188-194L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm116-477q0 16-5.5 30.5T856-504L743-388q-12 12-28.5 12T686-388L432-642q-11-11-11.5-27.5T431-698l113-118q12-12 27-18t30-6q16 0 30.5 5.5T657-817l199 199q12 11 17.5 26t5.5 31Z" />
  </svg>
)
