"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";

export function CardsShare() {
  const [isCopied, setIsCopied] = useState(false)
  const onCopy = async (text: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        toast("Text copied :)")
        setTimeout(() => setIsCopied(false), 2500);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    } else {
      console.warn('Clipboard API not available');
    }
  };
  return (
    <Card className="max-h-[22rem] min-h-[22rem] bg-inherit border-none text-inherit flex flex-col justify-center">
      <CardHeader className="pb-3">
        <CardTitle className="text-[1.2rem] text-white">
          Share this portfolio
        </CardTitle>
        <CardDescription className="font-[400]">
          Anyone with the link can view this portfolio.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            value="alhameen.vercel.app"
            className="bg-[#222222] border-none text-white"
            readOnly
          />
          <Button className="shrink-0 bg-[#27272A] hover:bg-inherit" onClick={()=> onCopy("alhameen.vercel.app")}>
            {isCopied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">People with access</h4>
          <div className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="Image" />
                  <AvatarFallback className="bg-[#27272A] text-white">
                    JM
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Jesscia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">j@example.com</p>
                </div>
              </div>
              <Select defaultValue="edit">
                <SelectTrigger
                  className="ml-auto w-[110px] bg-[#222222] border-none"
                  aria-label="Edit"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/05.png" alt="Image" />
                  <AvatarFallback className="bg-[#27272A] text-white">
                    MS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Morgan Stones
                  </p>
                  <p className="text-sm text-muted-foreground">s@example.com</p>
                </div>
              </div>
              <Select defaultValue="view">
                <SelectTrigger
                  className="ml-auto w-[110px] bg-[#222222] border-none"
                  aria-label="Edit"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edit">Can edit</SelectItem>
                  <SelectItem value="view">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
