import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "",
    profileUrl: "https://github.com/Debanjannnn",
  },
  {
    imageUrl: "",
    profileUrl: "https://github.com/RAVEYUS",
  },
  {
    imageUrl: "",
    profileUrl: "https://github.com/Kaushik2003",
  },
  {
    imageUrl: "",
    profileUrl: "https://github.com/manovHacksaw/",
  }
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}
