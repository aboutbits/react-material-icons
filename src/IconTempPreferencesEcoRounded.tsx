import React from 'react'
import { IconProps } from './types'

const IconTempPreferencesEcoRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-690q-8 0-14-6t-6-14v-80q0-42 29-71t71-29h80q8 0 14 6t6 14v80q0 42-29 71t-71 29h-80ZM220-450q-58 0-99-41t-41-99v-100q0-17 11.5-28.5T120-730h100q58 0 99 41t41 99v100q0 17-11.5 28.5T320-450H220ZM640-90q-39 0-74.5-12T501-135l-33 33q-11 11-28 11t-28-11q-11-11-11-28t11-28l33-33q-21-29-33-64.5T400-330q0-100 70-170.5T640-571h161q33 0 56.5 23.5T881-491v161q0 100-70.5 170T640-90Zm0-80q67 0 113-47t46-113v-160H640q-66 0-113 46.5T480-330q0 23 5.5 43.5T502-248l110-110q11-11 28-11t28 11q11 11 11 28t-11 28L558-192q18 11 38.5 16.5T640-170Zm1-161Z" />
  </svg>
)

export { IconTempPreferencesEcoRounded as default }