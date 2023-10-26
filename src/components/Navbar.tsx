import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="bg-background/30 backdrop-blur-md p-4 border-b ">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-semibold">Mind Bridge App</h1>
                <form action="auth/logout" method="POST">
                    <Button variant={"ghost"}>Cerrar sessión</Button>
                </form>
            </div>
        </div>
    );
}