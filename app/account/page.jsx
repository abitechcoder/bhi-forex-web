import { PiCaretRight } from "react-icons/pi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { account_cards } from "../lib/placeholder-data";
import Link from "next/link";
import PaymentHistory from "../ui/dashboard/PaymentHistory";
import WelcomeUser from "../ui/dashboard/WelcomeUser"

function page() {
  return (
    <div>
      <WelcomeUser/>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {account_cards?.map((card) => (
          <Card className="bg-black border-gray-900" key={card?.id}>
            <CardHeader>
              <div className="grid grid-cols-[80px_1fr] gap-4">
                <div className="w-[80px] h-[80px]">{card?.icon}</div>
                <div>
                  <CardTitle className="text-white pb-2">
                    {card?.title}
                  </CardTitle>
                  <CardDescription>{card?.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <Link href={card?.link_url}>
              <CardFooter className="bg-gray-900 hover:bg-gray-600 hover:cursor-pointer text-white pt-5 flex justify-between">
                <p className="font-bold">{card?.link_text}</p>
                <PiCaretRight className="text-white w-5 h-5" />
              </CardFooter>
            </Link>
          </Card>
        ))}
      </section>

      {/* Payment History Component */}
      <PaymentHistory />
    </div>
  );
}

export default page;
