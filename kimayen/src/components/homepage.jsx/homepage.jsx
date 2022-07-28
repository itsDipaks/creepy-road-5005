import { Container, Heading, HStack, VStack,Box,Image,Text,Button} from '@chakra-ui/react'
import "./homepage.css"
import start from "../images/start.png"
import kimm from "../images/kimm.png"
const Homepage=()=>{
    return(
<div className='div'>

<Image w='100%' style={{margin:"auto" ,marginTop:"20px",marginBottom:"50px"}} src={start}/>
{/* <VStack>
<Heading   >KIMAYE RECOMMENDS</Heading>
<Heading  size='md'>A Handpicked and Curated Fruit offering</Heading>
</VStack> */}
<Image w='40%' style={{margin:"auto" ,marginBottom:"50px"}} src={kimm}/>
<Container maxW='1220px' color='black' >
    <HStack >
         <Box w='50%' H='10%'>
         <VStack >
        <Image boxSize='550px' className='img'  objectFit='cover' src='https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_570x.png?v=1614338437 '/>
        <Heading className='heading' >ALL FRUITS</Heading>
        <Text>Pick and choose from a wide range of delicious fruits</Text>
        <Button colorScheme='red' className='shopbtn' variant='solid'>Shop Now  </Button>
        </VStack>
        </Box>
       
        <Box  w='50%'>
        <VStack >
        <Image boxSize='550px'  className='img'   objectFit='cover' src='	https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_570x.png?v=1614338730'/>
        <Heading className='heading'>FRESH CUTS</Heading>
        <Text>We want to spoon-feed you… quite literally</Text>
        <Button className='shopbtn' colorScheme='red' variant='solid'>Shop Now  </Button>
        </VStack>
        </Box>
        
    </HStack>


    <hr />
    <HStack style={{marginTop:"50px"}}>
     
     <Box  w='50%'>
             <VStack  spacing={1}>
         <Image boxSize='550px' className='img'  objectFit='cover' src='	https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_570x.jpg?v=1614339080'/>
         <Heading className='heading'>FRUIT COMBOS</Heading>
         <Text>Indulge in fruit combinations created by us</Text>
         <Button  className='shopbtn' colorScheme='red' variant='solid'>Shop Now  </Button>
         </VStack>
       
         </Box>
        
         <Box  w='50%'>
             <VStack  spacing={1}>
         <Image boxSize='550px' className='img'  objectFit='cover' src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_570x.jpg?v=1631516874
'/>
         <Heading className='heading'>GIFTS BY KIMAYE</Heading>
         <Text>Healthy & memorable gifts for your loved ones</Text>
         <Button colorScheme='red ' className='shopbtn' variant='solid'>Shop Now  </Button>
         </VStack>
        
         </Box>
 
     </HStack>
   
  </Container>
</div>
    )
}
export default Homepage;