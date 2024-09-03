import React from 'react'
import { IconProps } from './types'

const IconPlannerBannerAdPtOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H240v640Zm40-80h400L542-420l-92 120-62-80-108 140Zm-40 80v-640 640Z" />
  </svg>
)

export { IconPlannerBannerAdPtOutlined as default }