import { auth, signIn, signOut } from '@/auth'


export default async function Home() {

  const session = await auth()

  return (
    <>
          <nav>
        { !session && 
          <form
            action={async () => {
              "use server"
              await signIn()
            }}
          >
            <button type="submit">Signin</button>
          </form>
        }
        { session &&
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <button type="submit">Signout</button>
          </form>

        }
      </nav>
      <main>
        { JSON.stringify(session, null, 2) }
      </main>
    </>
 
  );
}
