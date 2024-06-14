
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        Screen for authenticated users
      </div>

      <div>
        <UserButton/>
      </div>
      
    </div>
  )
}
