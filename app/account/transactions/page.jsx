import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { getSubscriptions } from "../../lib/data";
import clsx from "clsx";
import moment from "moment";

const page = async () => {
  const subscriptions = await getSubscriptions();
  return (
    <div>
      <h1 className="text-2xl font-bold">Transaction History</h1>
      <div className="border border-gray-900 mt-6">
        <Table>
          <TableHeader className="bg-gray-900 text-md">
            <TableRow>
              <TableHead className="text-center text-gray-300">
                Payment Id
              </TableHead>
              <TableHead className="text-center text-gray-300">
                Description
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Date of Payment
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Amount
              </TableHead>
              <TableHead className="text-gray-300 text-center">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          {subscriptions.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell colspan="5" className="py-6 text-center">No transactions created at the moment</TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {subscriptions.map((subscription) => (
                <TableRow key={subscription?.payment_id}>
                  <TableCell className="text-center font-medium">
                    {subscription?.payment_id}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {subscription?.title}
                  </TableCell>
                  <TableCell className="text-center">
                  {moment(subscription?.created_at).format(
                      "MMMM Do YYYY, h:mm a"
                    )}
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
                    {subscription?.status === "pending" ? "pending": subscription?.status === "failed" ? "failed" : "success"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </div>
  );
};

export default page;
