import { AiFillWechat } from 'react-icons/ai'
import AuthForm from './AuthForm'

export default function Home() {
  return (
    <div
    className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        "
    >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <AiFillWechat className="mx-auto h-12 w-auto" />
            <h2
                className='
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white-100
                '
            >
                Sign in to your account
            </h2>
        </div>
        <AuthForm />
    </div>
  )
}
