import { getUserData } from "@/lib/data";
import Link from "next/link";

export default async function AdminPage() {
  const users = await getUserData();
  console.log(users)

  return (
    <div className=" w-full max-w-7xl h-screen  mx-auto py-10 px-4 space-y-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-primary font-bold">Home</Link>
        <form action="/api/logout" method="post">
          <button className="text-red-600 font-semibold">Logout</button>
        </form>
      </div>

      <h2 className="text-xl font-bold mb-4">Submitted Contacts</h2>

      <div className="overflow-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
            <th className="p-2 border">id</th>
              <th className="p-2 border">First Name</th>
              <th className="p-2 border">Last Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">created at</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: any, i: number) => (
              <tr key={i} className="border-t">
                <th className="p-2 border">{u.id}</th>
                <td className="p-2 border">{u.first_name}</td>
                <td className="p-2 border">{u.last_name}</td>
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.subject}</td>
                <td className="p-2 border">{u.message}</td>
                <td className="p-2 border">{u.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
