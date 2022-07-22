import { Container, Heading, HStack, VStack,Box,Image,Text,Button} from '@chakra-ui/react'
import "./homepage.css"
const Homepage=()=>{
    return(
<div className='div'>
<VStack>
<Heading  size='xl' >KIMAYE RECOMMENDS</Heading>
<Heading  size='md'>A Handpicked and Curated Fruit offering</Heading>
</VStack>
<Container maxW='1050px' color='black'>
    <HStack>
     
    <Box>
            <VStack  spacing={4}>
        <Image boxSize='350px'  style={{borderRadius:"30px"}} objectFit='cover' src='https://images.unsplash.com/photo-1655389158915-ed128af11596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
        <Heading>ALL FRUITS</Heading>
        <Text>Pick and choose from a wide range of delicious fruits</Text>
        <Button colorScheme='red' variant='solid'>Shop Now  </Button>
        </VStack>
      
        </Box>
       
        <Box>
            <VStack  spacing={4}>
        <Image boxSize='350px'   objectFit='cover' src='https://images.unsplash.com/photo-1655389158915-ed128af11596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
        <Heading>ALL FRUITS</Heading>
        <Text>Pick and choose from a wide range of delicious fruits</Text>
        <Button colorScheme='red' variant='solid'>Shop Now  </Button>
        </VStack>
      
        </Box>

    </HStack>
    <HStack>
     
     <Box>
             <VStack  spacing={4}>
         <Image boxSize='350px'   objectFit='cover' src='https://images.unsplash.com/photo-1655389158915-ed128af11596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
         <Heading>ALL FRUITS</Heading>
         <Text>Pick and choose from a wide range of delicious fruits</Text>
         <Button colorScheme='red' variant='solid'>Shop Now  </Button>
         </VStack>
       
         </Box>
        
         <Box>
             <VStack  spacing={4}>
         <Image boxSize='350px'   objectFit='cover' src='https://images.unsplash.com/photo-1655389158915-ed128af11596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
         <Heading>ALL FRUITS</Heading>
         <Text>Pick and choose from a wide range of delicious fruits</Text>
         <Button colorScheme='red' variant='solid'>Shop Now  </Button>
         </VStack>
       
         </Box>
 
     </HStack>
   
  </Container>
</div>
    )
}
export default Homepage;