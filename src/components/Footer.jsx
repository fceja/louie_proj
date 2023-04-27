import "../css/components/Footer.css";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });
  console.log(year);

  return <footer>&copy; {year}, Company</footer>;
}
