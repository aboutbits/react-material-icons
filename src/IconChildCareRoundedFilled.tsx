import React from 'react'
import { IconProps } from './types'

const IconChildCareRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-490q21 0 35.5-14.5T630-540q0-21-14.5-35.5T580-590q-21 0-35.5 14.5T530-540q0 21 14.5 35.5T580-490Zm-200 0q21 0 35.5-14.5T430-540q0-21-14.5-35.5T380-590q-21 0-35.5 14.5T330-540q0 21 14.5 35.5T380-490Zm100 210q60 0 108.5-33t71.5-87H300q23 54 71.5 87T480-280Zm0 160q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm16-500q17 0 38.5-6.5T556-656q0-12-8-21t-20-9q-8 0-15.5 3t-16.5 3q-21 0-35.5-14.5T446-730q0-11 3.5-18.5T460-759q-19 2-37 5t-35 10q-1 3-1.5 7t-.5 7q0 45 32.5 77.5T496-620Z" />
  </svg>
)

export { IconChildCareRoundedFilled as default }
