import PrivatlivspolitikPage from "../../components/PrivatlivspolitikPage";


export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "da" },
  ];
}

export default function Page() {
  return <PrivatlivspolitikPage />;
}