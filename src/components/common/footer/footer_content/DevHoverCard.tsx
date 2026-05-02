import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/ui/avatar";
import { Button } from "@/components/common/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/common/ui/hover-card";
import { FaLink } from "react-icons/fa6";

const DevHoverCard = ({ title }: { title: string }) => {
  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger className="cursor-pointer" asChild>
        <Button
          variant="link"
          className="p-0 text-sm font-semibold underline transition-opacity duration-300 ease-in-out hover:opacity-50 sm:text-base"
        >
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="me-6 w-fit rounded-xl bg-white pr-6 shadow-lg md:me-14"
        side="top"
      >
        <div className="flex items-start justify-start gap-3">
          <Avatar className="size-12">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/46515974?v=4"
              alt="Felipe González"
              className="rounded-full"
              draggable={false}
            />
            <AvatarFallback>FG</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">
              Felipe González Alarcón
            </h4>
            <p className="text-sm text-gray-500">
              Ingeniero Informático, UTFSM.
            </p>
            <p className="text-sm text-gray-500">Desarrollador de software.</p>
            <div className="flex items-center gap-2 pt-2">
              <FaLink className="h-4 w-4 opacity-70" />{" "}
              <a
                className="text-xs text-gray-500 underline transition-opacity duration-300 ease-in-out hover:opacity-50"
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
