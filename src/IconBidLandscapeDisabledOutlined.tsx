import React from 'react'
import { IconProps } from './types'

const IconBidLandscapeDisabledOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M73-889 889-73l-57 57-104-104H200q-33 0-56.5-23.5T120-200v-528L16-832l57-57Zm287 447L200-282v82h448L544-304l-22 24-162-162ZM200-648v252l126-126-126-126Zm36-192h524q33 0 56.5 23.5T840-760v524l-80-80v-234L650-426l-57-57 167-187v-90H316l-80-80Zm357 357Zm-158 70ZM326-522Zm34 80Zm176-98Z" />
  </svg>
)

export { IconBidLandscapeDisabledOutlined as default }
