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

export function TeamMembers() {
  const teamMember = [
    {
      name: "Jessica Martin",
      email: "j@example.com",
      abb: "JM",
      role: "owner",
    },
    {
      name: "Joe Biden",
      email: "j@example.com",
      abb: "JB",
      role: "viewer",
    },
    {
      name: "Percy Morgan",
      email: "p@example.com",
      abb: "PM",
      role: "developer",
    },
  ];
  return (
    <Card className="max-h-[22rem] min-h-[22rem] bg-inherit border-none text-inherit flex flex-col justify-center">
      <CardHeader className="pb-3">
        <CardTitle className="text-[1.2rem] text-white">Team members</CardTitle>
        <CardDescription className="font-[400]">
          Manage team members.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-3" />
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Assign roles</h4>
          <div className="grid gap-6">
            {teamMember.map((team) => {
              return (
                <div
                  className="flex items-center justify-between space-x-4"
                  key={team.name}
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage alt="Image" />
                      <AvatarFallback className="bg-[#27272A] text-white">
                        {team.abb}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {team.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {team.email}
                      </p>
                    </div>
                  </div>
                  <Select defaultValue={team.role}>
                    <SelectTrigger
                      className="ml-auto w-[110px] bg-[#222222] border-none text-white"
                      aria-label="Edit"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">Owner</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
