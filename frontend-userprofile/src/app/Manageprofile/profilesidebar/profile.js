import React, { useState, useEffect } from 'react';
import { IconButton, Switch, Typography, Box } from '@mui/material';
import { ArrowForwardIos, Circle, Info } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './ProfileSidebar.module.css';
import { FaArrowLeft } from 'react-icons/fa';

const ProfileWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingBottom: '0.5px',
});

const ProfileImageWrapper = styled(Box)({
  position: 'relative',
  width: 80,
  height: 80,
  marginRight: '1rem',
  paddingBottom: '0.5px',
});

const ProfileImage = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
});

const UserProfile = () => {
  const [user, setUserProfile] = useState({});
  const [profileImage, setProfileImage] = useState('');
  const router = useRouter();
  const userId = 'dupC0029';

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/profile/${userId}/`);
      setUserProfile(response.data);
      if (response.data.user_profile_photo) {
        const baseURL = 'http://localhost:8000/profile_photos';
        let imageUrl = '';

        if (typeof response.data.user_profile_photo === 'string' && response.data.user_profile_photo.startsWith('http')) {
          imageUrl = response.data.user_profile_photo;
        } else if (response.data.user_profile_photo && response.data.user_profile_photo.startsWith('/')) {
          imageUrl = `${baseURL}${response.data.user_profile_photo}`;
        } else if (response.data.user_profile_photo && response.data.user_profile_photo.data) {
          const byteArray = new Uint8Array(response.data.user_profile_photo.data);
          const base64String = btoa(
            byteArray.reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          imageUrl = `data:image/jpeg;base64,${base64String}`;
        }

        setProfileImage(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleViewProfileClick = () => {
    router.push('/Manageprofile/ViewProfile');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.sidebarContainer}>
        <div className={styles.header}>
          <IconButton color="inherit" href="/Manageprofile/profilesidebar" className={styles.backButton}>
            <FaArrowLeft />
          </IconButton>
        </div>
        <div className={styles.menuList}>
          <ProfileWrapper>
            <ProfileImageWrapper>
              <ProfileImage src={profileImage} alt="Profile Image" />
            </ProfileImageWrapper>
            <Box>
              <Typography variant="h6" style={{ color: '#B0B0B0' }}>
                {user.user_id}
              </Typography>
            </Box>
          </ProfileWrapper>
          <div className={styles.buttonContainer}>
            <button onClick={handleViewProfileClick}>View profile</button>
          </div>
          <div className={styles.menuItem}>
            <span>Recovery phrase</span>
            <ArrowForwardIos
              className={styles.menuLink}
              style={{ fontSize: '1rem' }}
              onClick={() => router.push('/Manageprofile/profilesidebar/RecoveryPhrase')}
            />
          </div>
          <div className={styles.menuItem}>
            <span>Show private key</span>
            <ArrowForwardIos
              className={styles.menuLink}
              style={{ fontSize: '1rem' }}
              onClick={() => router.push('/Manageprofile/profilesidebar/Privacykey')}
            />
          </div>
          <div className={styles.menuItem}>
            <span>Hide Assets</span>
            <ArrowForwardIos
              className={styles.menuLink}
              style={{ fontSize: '1rem' }}
              onClick={() => router.push('/Manageprofile/profilesidebar/Hideassets')}
            />
          </div>
          <div className={styles.menuItem}>
            <span>Color</span>
            <Circle
              className={styles.colorCircle}
              onClick={() => router.push('/Manageprofile/profilesidebar/Themecolour')}
            />
          </div>
          <div className={styles.menuItem}>
            <span>Hide address</span>
            <div className={styles.switchWithIcon}>
              <Info className={styles.infoIcon} />
              <Switch defaultChecked={false} />
            </div>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default UserProfile;
