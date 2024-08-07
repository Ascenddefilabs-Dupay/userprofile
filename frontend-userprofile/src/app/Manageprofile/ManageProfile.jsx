"use client";

import Link from 'next/link';
import { FaArrowLeft, FaClock, FaFileAlt, FaCog } from 'react-icons/fa';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem',
  backgroundColor: '#000000',
  borderRadius: '8px',
  color: '#FFFFFF',
  width:'320px',
  height:'550px' // Adjust height for additional content
});

const Header = styled('header')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '1rem',
});

const BackArrow = styled(FaArrowLeft)({
  cursor: 'pointer',
  color: '#FFFFFF',
  fontSize: '1.0rem', // Adjust size as needed
  marginRight: '1rem', // Adjust spacing from the text
});
const MenuTitle = styled(Typography)({
  fontSize: '1.3rem',
  color: '#FFFFFF',
});

const Nav = styled('nav')({
  width: '100%',
});

const NavList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

const NavItem = styled('li')({
  margin: '2.5rem 0',
});

const NavLink = styled(Link)({
  color: '#FFFFFF',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
   
  },
});
const Arrow = styled('span')({
  marginLeft: 'auto',
  color: '#9E9E9E',
  fontSize: '1rem',
});


const Footer = styled('footer')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 'auto',
});

const FooterItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#FFFFFF',
  cursor: 'pointer',
});

const ManageProfile = () => {
  return (
    <StyledContainer maxWidth="md">
      <Header>
        <Link href="/VeiwProfile">
          <BackArrow />
        </Link>
        <MenuTitle>Manage Profile</MenuTitle>
      </Header>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/Manageprofile/EditProfile">
              Edit Profile Details <Arrow> &gt; </Arrow>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Manageprofile/ManagePrivacy">
              Manage Privacy <Arrow> &gt; </Arrow>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Manageprofile/ViewProfile">
              View Your Profile <Arrow> &gt; </Arrow>
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <Footer>
        <FooterItem>
          <FaClock />
          <span>Assets</span>
        </FooterItem>
        <FooterItem>
          <FaFileAlt />
          <span>Transactions</span>
        </FooterItem>
        <FooterItem>
          <FaCog />
          <span>Settings</span>
        </FooterItem>
      </Footer>
    </StyledContainer>
  );
};

export default ManageProfile;
