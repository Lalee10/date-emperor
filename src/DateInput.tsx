import { useState } from "react";
import DateDisplay from "./DateDisplay";

export default function DateInput(): JSX.Element {
  const [date, setDate] = useState("");
  const jsDate = new Date(date);

  return (
    <>
      <label htmlFor="date">
        Select a Date&nbsp;&nbsp;
        <input
          id="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <br />
      <br />
      {isNaN(jsDate.valueOf()) ? null : <DateDisplay date={jsDate} />}
    </>
  );
}
