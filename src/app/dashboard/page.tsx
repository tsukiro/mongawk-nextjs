/*import AccountForm from "./account-form";*/
import {createClient} from "@/lib/supabase/server";
import Profile from "./profile";
import Navbar from "@/app/(site)/Navbar";
import {redirect} from "next/navigation";

export default async function Dashboard() {
    const supabase = await createClient();

    /* const {
      data: { user },
    } = await supabase.auth.getUser();
   */
    const {
        data: {user},
    } = await supabase.auth.getUser();

    if (!user) {
        // If the user is not authenticated, redirect to the login page
        redirect("/"); // or you can redirect to a login page
    }

    return <><Navbar user={user}/><Profile/></>;
}
