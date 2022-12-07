import { onAuthStateChanged, signOut  } from 'firebase/auth'
import {useEffect, useState} from 'react'
import { auth } from "../Firebase/firebase"

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });

            return () => {
                listen();
            }
    }, []);

        const userSignOut = () => {
            signOut(auth).then(() =>{
                console.log('Signed Out Successfully')
            }).catch(error => console.log(error))
        }
  return (
    <div>{ authUser ? <><p className='mt-3 mb-3 text-center'>{`  Signed In as ${authUser.email}`}</p><div className='grid grid-cols-0 grid-rows-1'><button className = "bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={userSignOut}>Sign Out</button></div></> : <p>Signed Out</p>}</div>
  )
}

export default AuthDetails