import React from 'react'
import { IconProps } from './types'

const IconTextureMinusOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M176-120q-19-4-35.5-20.5T120-176l664-664q21 5 36 20.5t21 35.5L176-120Zm196 0 108-108v108H372Zm188-80v-80h320v80H560ZM120-372v-112l356-356h112L120-372Zm492 12 228-228v112L724-360H612ZM120-680v-80q0-33 23.5-56.5T200-840h80L120-680Z" />
  </svg>
)

export { IconTextureMinusOutlined as default }
