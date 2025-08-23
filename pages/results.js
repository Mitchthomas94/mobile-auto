
export default function Page(){ return null }
export async function getServerSideProps(){
  return { redirect: { destination: '/about', permanent: false } }
}
