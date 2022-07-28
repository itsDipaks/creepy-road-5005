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
 
  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
  
    return (
      <>
        <Button colorScheme="white" style={{color:"black",border:"1px solid black",borderRadius:"50px"}} onClick={onOpen}>
          Login
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
             LOGIN
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing="25px">
              

                <Box>
                  <FormLabel htmlFor="username">Email Address</FormLabel>
                  <Input type={"email"} ref={firstField} id="email" />
                </Box>
                <Box>
                  <FormLabel htmlFor="username">Passward</FormLabel>
                  <Input ref={firstField} id="pass" type={"password"} />
                </Box>
               
                <Button colorScheme="blue">Submit</Button>
                <hr />
               
              <Heading style={{fontSize:"28px",textAlign:"center"}}>REGISTRATION</Heading>
                <p style={{textAlign:"center"}}>Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p>
                <Button style={{backgroundColor:"black",
              color:"white"}}>Register</Button>
              </Stack>
            
            </DrawerBody>
  
     
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  export default Login;
  