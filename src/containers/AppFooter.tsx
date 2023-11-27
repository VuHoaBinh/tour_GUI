import { Email, LocalPhone, LocationOn } from '@mui/icons-material';
import { AppBar, Container, Grid, Toolbar } from '@mui/material';

const AppFooter = () => {
  return (
    <AppBar
      component='footer'
      position='static'
      color='transparent'
      elevation={0}
      style={{
        background: `#0a0a0a url('https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/02/bg-footer.jpg') no-repeat center / cover`,
      }}
    >
      <div className='flex items-center justify-center bg-[#000] pb-4 pt-3 text-sm text-[#A5A5A5] lg:text-base'>
        GOLDEN SPONSORS
      </div>
      <Container maxWidth='lg' className='mt-16'>
        <Toolbar component={Container} maxWidth='xl'>
          <div className='flex flex-1 flex-col text-xs lg:flex-row'>
            <div className='basis-1/4 pb-7 text-[#A5A5A5] md:px-5'>
              <img
                className='mb-4'
                src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/logo_footer.png'
              />
              <p className='h-8'>
                <span className='mr-2'>
                  <LocationOn fontSize='small' />
                </span>
                319 Nguyễn Văn Bảo, Q.Gò Vấp, HCM
              </p>
              <p className='h-8'>
                <span className='mr-2'>
                  <LocalPhone fontSize='small' />
                </span>
                0126 922 0162
              </p>
              <p className='h-8'>
                <span className='mr-2'>
                  <Email fontSize='small' />
                </span>
                sunnytravel@company.com
              </p>
              <p className='h-8'>Đăng ký để được nhận thông tin khuyến mãi một cách nhanh chóng</p>
            </div>
            <div className='basis-1/4 pb-7 md:px-5'>
              <div className='mb-6 mt-2 text-[18px] font-bold text-[#FFF]'>Tin tức</div>
              <ul className='list-inside list-disc leading-8 text-[#A5A5A5]'>
                <li>Bản tin Du Lịch Việt</li>
                <li>Cẩm nang du lịch</li>
                <li>Khám phá du lịck</li>
                <li>Sự kiện du lịch</li>
                <li>Tuyển dụng Du Lịch</li>
              </ul>
            </div>
            <div className='basis-1/4 pb-7 md:px-5'>
              <div className='mb-6 mt-2 text-[18px] font-bold text-[#FFF]'>Góc Khách Hàng </div>
              <ul className='list-inside list-disc leading-8 text-[#A5A5A5]'>
                <li>Điều kiện & điều khoản</li>
                <li>Quyền riêng tư</li>
                <li>Chính sách bảo mật và thông tin</li>
                <li>Ý kiến khách hàng</li>
                <li>Phương thức thanh toán</li>
              </ul>
            </div>
            <div className='basis-1/4 pb-7 md:px-5'>
              <div className='mb-8 mt-2 text-[18px] font-bold text-[#FFF]'>Tour Phổ Biến</div>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img
                    className='h-[102px] w-[102px] md:h-[152px] md:w-[152px] lg:h-[62px] lg:w-[62px]'
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_2.jpg'
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    className='h-[102px] w-[102px] md:h-[152px] md:w-[152px] lg:h-[62px] lg:w-[62px]'
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_1-247x300.jpg'
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    className='h-[102px] w-[102px] md:h-[152px] md:w-[152px] lg:h-[62px] lg:w-[62px]'
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/sea_tour_img_1-300x284.jpg'
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    className='h-[102px] w-[102px] md:h-[152px] md:w-[152px] lg:h-[62px] lg:w-[62px]'
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg'
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    className='h-[102px] w-[102px] md:h-[152px] md:w-[152px] lg:h-[62px] lg:w-[62px]'
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Phoco_hoian.jpg'
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    className='h-[102px] w-[102px] md:h-[152px] md:w-[152px] lg:h-[62px] lg:w-[62px]'
                    src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_3.jpg'
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppFooter;
