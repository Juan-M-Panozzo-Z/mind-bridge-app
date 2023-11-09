import { Text } from "@radix-ui/themes";
import { supabase } from "@/lib/actions/session";
import { getProfile } from "@/lib/actions/profile";

export default async function Home() {
    const {data} = await supabase.auth.getUser();
    const userId = data.user?.id
    const profile = await getProfile( userId as string );
    console.log(profile);
    const title = "Dashboard";

    return <Text size={"2"}>{title}</Text>;
}
