import Link from "next/link";
import { Bot, MessagesSquare, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-white border-r border-gray-200 p-4">
      <ul className="flex lg:flex-col gap-3">
        <li className="flex-1">
          <Button
            render={<Link href="/create-chatbot" />}
            nativeButton={false}
            className="w-full justify-center lg:justify-start bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl h-11"
          >
            <Bot className="size-5" />
            Create Bot
          </Button>
        </li>

        <li className="flex-1">
          <Button
            render={<Link href="/view-chatbots" />}
            nativeButton={false}
            variant="outline"
            className="w-full justify-center lg:justify-start  bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl h-11"
          >
            <MessagesSquare className="size-5" />
            My Chatbots
          </Button>
        </li>

        <li className="flex-1">
          <Button
            render={<Link href="/review-sessions" />}
            nativeButton={false}
            variant="outline"
            className="w-full justify-center lg:justify-start rounded-xl  bg-emerald-600 hover:bg-emerald-500 text-white h-11"
          >
            <ClipboardList className="size-5" />
            Review Sessions
          </Button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;