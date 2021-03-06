import styled from 'styled-components';

const LinkAnimated = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Exo:100&display=swap');
  font-family: 'Exo', sans-serif;
  font-size: calc(1rem + 1vw);
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.primaryLight};
  ${props =>
    props.selected &&
    `border-bottom:  5px solid ${props.theme.colors.primaryLight}`};
  transition: 0.4s;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${props => props.theme.colors.secondary};
    height: 5px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default LinkAnimated;
