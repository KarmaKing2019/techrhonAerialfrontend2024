import { AuthProvider, useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { useCallback } from 'react'

const AppRoot = () => {
    return (
        <AuthProvider projectId="P2RmTNbqVA3fOz89dkT0D3fadaPr">
	<Descope
		flowId="sign-up-or-in"
		theme="light"
		onSuccess={(e) => {
			console.log(e.detail.user.name)
			console.log(e.detail.user.email)
		}}
		onError={(err) => {
			console.log("Error!", err)
		}}
	/>
</AuthProvider>
    )
}

const App = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        { !isAuthenticated &&
            (
              <Descope
                flowId="sign-up-or-in"
                onSuccess = {(e) => console.log(e.detail.user)}
                onError={(e) => console.log('Could not log in!')}
              />
            )
        }
  
        {
          (isSessionLoading || isUserLoading) && <p>Loading...</p>
        }

        { isAuthenticated &&
            (
              <>
                <p>Hello ${user.name}</p>
                <div>My Private Component</div>
                <button onClick={handleLogout}>Logout</button>
              </>
            )
        }
    )
}