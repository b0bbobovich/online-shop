import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background-color: #fff7f7;
  ${mobile({ flexDirection: 'column' })};
  ${tablet({ flexDirection: 'column' })};
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1`
  margin-bottom: 0;
  ${mobile({ display: 'none' })};
`;

export const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  ${mobile({ display: 'none' })};
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })};
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })};
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
