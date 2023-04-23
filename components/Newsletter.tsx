import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

type Props = {};
function Newsletter({}: Props) {
  return (
    <div className="bg-[#131920] p-4 py-14 space-y-3 md:px-[200px]">
      <p className="text-white font-[300] text-lg md:text-2xl ">
        Stay up-to-date on the latest trends, seasonal collections, and
        exclusive offers from ZingShop - your go-to destination for electronics,
        men's and women's clothing, and jewelry. Sign up for our newsletter
        today and never miss a beat!
      </p>
      <div className='space-x-3'>

      <FacebookIcon  className='text-white' sx={{fontSize:'30px'}}/>
      <InstagramIcon  className='text-white' sx={{fontSize:'30px'}}/>
      <YouTubeIcon  className='text-white' sx={{fontSize:'30px'}}/>
    </div>
    <div className='space-y-2'>
        <h2 className='text-white text-3xl'> Subscribe to NewsLetter</h2>
        <div className='flex  items-center'>
            
        <input placeholder='enter your email address ' className=' text-white w-[300px] h-[50px] bg-transparent outline-none border p-2 border-white'></input>
        <button className=' bg-gray-800 text-white h-[50px] p-2'>Subscribe</button>
        </div>

    </div>
      </div>
  );
}
export default Newsletter;
