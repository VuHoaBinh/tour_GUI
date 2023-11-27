import { InfiniteSlider } from 'components';
import { useRef } from 'react';

const SliderImg = () => {
  const slider = useRef<InfiniteSlider>(null);
  const images = [
    'https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/ba-na-hill.jpg',
    'https://images.vietnamtourism.gov.vn/en//images/2022/dn.jpg',
    'https://vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Phu%20Quoc%20family%20guide.jpg',
    'https://innoviet.com/upload/2020/Blog/best-places-to-travel-by-tour-guide/rice-terraces-innoviet-best-places-to-visit-by-tour-guide.jpg',
  ];

  return (
    <div>
      <InfiniteSlider
        ref={slider}
        {...{
          autoplaySpeed: 3000,
          autoplay: true,
          dots: false,
          arrows: false,
        }}
      >
        {images.map((image, item) => (
          <div className='relative'>
            <img className='h-[80vh] w-full' src={image} alt='' />
            <div className='absolute top-0 z-20 h-[80vh] w-full bg-[#00000066]'></div>
            <div className='transhtmlForm absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-center text-[#FFF]'>
              <div className='whitespace-nowrap text-3xl font-extrabold lg:text-5xl'>
                WELCOME TO <span className='text-[#FF6600]'>SUNNY</span> TRAVEL
              </div>
              <p className='py-4 text-base font-extrabold lg:text-2xl'>Chuyên tổ chức các tour du lịch trong nước</p>
            </div>
          </div>
        ))}
      </InfiniteSlider>
      <div className='container relative z-30'></div>
    </div>
  );
};

export default SliderImg;
