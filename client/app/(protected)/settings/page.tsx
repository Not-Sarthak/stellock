"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const SettingsPage = () => {
  const user = useCurrentUser();
  const { toast } = useToast();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl flex flex-col w-[700px] gap-y-4 items-center justify-center">
      <pre className="bg-gray-100 p-4 rounded-lg w-full overflow-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
      <form className="">
        <Button onClick={onClick} type="submit">
          Sign out
        </Button>
      </form>

    </div>
  );
};

export default SettingsPage;
