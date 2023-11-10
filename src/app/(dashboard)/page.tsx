import GetProfile from "@/components/GetProfile";
import Dashboard from "./profile/components/Dashboard";

export default async function Home() {

    return (
        <>
        <GetProfile />
        <Dashboard />
        </>
    )
}
