"use client";

import Link from 'next/link';
import { FaArrowLeft, FaClock, FaFileAlt, FaCog } from 'react-icons/fa';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowForwardIos, Circle, Info } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';



const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem',
  backgroundColor: '#000000',
  borderRadius: '8px',
  color: '#FFFFFF',
  width:'428px',
  height:'auto' ,
  minHeight:'100vh',// // Adjust height for additional content
  padding : '20px',
});
const styles = {
  menuList: {
    flex: 1,
    overflowY: 'auto', // Allow vertical scrolling
    marginTop: '20px',

    // Hide scrollbars for WebKit browsers (Chrome, Safari)
    '::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar
    },

    // Hide scrollbars for Firefox
    scrollbarWidth: 'none', // Hide scrollbar

    // Hide scrollbars for Internet Explorer and Edge
    '-msOverflowStyle': 'none', // Hide scrollbar
  }
};
const ButtonLink = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  textTransform: 'none',
  backgroundColor:"gray"
});
const Header = styled('header')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '-0.5rem',
  height: '10px',
  size: '10px',
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
const Arrow = styled('ArrowForwardIos')({
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
const container = {
  
    display: 'flex',
    justifyContent: 'center',
    width:'400px',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: 'white',

};
const handleLeftArrowClick = () => {
  window.location.href = 'http://localhost:3003/Dashboard';
};

const ManageProfile = () => {
  const router = useRouter();
  return (
    <div className={container}>
    <StyledContainer maxWidth="md">
      <Header>
        <Link href="/ViewProfile">
          <BackArrow onClick={handleLeftArrowClick}/>
        </Link>
        <MenuTitle>Manage Profile</MenuTitle>
      </Header>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/ManageProfile/EditProfile">
              Edit Profile Details 
              <ArrowForwardIos
                className={styles.menuLink}
                style={{ fontSize: '1rem', marginLeft: '125px' }} // Add margin-left to create space
                onClick={() => router.push('/ManageProfile/EditProfile')}
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ManageProfile/ManagePrivacy">
              Manage Privacy 
              <ArrowForwardIos
                className={styles.menuLink}
                style={{ fontSize: '1rem', marginLeft: '140px' }} // Add margin-left to create space
                onClick={() => router.push('/ManageProfile/ManagePrivacy')}
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ManageProfile/ViewProfile">
              View Your Profile 
              <ArrowForwardIos
                className={styles.menuLink}
                style={{ fontSize: '1rem', marginLeft: '135px' }} // Add margin-left to create space
                onClick={() => router.push('/ManageProfile/ViewProfile')}
              /> 
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      
    </StyledContainer>
    </div>
  );
};

export default ManageProfile;
