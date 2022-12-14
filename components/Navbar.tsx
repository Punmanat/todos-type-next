import { useRouter } from 'next/router'

export default function Navbar(){

    const router = useRouter()

    const handleAbout = ()=>{
        router.push('/about')
    }

    const handleHome = ()=>{
        router.push('/')
    }

    return (
        <div className="nav">
            <div className="flex justify-between">
                <div className="banner">
                    <h1 className="banner-font" onClick={handleHome}>TODO NEXTJS APP</h1>
                </div>
                <div className="right">
                    <button className="right-font" onClick={handleAbout}>About</button>
                </div>
            </div>
        </div>
    )
};