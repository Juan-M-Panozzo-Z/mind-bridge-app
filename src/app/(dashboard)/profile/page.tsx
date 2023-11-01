import { Button } from "@/components/ui/button";
import UpdateProfile from "./components/UpdateProfile";
import { LogOut } from "lucide-react";

export default function ProfilePage() {
    return (
        <section className="col-span-3">
            <UpdateProfile />
        </section>
    )
}