"use client";


import React from 'react';
import {  IconButton,  Typography} from '@mui/material';
import { FaArrowLeft} from 'react-icons/fa';

import styles from './ExportPublicAddresses.module.css';

const ExportPublicAddresses = () => {
  return (
    <div className={styles.container}>
        <IconButton color="inherit" href="/Manageprofile/profilesidebar">
          <FaArrowLeft className={styles.footerIcon} />
        </IconButton>
        <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
          Export Public Addresses
        </Typography>
      {/* <h1 className={styles.title}>Export public addresses</h1> */}
      <p className={styles.description}>
        You can export your wallets addresses and public keys to let crypto-friendly tax software safely track your transactions. Exporting does NOT give access to your funds. <a href="#" className={styles.learnMore}>Learn more</a>
      </p>
      <div className={styles.promotions}>
        <div className={styles.promotion}>
          <div className={styles.icon}>🔧</div>
          <div className={styles.text}>
            <h2>Use Crypto Tax Calculator</h2>
            <p>for up to 30% off on paid plans</p>
          </div>
        </div>
        <div className={styles.promotion}>
          <div className={styles.icon}>📊</div>
          <div className={styles.text}>
            <h2>Use CoinTracker</h2>
            <p>for accurate DeFi taxes, tax loss harvesting & get premium features (up to $75 value)</p>
          </div>
        </div>
      </div>
      <div className={styles.addressSection}>
        <h2 className={styles.addressTitle}>ADDRESSES & XPUBS</h2>
        <button className={styles.copyButton}>Copy</button>
      </div>
      <div className={styles.footer}>
        
      </div>
    </div>
  );
};

export default ExportPublicAddresses;
