import React from 'react'
import { IconProps } from './types'

const IconSignalCellularNullSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v800H80Zm193-80h527v-526L273-160Z" />
  </svg>
)

export { IconSignalCellularNullSharpFilled as default }
