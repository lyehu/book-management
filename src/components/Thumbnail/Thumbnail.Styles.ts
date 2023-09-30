import styled from 'styled-components';

export const Thumbnail = styled.img`
    border-radius: ${props => props.theme.borders.xs}px;
    height: 240px;
    width: 160px;
    box-shadow: ${props => props.theme.colors.grey2} 0px 2px 8px 0px;
`