import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



export async function POST(request: Request) {
    // Get the current user from your database
    const clerkUser = await currentUser();
    // const user = __getUserFromDB__(request);


    if (!clerkUser) redirect('/sign-in');
    // Start an auth session inside your endpoint

    const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;
    const user = {
        id: id,
        info: {
            id,
            name: `${firstName} ${lastName}`,
            email: emailAddresses[0].address,
            avatar: imageUrl,
            color: getUserColor(id),
        }
    }


    const { status, body } = await liveblocks.identifyUser(
        {
            userId: user.info.email,
            groupIds: [],
        },

        { userInfo: user.info } // Optional
    );

    return new Response(body, { status });
}