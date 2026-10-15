import { useRef } from 'react'

import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Hooks

import iPhoneimg3 from '../assets/14withgirl.png'
import iPhoneimg2 from '../assets/15withgirl.png'
import iPhoneimg from '../assets/16withgirl.png'
import Apple from '../assets/Container.png'
import {
	default as img1,
	default as img10,
	default as img11,
	default as img12,
	default as img13,
	default as img2,
	default as img3,
	default as img4,
	default as img5,
	default as img6,
	default as img7,
	default as img8,
	default as img9,
} from '../assets/iphone_16_pro_light__sh8e76empwyq_large.svg fill.png'
import iPhoneimg4 from '../assets/SEwithgirl.png'
import iPoness from '../assets/iPhoness.jpg'
import brilok from '../assets/brilok.jpg'
import pictureOfgirl from '../assets/PictureOfGirl.png'
// MAIN IMG APPLE

import imgapple from '../assets/appleCard.png'
import imgaround from '../assets/aroundIcon.png'
import imglogistic from '../assets/logistic.png'

// Apple va logistic imgs

import bgImg from '../assets/5e0f4e5010ef06d5c1b897b806c3e22877dafd33.jpg'
import bgImg3 from '../assets/A18 Pro.jpg'
import bgImg2 from '../assets/boy.jpg'
import bgImg4 from '../assets/iPhone.jpg'

import Plus from '../assets/SVG.png'

//BG IMGS

import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import BtnForAbout from '../Components/btnForAbout'

// SWIPER IMPORTS

const About = () => {
	const arr = [
		{
			id: 1,
			img: img1,
			tip: 'Iphone 16 pro',
			isNew: true,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 2,
			img: img2,
			tip: 'iPhone 16',
			isNew: true,
			iPhoneimg: iPhoneimg,
			title: 'A total powerhouse',
		},
		{
			id: 3,
			img: img3,
			tip: 'iPhone 15',
			isNew: false,
			iPhoneimg: iPhoneimg2,
			title: 'A total powerhouse',
		},
		{
			id: 4,
			img: img4,
			tip: 'iPhone 14',
			isNew: false,
			iPhoneimg: iPhoneimg3,
			title: 'A total powerhouse',
		},
		{
			id: 5,
			img: img5,
			tip: 'iPone SE',
			isNew: false,
			iPhoneimg: iPhoneimg4,
			title: 'A total powerhouse',
		},
		{
			id: 6,
			img: img6,
			tip: 'Compare',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 7,
			img: img7,
			tip: 'AirPods',
			isNew: true,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 8,
			img: img8,
			tip: 'AirTag',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 9,
			img: img9,
			tip: 'Accessories',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 10,
			img: img10,
			tip: 'Apple Card',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 11,
			img: img11,
			tip: 'IOS 18',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 12,
			img: img12,
			tip: 'Shop iPhone',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
		{
			id: 13,
			img: img13,
			tip: 'Shop iPhone',
			isNew: false,
			iPhoneimg: null,
			title: 'A total powerhouse',
		},
	]
	// tepaga imglarni assets dan ozining imglarini togirlab qoyish kere hozir faqat bitta img da test qlingan va hamma code ishlavoti

	const SwiperBar = [
		{
			img: imgaround,
			title: 'Save with Apple Trade In.',
			text: 'Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.',
		},
		{
			img: imgapple,
			title: 'Save with Apple Trade In.',
			text: 'Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.',
		},
		{
			img: imgaround,
			title: 'Save with Apple Trade In.',
			text: 'Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.',
		},
		{
			img: imglogistic,
			title: 'Save with Apple Trade In.',
			text: 'Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.',
		},
	]

	const bar = [
		{
			id: 1,
			bgImg: bgImg,
			text: 'Apple Intelligence',
			title: 'AI-opening possibilities',
			textcolor: '#FFFFFF',
		},
		{
			id: 2,
			bgImg: bgImg2,
			text: 'Cutting-Edge Cameras',
			title: 'Picture your best photos and videos',
			textcolor: '#FFFFFF',
		},
		{
			id: 3,
			bgImg: bgImg3,
			text: 'Chip and Battery Life',
			title: 'Fast that lasts.',
			textcolor: '#FFFFFF',
		},
		{
			id: 4,
			bgImg: bgImg4,
			text: 'Innovation',
			title: 'Beautiful and durable, by design.',
			textcolor: '#000000',
		},
	]

	const iphoneSwiperRef = useRef(null)
	const barSwiperRef = useRef(null)
	const lineupSwiperRef = useRef(null)
	console.log(arr)

	return (
		<div className='bg-[#FAFAFC]'>
			<div className='container mx-auto px-4 py-8'>
				<Swiper
					modules={[Navigation, FreeMode]}
					slidesPerView={2.5}
					spaceBetween={24}
					speed={500}
					freeMode={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					breakpoints={{
						640: {},
						1024: {
							slidesPerView: 6,
						},
					}}
				>
					{arr.map(e => (
						<SwiperSlide key={e.id}>
							<div className='flex h-full flex-col items-center gap-3 rounded-xl bg-[#FAFAFC] text-black p-4 text-center transition duration-300 '>
								<a className='cursor-pointer' href={e.id}>
									<img
										src={e.img}
										alt={e.tip}
										className='h-24 w-full object-contain'
									/>
								</a>

								<h4 className='font-medium'>{e.tip}</h4>

								{e.isNew && (
									<span className='text-[17px] font-semibold text-orange-500'>
										New
									</span>
								)}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='flex gap-3 justify-center items-center bg-[#F5F5F7] p-4.5 text-[14px] text-black'>
				<h3>
					Save time at iPhone pre-order. Get the prep work done now, then speed
					through checkout on 9.13.{' '}
				</h3>{' '}
				<Link className='text-blue-500'>Get Started</Link>
			</div>
			<div className='bg-white'>
				<div className='container mx-auto p-4'>
					<div className='text-black flex justify-between items-center'>
						<h1 className='text-[77.19px] font-bold'>iPhone</h1>
						<h5 className='text-[27px] font-bold'>Designed to be loved.</h5>
					</div>
					<div className='flex justify-center items-center'>
						<img src={Apple} alt='' />
					</div>
				</div>
			</div>
			{/* iPhone img  */}
			<div className='container mx-auto p-4'>
				<div className='my-10 flex flex-col gap-20 text-black'>
					<h2 className='font-bold text-[54.14px] '>Get to know iPhone.</h2>
					<div className='relative mb-50'>
						{
							<Swiper
								modules={[Navigation]}
								slidesPerView={3.8}
								speed={500}
								autoHeight={true}
								onSwiper={swiper => {
									barSwiperRef.current = swiper
								}}
								navigation={false}
							>
								{bar.map(e => (
									<SwiperSlide key={e.tip}>
										<div
											style={{
												backgroundImage: `url(${e.bgImg})`,
												color: `${e.textcolor}`,
											}}
											className='h-[680px] rounded-2xl w-[372px] bg-cover bg-center bg-no-repeat p-[32px] relative '
										>
											<p className='text-[17px]'>{e.text} </p>
											<h6 className='text-[26.8px]'>{e.title}</h6>
											<button className='absolute bg-[#333336] rounded-full p-[9px] bottom-5 right-5'>
												<img src={Plus} alt='' />
											</button>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						}
						<div className='flex justify-end pt-[37px]'>
							<BtnForAbout swiperRef={barSwiperRef} />
						</div>
					</div>
				</div>
			</div>
			{/* Apple img lar joyi */}

			<div className='bg-[#F5F5F7] pt-[140px] pb-[66px] w-full border-b-2 border-gray-300'>
				<div className='container mx-auto p-4'>
					<div className='text-black flex justify-between items-center mb-10'>
						<h2 className='text-[53.81px]'>Explore the lineup.</h2>
						<p className='text-[#0066CC]'>
							<Link>Compare all models</Link>
						</p>
					</div>

					<Swiper
						slidesPerView='auto'
						spaceBetween={32}
						grabCursor={true}
						slideToClickedSlide={true}
						navigation={false}
						speed={500}
						onSwiper={swiper => {
							iphoneSwiperRef.current = swiper
						}}
					>
						{arr
							.filter(e => e.iPhoneimg !== null)
							.map(e => (
								<SwiperSlide key={e.id} className='!w-[372px] h-auto'>
									<div className='flex flex-col text-black justify-between items-center gap-5 h-full'>
										<div className='w-[372px] flex justify-center'>
											<img src={e.iPhoneimg} alt={e.tip} />
										</div>

										<div className='flex justify-center items-center gap-[6px]'>
											<div className='p-[11px] bg-[#94A5EB] rounded-full'></div>
											<div className='p-[11px] bg-[#ABCFCD] rounded-full'></div>
											<div className='p-[11px] bg-[#EDA8D5] rounded-full'></div>
											<div className='p-[11px] blur-2xl bg-[#F5F5F5] rounded-full'></div>
											<div className='p-[11px] bg-[#35393B] rounded-full'></div>
										</div>

										<div className='flex flex-col items-center justify-center'>
											<p className=''>
												{e.isNew && (
													<span className='text-[17px] font-semibold text-orange-500'>
														New
													</span>
												)}
											</p>
											<h4 className='text-[27.34px]'>{e.tip}</h4>
											<p>{e.title}</p>
										</div>

										<div className='flex gap-[33.42px] items-center  text-blue-500 justify-around'>
											<button className='bg-blue-500 text-white px-[22px] py-[12px] rounded-3xl'>
												<Link>Learn more</Link>
											</button>
											<Link>View pricing</Link>
										</div>
									</div>
								</SwiperSlide>
							))}
					</Swiper>
					<BtnForAbout swiperRef={iphoneSwiperRef} />
				</div>
			</div>
			<div className='pt-[51px] flex flex-col gap-20 bg-[#F5F5F7]'>
				<div className='container mx-auto p-4'>
					<div className='text-black'>
						<div className='flex justify-between items-end'>
							<h4 className='text-[54.36px] font-bold w-[549px]'>
								Why Apple is the best place to buy iPhone.
							</h4>
							<a className='text-[#0066CC] text-[17px]' href=''>
								<Link>Shop iPhone</Link>
							</a>
						</div>
						<Swiper
							slidesPerView={3.5}
							spaceBetween={24}
							grabCursor={true}
							navigation={false}
							speed={500}
							onSwiper={swiper => {
								lineupSwiperRef.current = swiper
							}}
						>
							{SwiperBar.map((e, index) => (
								<SwiperSlide key={index} className='mt-[70px]'>
									<div className='bg-white rounded-[32px] p-9 h-[390px] relative'>
										<div className='text-black'>
											<img src={e.img} alt='' />
											<h2 className='text-[30px] font-bold leading-tight mt-5'>
												{e.title}
											</h2>

											<p className='text-[20px] leading-6 mt-4'>{e.text}</p>
										</div>

										<button className='absolute bottom-6 right-6 bg-[#333336] text-white rounded-full w-11 h-11 text-3xl flex items-center justify-center'>
											+
										</button>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className='flex justify-end mt-[70px]'>
							<BtnForAbout swiperRef={lineupSwiperRef} />
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white text-black'>
				<div>
					<div className="container mx-auto py-5 ">
					<div className='flex justify-between items-center ' >
							<h3 className='text-[53.7px] font-bo'>iPhones essentials.</h3>
						<a className='text-[#0066CC] text-[17px]' href=''>
							<Link>All iPhone accessories</Link>
						</a>
					</div>
					</div>
						<div className="container mx-auto p-4">
					<div className='flex justify-between text-black'>
						<div className='w-[620px] bg-[#F5F5F7] rounded-4xl'>
							<div className='p-[58px]'>
								<h4 className='text-[27px] font-bold'>MagSafe</h4>
							<p className='text-[17px]'>
								Snap on a magnetic case, wallet, or both. And get faster,
								efficient wireless charging.
							</p>
							<a className='text-[17px]' href=''>
								<Link>Shop MagSafe accessories</Link>
							</a>
							</div>
						<img className='w-full' src={iPoness} alt="" />
						</div>
						<div className='w-[620px]  max-h-[605px]  overflow-hidden] bg-[#F5F5F7] rounded-4xl '>
							<div className='p-[56px]'>
								<h4 className='text-[27px] font-bold'>AirTag</h4>
							<p className='text-[17px]'>
								Attach one to your keys. Put another in your backpack. If
								they’re misplaced, just use the Find My app.
							</p>
							<a className='text-[17px]' href=''>
								<Link>Buy</Link>
							</a>
							</div>
							<img className='w-full h-auto object-contain' src={brilok} alt="" />
						</div>
						</div>
					</div>
				</div>

				{/* ikkinci div */}

				<div>
					<div className="container mx-auto p-4">
					<h3 className='text-[53.7px] font-bold'>Significant others</h3>
					<div className='bg-[#F5F5F7] flex justify-between rounded-4xl'>
						<ul className='py-[120px]  px-[90px]'>
							<li className='text-[27.23px] font-bold'>
								<details open>
      <summary className="cursor-pointer text=[27.23px] font-semibold list-none">
       iPhone and Mac
      </summary>
			<p className='mt-3'>With iPhone Mirroring, you can view your
iPhone screen on your Mac and control it
without picking up your phone. Continuity
features also let you answer calls or
messages right from your Mac. You can
even copy images, video, or text from
your iPhone and paste it all into a different
app on your Mac. And with iCloud, you
can access your files from either device.</p>
</details>
							</li>
							<li className='text-[27.23px] font-bold transition-all'>
								<details>
      <summary className="cursor-pointer text=[27.23px] font-semibold list-none">
iPhone and
Apple Watch
      </summary>
			<p className='mt-3'>With iPhone and Apple Watch, you can stay connected throughout the day. Check notifications, answer calls, and track your daily activity right from your wrist. You can also control music, monitor your workouts, and access helpful features without taking your iPhone out of your pocket.</p>
</details>
							</li>
							<li className='text-[27.23px] font-bold transition-all'>
								<details>
      <summary className="flex cursor-pointer list-none items-center justify-between py-4">
      iPhone and AirPods
      </summary>
			<p className='mt-3'>With iPhone and AirPods, you can enjoy your favorite music, podcasts, and calls with ease. AirPods connect seamlessly to your iPhone, letting you listen wirelessly wherever you go. You can also switch between listening to music and taking calls, while enjoying features designed to make your everyday experience more convenient.</p>
</details>
							</li>
						</ul>
						<img src={pictureOfgirl} alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* Footer  */}

			```jsx
{/* Footer */}
<div className="w-full bg-[#F5F5F7] text-[#1D1D1F]">
  <footer className="footer footer-vertical sm:footer-horizontal container mx-auto px-6 md:px-12 lg:px-24 py-16">
    
    <h2 className="text-[40px] md:text-[54px] font-bold tracking-tight mb-6">
      iPhone
    </h2>

    {/* Explore iPhone */}
    <nav className="w-full">
      <details className="group w-full" open>
        <summary className="flex cursor-pointer list-none items-center justify-between text-[#86868B] text-lg py-3 [&::-webkit-details-marker]:hidden">
          Explore iPhone
          <span className="text-2xl transition-transform duration-300 group-open:rotate-45 sm:hidden">
            +
          </span>
        </summary>

        <div className="grid grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 pb-5 sm:pb-0">
              <a className="font-semibold text-xl link link-hover">Explore All iPhone</a>
              <a className="font-semibold text-xl link link-hover">iPhone 16 Pro</a>
              <a className="font-semibold text-xl link link-hover">iPhone 16</a>
              <a className="font-semibold text-xl link link-hover">iPhone 15</a>
              <a className="font-semibold text-xl link link-hover">iPhone 14</a>
              <a className="font-semibold text-xl link link-hover">iPhone SE</a>
              <a className="link link-hover mt-4">Compare iPhone</a>
              <a className="link link-hover">Switch from Android</a>
            </div>
          </div>
        </div>
      </details>
    </nav>

    {/* Shop iPhone */}
    <nav className="w-full">
      <details className="group w-full">
        <summary className="flex cursor-pointer list-none items-center justify-between text-[#86868B] text-lg py-3 [&::-webkit-details-marker]:hidden">
          Shop iPhone
          <span className="text-2xl transition-transform duration-300 group-open:rotate-45 sm:hidden">
            +
          </span>
        </summary>

        <div className="flex flex-col gap-3 pb-5 sm:pb-0">
          <a className="link link-hover font-semibold">Shop iPhone</a>
          <a className="link link-hover font-semibold">iPhone Accessories</a>
          <a className="link link-hover font-semibold">Apple Trade In</a>
          <a className="link link-hover font-semibold">Carrier Deals at Apple</a>
          <a className="link link-hover font-semibold">Financing</a>
        </div>
      </details>
    </nav>

    {/* More from iPhone */}
    <nav className="w-full">
      <details className="group w-full">
        <summary className="flex cursor-pointer list-none items-center justify-between text-[#86868B] text-lg py-3 [&::-webkit-details-marker]:hidden">
          More from iPhone
          <span className="text-2xl transition-transform duration-300 group-open:rotate-45 sm:hidden">
            +
          </span>
        </summary>

        <div className="flex flex-col gap-3 pb-5 sm:pb-0">
          <a className="link link-hover font-semibold">iPhone Support</a>
          <a className="link link-hover font-semibold">AppleCare+ for iPhone</a>
          <a className="link link-hover font-semibold">iOS 18</a>
          <a className="link link-hover font-semibold">Apple Intelligence</a>
          <a className="link link-hover font-semibold">Apps by Apple</a>
          <a className="link link-hover font-semibold">iPhone Privacy</a>
          <a className="link link-hover font-semibold">iCloud+</a>
          <a className="link link-hover font-semibold">Wallet, Pay, Card</a>
          <a className="link link-hover font-semibold">Siri</a>
        </div>
      </details>
    </nav>

  </footer>
</div>

		</div>
	)
}

export default About
