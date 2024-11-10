import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(session?.user) {
    return (
      <div>
        <h2>Welcome {session?.user.username} user !</h2>
      </div>
    )

  }

  return   (
    <div>
    <h2>Welcome {session?.user.username} user !</h2>
  </div>
  )
}

export default page;