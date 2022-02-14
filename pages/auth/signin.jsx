import { getProviders, signIn as SignIntoProvider } from "next-auth/react";


// Browser

export function signIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <div className="signin__container">
            <img src="/assets/RateMySubject.svg" className="signin__logo" alt=""/>
            <button className="btn signin__btn" onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

// Server-Side Render

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default signIn
