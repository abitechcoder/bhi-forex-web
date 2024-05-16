import AccountIcon from "../../components/ui/AccountIcon";
import PricingIcon from "../../components/ui/PricingIcon";
import BillingIcon from "../../components/ui/BillingIcon";
import SubscriptionIcon from "../../components/ui/SubscriptionIcon";

const account_cards = [
  {
    id: 1,
    title: "Personal Info",
    description:
      "Edit your username and update your password on our user system.",
    link_text: "Manage Your Account",
    icon: <AccountIcon />,
    link_url: "/account/profile",
  },
  {
    id: 2,
    title: "Pricing",
    description: "View our Mentorship Plans and pricing for each service.",
    link_text: "Plans",
    icon: <PricingIcon />,
    link_url: "/account/plans",
  },
  {
    id: 3,
    title: "Billing History",
    description: "Check out all your payment history",
    link_text: "Payment History",
    icon: <BillingIcon />,
    link_url: "/account/transactions",
  },
  {
    id: 4,
    title: "Subscription",
    description: "Create and manage your subscriptions.",
    link_text: "Manage Subscription",
    icon: <SubscriptionIcon />,
    link_url: "/account/subscriptions",
  },
];

const plans = [
  {
    title: "Monthly Plan",
    amount: "$49",
    text: "FULL access to our free resource and course as you begin your Forex Journey",
    perks: [
      "Full Access to Training videos",
      "Access to Beginner & advanced live classes",
      "Free trade signals (Bonus)",
      "Help & Support",
      "Private Community",
    ],
    link: "/account/plans",
    payment_url: "https://selar.co/t81177",
    days: 7,
  },
  {
    title: "3 Months Plan",
    amount: "$99",
    text: "FULL access to our free resource and course as you begin your Forex Journey",
    perks: [
      "Everything in Monthly plan, plus:",
      "Weekly Live trading sessions",
      "Mentor's Personal Contact",
      "Free trading plan template",
      "Priority Support",
    ],
    link: "/account/plans",
    payment_url: "https://selar.co/t81177",
    days: 90,
  },
  {
    title: "6 Months Plan",
    amount: "$225",
    text: "FULL access to our free resource and course as you begin your Forex Journey",
    perks: [
      "Everything in 3 Months plan plus:",
      "Daily Live trading session",
      "60 Minutes group call with a Mentor to create a personalized trading plan",
      "Certificate of Attendance",
      "Top Priority Support",
    ],
    link: "/account/plans",
    payment_url: "https://selar.co/t81177",
    days: 180,
  },
  {
    title: "12 Months Plan",
    amount: "$399",
    text: "FULL access to our free resource and course as you begin your Forex Journey",
    perks: [
      "Everything is 6 Months plan plus:",
      "Access to Beginner & advanced live classes",
      "Free trade signals (Bonus)",
      "Help & Support",
      "Private Community",
    ],
    link: "/account/plans",
    payment_url: "https://selar.co/t81177",
    days: 360,
  },
];

module.exports = {
  account_cards,
  plans,
};
