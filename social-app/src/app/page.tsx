'use client';
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state);
  const loggedInUser = data.auth.currentUserId;
  const name = data.users.find(user => user.id == loggedInUser).name;
  return (
    <main className="">
      <p>Name: {name}</p>
    </main>
  );
}
