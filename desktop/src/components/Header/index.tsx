import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { signOut } = useAuth();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="MyFinances" />

        <FiLogOut onClick={signOut} size={36} color="#3c4245" />
      </header>
    </Container>
  );
};

export default Header;
