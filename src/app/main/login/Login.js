// import Card from '@mui/material/Card';
// import { styled, darken } from '@mui/material/styles';
// import CardContent from '@mui/material/CardContent';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import Typography from '@mui/material/Typography';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Auth0LoginTab from './tabs/Auth0LoginTab';
// import FirebaseLoginTab from './tabs/FirebaseLoginTab';
// import JWTLoginTab from './tabs/JWTLoginTab';
// import { useSpring, animated } from "react-spring";

// const Root = styled('div')(({ theme }) => ({
//   background: `url(assets/images/backgrounds/bgsvg.svg)`,
//   color: theme.palette.primary.contrastText,

//   '& .Login-leftSection': {},
// }));

// function Login() {
//   return (
//     <Root className="flex flex-col flex-auto items-center justify-center shrink-0 p-16 md:p-24">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.6 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
//       >
//         <Card
//           className="Login-leftSection flex flex-col w-full max-w-[400px] items-center justify-center shadow-0"
//           square
//         >
//           <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1, transition: { delay: 0.2 } }}
//             >
//               <div className="flex items-center mb-48">
//                 <img className="logo-icon w-200" src="assets/images/logos/LogoWebInfoPak.svg" alt="logo" />
//               </div>
//             </motion.div>
//             <JWTLoginTab />
//           </CardContent>
//         </Card>
//       </motion.div>
//     </Root>
//   );
// }

// export default Login;


import Card from '@mui/material/Card';
import { styled, darken } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth0LoginTab from './tabs/Auth0LoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import JWTLoginTab from './tabs/JWTLoginTab';
import NavbarLogin from './navbarLogin/navbarLogin'

const Root = styled('div')(({ theme }) => ({
  background: `url(assets/images/backgrounds/bg.svg)`,
  color: theme.palette.primary.contrastText,

  '& .Login-leftSection': {},

  '& .Login-rightSection': {
    color: theme.palette.primary.contrastText,
  },
}));

function Login() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <>
    
    <NavbarLogin />
    <Root className="flex flex-col flex-auto items-center justify-center shrink-0 p-16 md:p-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 overflow-hidden"
      >
        <Card
          className="Login-leftSection flex flex-col w-full max-w-[400px] lg:ml-[7rem] items-center py-[3rem] justify-center shadow-none"
        >
          <CardContent className="flex flex-col items-center justify-center w-full max-w-[340px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div className="mb-[3rem]">
                <Typography variant="h4" className="font-bold mb-[.5rem]">
                  Selamat Datang di Web Info PAK Guru .
                </Typography>
                <Typography variant="subtitle1">
                  Media Informasi Penilaian dan Penetapan Angka Kredit Guru.
                </Typography>
              </div>
            </motion.div>
            <JWTLoginTab />
          </CardContent>
        </Card>
      </motion.div>
    </Root>
    </>
  );
}

export default Login;