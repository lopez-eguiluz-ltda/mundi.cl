import { Button } from "@shadcn/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { FaLink } from "react-icons/fa6";

const DevHoverCard = ({ title }: { title: string }) => {
  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="underline font-semibold hover:opacity-50 transition-opacity duration-300 ease-in-out p-0"
        >
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="bg-white me-6 md:me-14 md:mb-5 rounded-xl shadow-lg"
        side="top"
      >
        <div className="flex justify-start items-start">
          <Avatar className="p-5">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/46515974?v=4"
              alt="Felipe González"
              className="rounded-full w-14"
              draggable={false}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="py-4 pe-10">
            <h4 className="text-sm font-semibold">Felipe González Alarcón</h4>
            <p className="text-sm">Ingeniero Informático, UTFSM.</p>
            <p className="text-sm">Desarrollador de software.</p>
            <div className="flex items-center pt-2 gap-2">
              <FaLink className="h-4 w-4 opacity-70" />{" "}
              <a
                className="text-xs  underline hover:opacity-50 transition-opacity duration-300 ease-in-out"
                href={`https://www.${title}`}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
              >
                www.{title}
              </a>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default DevHoverCard;
