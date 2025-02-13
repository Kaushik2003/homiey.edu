import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/134854145?v=4",
    profileUrl: "https://github.com/Debanjannnn",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/135033576?v=4",
    profileUrl: "https://github.com/RAVEYUS",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/70917815?v=4",
    profileUrl: "https://github.com/Kaushik2003",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/108396191?v=4",
    profileUrl: "https://github.com/manovHacksaw/",
  }
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}
