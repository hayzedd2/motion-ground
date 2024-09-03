"use client";

import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import React, { useState } from "react";

const CreateKey = () => {
  const [key, setKey] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [keyIsCreated, setKeyIsCreated] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };
  const createKey = () => {
    setKeyIsCreated(true);
    setKey("");
  };
  return (
    <Card className="w-full overflow-hidden h-auto bg-[#1F1F1F] shadow-none bx-shadow border-none rounded-2xl text-inherit">
      <CardContent className="p-4">
        <h2 className="text-white text-[1.1rem] mb-1 ">Create New Api Key</h2>
        <p className="text-sm">
          Your secret API Key will be shared with all team members belonging to 
          <span className="text-[#00dda6] rounded-[5px] p-1 ml-1 bg-[#00dda6]/5">zedd</span> organization
        </p>
        <div className="mt-2 flex flex-col items-end w-full">
          <Input
            value={key}
            onChange={handleChange}
            className="bg-[#171717] outline-none border-none  bx-shadow placeholder:text-gray-600"
            placeholder="Your api key name"
          />
          <Button
            className="mt-3 w-[8rem] h-[35px] bg-[#00b789e4]  hover:bg-[#00b789e4] font-[600]"
            disabled={key.length === 0}
            onClick={createKey}
          >
            Create Api key
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateKey;
