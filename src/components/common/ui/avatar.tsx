import { Fallback, Image, Root } from "@radix-ui/react-avatar";
import { cn } from "@utils/shadcn";
import type { ComponentProps } from "react";

function Avatar({ className, ...props }: ComponentProps<typeof Root>) {
  return (
    <Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof Image>) {
  return (
    <Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      draggable={false}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof Fallback>) {
  return (
    <Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
