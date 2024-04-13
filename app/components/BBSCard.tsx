import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore
        minima, ullam velit odio et cumque quibusdam consectetur praesentium
        veritatis explicabo delectus nostrum. Aperiam voluptatibus nulla,
        laudantium omnis facere deleniti!
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={"/bbs-posts/1"} className='text-blue-500'>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
