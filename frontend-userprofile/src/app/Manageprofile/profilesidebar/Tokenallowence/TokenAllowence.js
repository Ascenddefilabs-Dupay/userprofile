"use client";

import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Typography } from '@mui/material';

const TokenAllowances = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
      < Link href="/Manageprofile/profilesidebar">
          <FaArrowLeft className={styles.backArrow} />
        </Link>
        <br></br>
        <Typography variant="h5"> Token allowances</Typography>
      </div>
      <div style={styles.content}>
        <p>You dont have any token allowances</p>
        <p style={styles.subText}>
          If you allow a dapp to transfer an asset out of this wallet, then the dapp, asset, and amount allowed will be listed here.
        </p>
      </div>
      <div style={styles.footer}>
        {/* <div style={styles.footerItem}>Assets</div>
        <div style={styles.footerItem}>Transactions</div>
        <div style={styles.footerItem}>Settings</div> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '320px',
    height: '550px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  backArrow: {
    marginRight: '10px',
  },
  content: {
    textAlign: 'center',
    marginTop: '100px',
  },
  subText: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#aaa',
  },
};

export default TokenAllowances;
