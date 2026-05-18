import HandelsbetingelserPage from "../../components/HandelsbetingelserPage";

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "da" },
  ];
}

export default function Page() {
  return <HandelsbetingelserPage />;
}