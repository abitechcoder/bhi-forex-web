import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { getAllSubscriptions } from "../../lib/data";
import clsx from "clsx";
import { Button } from "../../../components/ui/button";
import moment from "moment";
import ApproveButton from "../../ui/payment/ApproveButton";
import DeclineButton from "../../ui/payment/DeclineButton";
import DropMenu from "../../ui/dashboard/NavDropdownMenu";

const page = async () => {
  const subscriptions = await getAllSubscriptions();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl md:text-4xl font-bold">Welcome Admin</h1>
      <DropMenu removeAccount={true}/>
      </div>
      <div className="border border-gray-900 mt-6">
        <Table>
          <TableHeader className="bg-gray-900 text-md">
            <TableRow>
              <TableHead className="text-center text-gray-300">S No.</TableHead>
              <TableHead className="text-center text-gray-300">
                Payment Id
              </TableHead>
              <TableHead className="text-center text-gray-300">
                Customer Name
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
              <TableHead className="text-gray-300 text-center">
                Approval
              </TableHead>
            </TableRow>
          </TableHeader>
          {subscriptions.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell colspan="8" className="py-6 text-center">
                  No transactions created at the moment
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {subscriptions.map((subscription, index) => (
                <TableRow key={subscription?.payment_id}>
                  <TableCell className="text-center font-medium">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {subscription?.payment_id}
                  </TableCell>
                  <TableCell className="text-center font-bold">
                    {`${subscription?.profiles.firstname} ${subscription?.profiles.lastname}`}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {subscription?.title}
                  </TableCell>
                  <TableCell className="text-center font-bold">
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
                    {subscription?.status === "pending"
                      ? "pending"
                      : subscription?.status === "failed"
                      ? "failed"
                      : "success"}
                  </TableCell>
                  <TableCell className="flex justify-center">
                    {subscription?.status === "pending" ? (<div className="flex gap-4">
                      <ApproveButton
                        payment_id={subscription?.payment_id}
                        value="success"
                      />
                      <DeclineButton
                        payment_id={subscription?.payment_id}
                        value="failed"
                      />
                    </div>) : subscription?.status === "success" ? "Approved" : "Declined"}
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
