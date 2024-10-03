import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 items-center justify-center w-full h-screen">
      
      <Button variant="contained" href="/admin">Welcome</Button>
      <p className="w-1/2 justify-center text-center"><strong>Hi</strong>, <br /> This project is a work in progress, with new updates and commits added daily. Stay tuned for the latest developments!</p>

    </div>
  );
}
