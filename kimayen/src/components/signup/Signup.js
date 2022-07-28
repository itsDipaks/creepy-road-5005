import {
  Drawer,
  DrawerBody,
  Heading,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Stack,
  DrawerCloseButton,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./signup.css";
function Signup() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const firstField = React.useRef();

const [userdata,setuserdata]=useState({
  firstname:"",
  lastname:"",
  email:"",
  pass:"",
id:""
})
const Handeledchange=(e)=>{
const name=e.target.name
const value=e.target.value
console.log(name)
setuserdata({...userdata,[name]:value})
}

const handeldsubmitform=(e)=>{

  e.preventDefault();

 var newrecord={...userdata  , id: new Date().getTime().toString()}
  console.log(newrecord)

}


  return (
    <>
      <Button  style={{color:"black",border:"1px solid black",borderRadius:"50px"}} onClick={onOpen}>
        Signup
      </Button>

      <Drawer
        isOpen={isOpen}
        size="sm"
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            style={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
            borderBottomWidth="1px"
          >
            CREATE NEW ACCOUNT
          </DrawerHeader>

          <DrawerBody>
                                  <Stack spacing="25px">
            <form action="" onSubmit={handeldsubmitform}>
              <Box>
                <FormLabel htmlFor="username">First Name</FormLabel>
                <Input ref={firstField}  type="text"  autoComplete="off" name="firstname"  value={userdata.firstname}  onChange={Handeledchange}    id="1" />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Last Name </FormLabel>
                <Input ref={firstField} type="text" name="lastname"  value={userdata.lastname}  onChange={Handeledchange}  autoComplete="off"  id="2"  />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Email Address</FormLabel>
                <Input  ref={firstField} type="email" name="email"  value={userdata.email}  onChange={Handeledchange}  autoComplete="off"  id="3"  />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Passward</FormLabel>
                <Input ref={firstField}  type="password"   name="pass"   value={userdata.pass} onChange={Handeledchange}  autoComplete="off" id="4"   />
              </Box>

              <Button colorScheme="blue" type="submit">Submit</Button>
              <hr />
              </form>
              <Heading style={{fontSize: "28px", textAlign: "center"}}>
                REGISTRATION
              </Heading>
              <p style={{textAlign: "center"}}>
                Welcome to Kimaye! Help us with a few details to know you better
                as you take the journey of enjoying our safe and tasty fruits.
              </p>
              <Button style={{backgroundColor: "black", color: "white"}}>
                Login
              </Button>
            </Stack>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Signup;
