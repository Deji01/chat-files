import React from "react";
import { Button } from "./ui/button";

export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="POST">
      <Button className="py-2 px-4 rounded-md no-underline">Logout</Button>
    </form>
  );
}
