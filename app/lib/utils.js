import moment from "moment";

export const generateUid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );

export const getExpiryDate = (subscription, days) => {
  if (subscription === "Monthly Plan") {
    return moment().add(days, "days");
  } else if (subscription === "3 Months Plan") {
    return moment().add(days, "days");
  } else if (subscription === "6 Months Plan") {
    return moment().add(days, "days");
  } else {
    return moment().add(days, "days");
  }
};
