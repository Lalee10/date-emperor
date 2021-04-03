class Props {
  date: Date;
}

function DateDisplay({ date }: Props): JSX.Element {
  const year = new Date(date).getUTCFullYear();
  const millenium = Math.round(year / 1000) + 1;
  const century = Math.round((year % 1000) / 100) + 1;

  return (
    <h2>
      Millenium: {millenium}, Century: {century}
    </h2>
  );
}

export default DateDisplay;
