import Todos from "@/app/todos/page";
import AuthButtons from "@/components/auth-button";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return (
      <div>
        <h1>You are not signed in</h1>
        <AuthButtons />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session?.user.name}</h1>
      <AuthButtons isSignedIn={true} />
      {/* Todoリストとフォームのコンポーネントをここに追加 */}
      <Todos />
    </div>
  );
}
