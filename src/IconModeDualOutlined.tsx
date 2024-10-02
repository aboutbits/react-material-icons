import React from 'react'
import { IconProps } from './types'

export const IconModeDualOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M232-131q-12 11-29 10.5T175-133q-35-38-57-84t-22-98q0-50 14-97t34-92q15-36 28-72.5t13-75.5q0-35-18-65t-44-54q-12-11-12-27.5t11-28.5q11-12 27.5-12.5T178-829q38 35 62.5 80t24.5 97q0 47-13.5 91.5T219-473q-17 38-30 76.5T176-316q0 37 16 69.5t42 59.5q11 12 10.5 28.5T232-131Zm160 0q-12 11-29 10.5T335-133q-35-38-57-84t-22-98q0-50 14-97t34-92q15-36 28-72.5t13-75.5q0-35-18-65t-44-54q-12-11-12-27.5t11-28.5q11-12 27.5-12.5T338-829q38 35 62.5 80t24.5 97q0 47-13.5 91T379-474q-17 38-30 77t-13 81q0 37 16 69.5t42 59.5q11 12 10.5 28.5T392-131Zm88 11v-720q0-17 11.5-28.5T520-880q17 0 28.5 11.5T560-840v126l102-101q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L560-600v80h80l158-158q11-11 28-11t28 11q11 11 11 28t-11 28L754-520h126q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H754l101 102q11 11 11 27.5T854-282q-11 11-28 11t-28-11L640-440h-80v80l158 158q11 11 11 28t-11 28q-11 11-28 11t-28-11L560-246v126q0 17-11.5 28.5T520-80q-17 0-28.5-11.5T480-120Z" />
  </svg>
)
