import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const HamburgerIcon = props => (
  <Svg width={32} height={32} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 6h16M4 12h16M4 18h16"
      stroke={props.color || '#000'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HomeIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715M15 18H9"
      stroke={props.color || '#1C274C'}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

const ContactIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#FFF"
        fillOpacity={0.01}
        fillRule="nonzero"
        d="M0 0h24v24H0z"
      />
      <Path d="M18 16a4 4 0 1 0 0-8" />
      <Path
        d="M18 16a4 4 0 1 0 0-8"
        stroke={props.color || '#212121'}
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path d="M6 8a4 4 0 1 0 0 8" />
      <Path
        d="M6 8a4 4 0 1 0 0 8"
        stroke={props.color || '#212121'}
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M6 16V8a6 6 0 0 1 12 0v8a6 6 0 0 1-6 6"
        stroke={props.color || '#212121'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </G>
  </Svg>
);

export {HamburgerIcon, HomeIcon, ContactIcon};
