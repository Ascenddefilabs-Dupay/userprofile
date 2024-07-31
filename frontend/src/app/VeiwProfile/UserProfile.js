"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Avatar, Button, IconButton, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useRouter } from 'next/navigation';

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

const ProfileWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingBottom: '1rem',
  borderBottom: '1px solid #333',
});

const ProfileImageWrapper = styled(Box)({
  position: 'relative',
  width: 80,
  height: 80,
  marginRight: '1rem',
});

const ProfileImage = styled(Avatar)({
  width: '100%',
  height: '100%',
});

const UploadInput = styled('input')({
  display: 'none',
});

const LabelTypography = styled(Typography)({
  fontWeight: 'bold',
  display: 'inline',
  color: '#B0B0B0',
  width: '100px',
  flexShrink: 0,
});

const ValueTypography = styled(Typography)({
  display: 'inline',
  marginLeft: '0.5rem',
  flexGrow: 1,
});

const InfoRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: '#333',
  color: '#FFFFFF',
  borderRadius: '16px',
  textTransform: 'none',
  padding: '0.25rem 1rem',
  '&:hover': {
    backgroundColor: '#444',
  },
});

const UserProfile = () => {
  const [users, setUserProfile] = useState({});
  const [profileImage, setProfileImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const userId = 'John'; // Replace with sessionStorage['first_name'] or appropriate user ID retrieval
  const router = useRouter(); // Initialize useRouter

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/profile/${userId}/`);
      setUserProfile(response.data);
      if (response.data.profile_photo) {
        const baseURL = 'http://localhost:8000/profile_photos';
        const imageUrl = response.data.profile_photo.startsWith('http')
          ? response.data.profile_photo
          : baseURL + response.data.profile_photo;
        setProfileImage(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        uploadImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('id', users.id || '');
    formData.append('profile_photo', file);
    formData.append('first_name', users.first_name || '');
    formData.append('middle_name', users.middle_name || '');
    formData.append('last_name', users.last_name || '');
    formData.append('dob', users.dob || '');
    formData.append('email', users.email || '');
    formData.append('phone_number', users.phone_number || '');
    formData.append('country', users.country || '');
    formData.append('city', users.city || '');

    try {
      const response = await axios.put(`http://localhost:8000/api/profile/${userId}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile image updated:', response.data);
      setOpenDialog(true);
    } catch (error) {
      console.error('Error updating profile image:', error.response ? error.response.data : error.message);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const getFullName = () => {
    return `${users.first_name || ''} ${users.middle_name || ''} ${users.last_name || ''}`.trim();
  };

  const handleManageProfileClick = () => {
    router.push('/VeiwProfile/Manage'); // Redirect to ManageProfile.js
  };

  return (
    <Container maxWidth="md">
      <StyledContainer>
        <Box display="flex" justifyContent="flex-start" width="100%">
          <Typography variant="h5" gutterBottom>
            My Profile
          </Typography>
        </Box>
        <ProfileWrapper>
          <ProfileImageWrapper>
            <ProfileImage src={profileImage} alt="Profile Image" />
            <label htmlFor="upload-image">
              <UploadInput accept="image/*" id="upload-image" type="file" onChange={handleImageChange} />
              <IconButton
                color="default"
                aria-label="upload picture"
                component="span"
                style={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                }}
              >
                <PhotoCamera style={{ color: 'gray' }} />
              </IconButton>
            </label>
          </ProfileImageWrapper>
          <Box>
            <Typography variant="h6" style={{ color: '#B0B0B0' }}>
              {users.id}
            </Typography>
          </Box>
        </ProfileWrapper>
        <Grid container spacing={1} mt={2}>
          <Grid item xs={12}>
            <InfoRow>
              <LabelTypography>Full Name:</LabelTypography>
              <ValueTypography>{getFullName()}</ValueTypography>
            </InfoRow>
          </Grid>
          <Grid item xs={12}>
            <InfoRow>
              <LabelTypography>Email:</LabelTypography>
              <ValueTypography>{users.email}</ValueTypography>
            </InfoRow>
          </Grid>
          <Grid item xs={12}>
            <InfoRow>
              <LabelTypography>Dob:</LabelTypography>
              <ValueTypography>{users.dob}</ValueTypography>
            </InfoRow>
          </Grid>
          <Grid item xs={12}>
            <InfoRow>
              <LabelTypography>Ph Number:</LabelTypography>
              <ValueTypography>{users.phone_number}</ValueTypography>
            </InfoRow>
          </Grid>
          <Grid item xs={12}>
            <InfoRow>
              <LabelTypography>Country:</LabelTypography>
              <ValueTypography>{users.country}</ValueTypography>
            </InfoRow>
          </Grid>
          <Grid item xs={12}>
            <InfoRow>
              <LabelTypography>City:</LabelTypography>
              <ValueTypography>{users.city}</ValueTypography>
            </InfoRow>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" mt={2}>
          <StyledButton variant="contained" onClick={handleManageProfileClick}>Manage Profile</StyledButton>
        </Box>
      </StyledContainer>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Profile Updated</DialogTitle>
        <DialogContent>
          <Typography>Your profile image has been updated successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserProfile;
