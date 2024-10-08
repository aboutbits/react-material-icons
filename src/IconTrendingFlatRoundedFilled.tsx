import React from 'react'
import { IconProps } from './types'

const IconTrendingFlatRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M727-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h567l-55-56q-12-12-11.5-28t12.5-28q12-11 28.5-11.5T729-632l123 124q12 12 12 28t-12 28L728-328q-11 11-27.5 11T672-328q-12-12-12-28.5t12-28.5l55-55Z" />
  </svg>
)

export { IconTrendingFlatRoundedFilled as default }
