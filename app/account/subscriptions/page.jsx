import React from "react";
import Link from "next/link";
import { getUserActiveSubscriptions } from "../../lib/data";
import clsx from "clsx";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const page = async () => {
  const subscriptions = await getUserActiveSubscriptions();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="grid gap-4">
          <h1>Manage Subscription</h1>
          <h2 className="text-4xl">My Subsciptions</h2>
          <p>Here is list of plans that you have subscribed.</p>
        </div>
        <Link href={"/account/plans"} className="btn-secondary">
          {subscriptions.length === 0 ? "View Pricing" : "Change Plan"}
        </Link>
      </div>

      {subscriptions.length === 0 ? (
        <div className="py-8">
          <div className="bg-red-700 text-white px-8 py-4">
            NOTE! You haven't subscribed to any service{" "}
            <Link href={"/account/plans"} className="font-bold underline">
              subscribe now
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-8">
        <Table>
          <TableHeader className="bg-gray-900 text-md">
            <TableRow>
              <TableHead className="text-center text-gray-300">
                Plan
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Due Date
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Expires
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
            {subscriptions.map((subscription) => (
              <TableRow key={subscription?.payment_id}>
                <TableCell className="text-center font-medium">
                  {subscription?.title}
                </TableCell>
                <TableCell className="text-center">
                  {moment(subscription?.expires_at).format(
                    "MMMM Do YYYY, h:mm a"
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {moment(subscription?.expires_at).fromNow()}
                </TableCell>
                <TableCell className="text-center">
                  {subscription?.amount}
                </TableCell>
                <TableCell
                  className={clsx("text-center font-bold text-sm", {
                    "text-gray-300": subscription?.status === "pending",
                    "text-green-500": subscription?.status === "success",
                    "text-red-500": subscription?.status === "failed",
                  })}
                >
                  {subscription?.status === "pending"
                    ? "pending"
                    : subscription?.status === "failed"
                    ? "failed"
                    : "Active"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      )}
    </div>
  );
};

export default page;
