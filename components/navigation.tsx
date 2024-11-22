"use client";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logos/onStage-text-logo.png';
import styles from './navigation.module.scss';
import { useUserContext } from '@/contexts/userContext';

export default function Navigation(){
    const {user, account} = useUserContext();
    useEffect(() => {
        console.log({ user, account });
    }, [user, account]);

    return(
        <nav>
            <div className={`${styles["nav__container"]} ${!user ? "disabled": ""}`}>
                <Image src={logo} height={32} alt="OnStage Logo" />
                <ul className={styles["nav__container--nav"]}>
                    <li className={styles["nav__container--nav--item"]}>
                        <Link href="/" className={`${styles["nav__container--nav--item--link"]}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                            <p className={styles["nav__container--nav--item--link--label"]}>Home</p>
                        </Link>
                    </li>
                    <li className={styles["nav__container--nav--item"]}>
                        <Link href="/map"className={`${styles["nav__container--nav--item--link"]}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg>
                            <p className={styles["nav__container--nav--item--link--label"]}>Map</p>
                        </Link>
                    </li>
                    <li className={styles["nav__container--nav--new-post-item"]}>
                        <Link href="/new-post" className={styles["nav__container--nav--new-post-item--link"]}>
                            <div className={styles["nav__container--nav--new-post-item--link--btn"]}> 
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                            </div>
                        </Link>
                    </li>
                    <li className={styles["nav__container--nav--item"]}>
                        <Link href="/notifications" className={`${styles["nav__container--nav--item--link"]}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                            <p className={styles["nav__container--nav--item--link--label"]}>Notifications</p>
                        </Link>
                    </li>
                    <li className={styles["nav__container--nav--item"]}>
                        <Link href="/profile" className={`${styles["nav__container--nav--item--link"]}`}>
                            {user?.image ? <Image src={user.image} height={24} alt="User Image" /> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>}
                            <p className={styles["nav__container--nav--item--link--label"]}>{user?.name ? user.name : "Profile"}</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}