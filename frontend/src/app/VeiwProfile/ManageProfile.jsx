// pages/ManageProfile.js
"use client";

import Link from 'next/link';
import styles from './ManageProfile.module.css'; // Ensure this path is correct
import { FaArrowRight, FaClock, FaFileAlt, FaCog } from 'react-icons/fa';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
  padding: '1rem',
  backgroundColor: '#000000',
  borderRadius: '8px',
  color: '#FFFFFF',
  width: '350px',
  height: '600px',
});
const ManageProfile = () => {
  return (
    <Container maxWidth="md">
      <StyledContainer>
        <div className={styles.menu}>
          <header className={styles.header}>
            <Link href="/VeiwProfile">
              <div className={styles.backArrow}>←</div>
            </Link>
            <h2>Manage Profile</h2>
          </header>
          <br></br>
          <nav>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <Link href="/edit-profile-details">
                  Edit Profile Details <FaArrowRight className={styles.arrow} />
                </Link>
              </li>
              <br></br>
              <li className={styles.navItem}>
                <Link href="/manage-privacy">
                  Manage Privacy <FaArrowRight className={styles.arrow} />
                </Link>
              </li>
              <br></br>
              <li className={styles.navItem}>
                <Link href="/VeiwProfile/User">
                  View Your Profile <FaArrowRight className={styles.arrow} />
                </Link>
              </li>
            </ul>
          </nav>
          <footer className={styles.footer}>
            <div className={styles.footerItem}>
              <FaClock />
              <span>Assets</span>
            </div>
            <div className={styles.footerItem}>
              <FaFileAlt />
              <span>Transactions</span>
            </div>
            <div className={`${styles.footerItem}`}>
              <FaCog />
              <span>Settings</span>
            </div>
          </footer>
        </div>
        </StyledContainer>
    </Container>
  );
};

export default ManageProfile;
