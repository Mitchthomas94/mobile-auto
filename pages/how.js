// Redirect /how -> /how-it-works (covers old links & cached menus)
export async function getServerSideProps() {
  return { redirect: { destination: '/how-it-works', permanent: true } };
}
export default function HowRedirect() { return null; }
