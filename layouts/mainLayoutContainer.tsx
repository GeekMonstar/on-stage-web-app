"use client";
import {MainLayoutHeader} from "@/components/headers";
import Navigation from "@/components/navigation";
import styles from "./mainLayoutContainer.module.scss";

export default function MainLayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles["main-layout"]}>
            <MainLayoutHeader />
            <div className={styles["main-layout__caontainer"]}>
                <Navigation />
                {children}
            </div>
        </div>
    );
}