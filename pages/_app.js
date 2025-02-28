import "@/styles/globals.css";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function App({Component, pageProps}) {
    const router = useRouter();
    const publicPaths = ["/login", "/register"];
    const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

    useEffect(() => {
        if (!isLoggedIn && !publicPaths.includes(router.pathname)) {
            router.push("/login");
        }
    }, [isLoggedIn, router]);
    return <Component {...pageProps} />;
}
