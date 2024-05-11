import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, title, content, createAt, username } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className='flex justify-between'>
        <Link
          href={`/bbs-posts/${id}`}
          className='text-blue-400 hover:text-blue-600 duration-200'
        >
          More Read
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
