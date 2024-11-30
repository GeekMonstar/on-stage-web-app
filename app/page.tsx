"use client";
import { useUserContext } from "@/contexts/userContext";
// import styles from "./page.module.scss";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HomePage from "@/layouts/homePage";
import LandingPage from "@/layouts/landingPage";
import axios from "axios";

export default function Home() {
  const { user, account, onChangeContext } = useUserContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") as string);
    const storedAccount = JSON.parse(localStorage.getItem("account") as string);
    if(storedUser && storedAccount){
      onChangeContext(storedUser, storedAccount);
    }
    console.log({ user, account });
    if(searchParams.get("auth_code")){
      axios({
        method: "POST",
        url: `http://localhost:4000/auth/callback/email/${searchParams.get("auth_code")}`,
        withCredentials: true
      }).then((response) => {
        console.log(response.data);
        onChangeContext(response.data.user, response.data.account);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("account", JSON.stringify(response.data.account));
        router.push("/");
      })
    }
  }, []);
  return (
    <>
      {(user && account) ? <HomePage /> : <LandingPage />}
    </>
  );
}
