"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext({
    user: null as User | null,
    account: null  as Account | null,
    onChangeContext: (user: User | null, account: Account | null) => {
        console.warn({ user, account });
    },
});

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [account, setAccount] = useState<Account | null>(null);
    const onChangeContext = (user: User | null, account: Account | null) => {
        setUser(user);
        setAccount(account);
    };
    return (
        <UserContext.Provider value={{ user, account, onChangeContext: onChangeContext }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const userContext = useContext(UserContext);
    return userContext;
}

export interface User{
    id: string;
    email: string;
    name: string;
    role: string;
}

export interface Account{
    id: string;
    name: string;
    accessToken: string;
    users: User[];
}