import tw from "tailwind-styled-components"
import Map from "./components/Map";
import  Link from 'next/link'
const {['log']: c} = console
export default function Home() {

  return (
    <Wrapper>
     <Map />
     <ActionItems>
         <Header>
             <UberLogo src="https://logo-marque.com/wp-content/uploads/2020/05/Uber-Logo-650x366.png"/>
             <Profile>
                 <Name>Anis Ayed</Name>
                 <UserImage src="https://yt3.ggpht.com/ytc/AKedOLT2NAI7xdWE9HIcAF94Kx7_CUgPIImF_JC1k56Xxg=s900-c-k-c0x00ffffff-no-rj"/>
             </Profile>
         </Header>
         <ActionButtons>
             <Link href="/search">
             <ActionButton>
                 <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                 Ride
             </ActionButton>
             </Link>
             <ActionButton>
                 <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
                 Action
             </ActionButton>
             <ActionButton>
                 <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
                 Reserve
             </ActionButton>
         </ActionButtons>
         <InputButton>
             Where to?
         </InputButton>
     </ActionItems>
    </Wrapper>
  )
}
const Wrapper = tw.div`
    flex flex-col h-screen
`

const ActionItems = tw.div`
    bg-white flex-1 p-4
`
const Header = tw.div`
    flex justify-between items-center
`
const UberLogo = tw.img`
    h-20
`
const Profile = tw.div`
    flex items-center
`
const Name= tw.div`
    mr-4 w-20 text-l
`
const UserImage = tw.img`
    h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
    flex
`
const ActionButton = tw.div`
   flex flex-col bg-gray-200  flex-1 m-1 h-32 items-center justify-center rounded-lg transform
   hover:scale-105 cursor-pointer transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
    h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`