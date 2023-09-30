import styled from 'styled-components';
import borders from '../../styles/theme/borders';
import colors from '../../styles/theme/colors';

export const Thumbnail = styled.img`
    border-radius: ${borders.xs}px;
    height: 240px;
    width: 160px;
    box-shadow: ${colors.grey2} 0px 2px 8px 0px;
`