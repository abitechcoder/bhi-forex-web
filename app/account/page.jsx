"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PiCaretRight } from "react-icons/pi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
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

function page() {
  const supabase = createClientComponentClient();
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUserData(user?.user_metadata);
  };

  // useEffect(() => {
  //   const getUser = async() => {
  //     const {data: {user}} = await supabase.auth.getUser();

  //   }
  // }, [])

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold">
        Welcome, {`${userData.firstname} ${userData.lastname}`}
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {account_cards?.map((card) => (
          <Card className="bg-black border-gray-900">
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

      <div className="border border-gray-900 mt-6">
        <div className="flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold">Payment History</h1>
          <Link href="/account/transactions"><p className="text-sm text-green-500 hover:cursor-pointer">See All</p></Link>
        </div>
        <Table>
          <TableHeader className="bg-gray-900 text-md">
            <TableRow>
              <TableHead className="text-center text-gray-300">
                Payment Id
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Issue Date
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Amount
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center font-medium">
                PAYMENT_1071613
              </TableCell>
              <TableCell className="text-center">
                26-Mar-2024 22:13:36
              </TableCell>
              <TableCell className="text-center">$250.00</TableCell>
              <TableCell className="text-center">Success</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-medium">
                PAYMENT_1071615
              </TableCell>
              <TableCell className="text-center">
                26-Mar-2024 22:13:36
              </TableCell>
              <TableCell className="text-center">$250.00</TableCell>
              <TableCell className="text-center">Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default page;
