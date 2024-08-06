"use client";

import React from 'react';
import {  IconButton,  Typography} from '@mui/material';
import styles from './DappConnections.module.css';
import { FaArrowLeft} from 'react-icons/fa';

const DappConnections = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* <button className={styles.backButton}>←</button>
                <h1>Dapp connections</h1> */}
                <IconButton color="inherit" href="/Manageprofile/profilesidebar">
                    <FaArrowLeft className={styles.footerIcon} />
                </IconButton>
                <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                     Dapp Connections
                </Typography>
        <br></br>
            </div>
            <input className={styles.search} type="text" placeholder="Search" />
            <div className={styles.connectionList}>
                {/* <div className={styles.connectionItem}>
                    <img src="/wallet-icon.png" alt="wallet icon" className={styles.icon} />
                    <span>Panorama</span>
                    <span>wallet.coinbase.com</span>
                    <button className={styles.menuButton}>⋮</button>
                </div>
                <div className={styles.connectionItem}>
                    <img src="/wallet-icon.png" alt="wallet icon" className={styles.icon} />
                    <span>Panorama</span>
                    <span>wallet.coinbase.com</span>
                    <button className={styles.menuButton}>⋮</button>
                </div> */}
            </div>
            <button className={styles.disconnectButton}>Disconnect all</button>
        </div>
    );
};

export default DappConnections;
