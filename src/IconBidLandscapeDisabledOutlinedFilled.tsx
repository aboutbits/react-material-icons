import React from 'react'
import { IconProps } from './types'

const IconBidLandscapeDisabledOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M832-16 728-120H200q-33 0-56.5-23.5T120-200v-528L16-832l57-57L889-73l-57 57Zm8-220L650-426l110-124v-120L593-483 236-840h524q33 0 56.5 23.5T840-760v524Zm-640-46 160-160 162 162 22-24-218-218-126 126v114Z" />
  </svg>
)

export { IconBidLandscapeDisabledOutlinedFilled as default }
