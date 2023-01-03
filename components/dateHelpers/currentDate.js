import { parseISO, format } from "date-fns";

export default function CurrentDate() {
  const currentDate = new Date().toISOString();
  const currentDateString = currentDate.substring(0, 10);
  const dateParsed = parseISO(currentDate);
  return (
    <time dateTime={currentDateString}>
      {format(dateParsed, "LLLL d, yyyy")}
    </time>
  );
}
