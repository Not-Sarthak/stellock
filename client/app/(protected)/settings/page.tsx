"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const user = useCurrentUser();
  const { toast } = useToast();
  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl flex flex-col gap-y-4 items-center justify-center">
      {JSON.stringify(user)}
      <form className="">
        <Button onClick={onClick} type="submit">
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
