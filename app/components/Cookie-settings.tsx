"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
export function CardsCookieSettings() {
  return (
    <Card className="w-full max-h-[22rem] min-h-[22rem] bg-inherit text-inherit flex border-none  justify-center flex-col">
      <CardHeader>
        <CardTitle className="text-[1.4rem] text-white">Integrations</CardTitle>
        <CardDescription className="text-[0.9rem] my-0">
          Manage this application third-party integrations.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-5">
          <Label htmlFor="" className="flex flex-col space-y-1">
            <span className="text-[1.2rem] my-1 text-white">Firebase</span>
            <span className="xl:text-[0.85rem] sm:text-[0.75rem] font-normal leading-snug">
              Firebase is Google&apos;s mobile platform that helps you quickly
              develop high-quality apps.
            </span>
            <span className="underline underline-offset-2 text-purple-600 space-x-4 font-[400] text-[0.75rem] cursor-pointer">
              Documentation
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div className="flex items-center justify-between space-x-5">
          <Label htmlFor="" className="flex flex-col space-y-1">
            <span className="text-[1.2rem] my-1 text-white">Google analytics</span>
            <span className="xl:text-[0.85rem] sm:text-[0.75rem] font-normal leading-snug">
              Google analytics gives you the tools you need to analyze data for your business in one place.
            </span>
            <span className="underline underline-offset-2 text-purple-600 space-x-4 font-[400] text-[0.75rem] cursor-pointer">
              Documentation
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
      </CardContent>
    </Card>
  );
}
