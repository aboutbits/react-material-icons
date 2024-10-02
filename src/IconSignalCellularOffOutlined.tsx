import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M273-160h414L480-367 273-160ZM831-16l-64-64H80l344-344L96-751l56-57L888-72l-57 56Zm49-177-80-80v-414L593-480l-57-56 344-344v687ZM697-377ZM584-264Z" />
  </svg>
)
