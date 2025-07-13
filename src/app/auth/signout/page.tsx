
import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";

export default async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();

    redirect('/')
    return <></>
}