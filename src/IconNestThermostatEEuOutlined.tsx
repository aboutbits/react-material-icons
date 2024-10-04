import React from 'react'
import { IconProps } from './types'

const IconNestThermostatEEuOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160h191q-94-47-152.5-137.5T100-500q0-79 30-148t81.5-120.5Q263-820 332-850t148-30q79 0 148 30t120.5 81.5Q800-717 830-648t30 148q0 112-58.5 202.5T649-160h191q0 33-23.5 56.5T760-80H200Zm280-120q125 0 212.5-87.5T780-500q0-125-87.5-212.5T480-800q-125 0-212.5 87.5T180-500q0 125 87.5 212.5T480-200ZM292-365h152v-39h-93l-1-2q20-20 33.5-33t21.5-21q18-18 27.5-36t9.5-37q0-27-20.5-47T365-600q-39 0-55.5 21T290-547l39 16q1-2 8-15t27-13q23 0 27.5 12.5T396-531q0 8-3 16.5T375-489q-9 10-33.5 34.5L292-405v40Zm282 5q45 0 70.5-34.5T670-480q0-51-26-85.5T574-600q-45 0-70.5 34.5T478-480q0 51 25.5 85.5T574-360Zm0-41q-26 0-39-23.5T522-480q0-24 11-51.5t41-27.5q30 0 41 27.5t11 51.5q0 32-13 55.5T574-401Zm-94-99Z" />
  </svg>
)

export { IconNestThermostatEEuOutlined as default }
