import ProfileForm from "./components/ProfileForm";
import { getUser } from "../../lib/data";

const page = async () => {
  const user = await getUser();
  return (
    <div>
      <div className="grid gap-4">
        <h1>Account Setting</h1>
        <h2 className="text-4xl">My Profile</h2>
        <p>You have full control to manage your own account setting.</p>
      </div>
      <h2 className="font-bold text-xl mt-6 mb-3">Personal Information</h2>
      <div className="border-gray-900 border-2 p-8">
        <ProfileForm user={user} />
      </div>
    </div>
  );
};

export default page;
