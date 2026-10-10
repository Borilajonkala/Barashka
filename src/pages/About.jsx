import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
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

import Apple from '../assets/Container.png'

// MAIN IMG APPLE

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
// SWIPER IMPORTS
const About = () => {
	const arr = [
		{ img: img1, tip: 'Iphone 16 pro', isNew: true },
		{ img: img2, tip: 'iPhone 16', isNew: true },
		{ img: img3, tip: 'iPhone 15', isNew: false },
		{ img: img4, tip: 'iPhone', isNew: false },
		{ img: img5, tip: 'iPhone 14', isNew: false },
		{ img: img6, tip: 'iPone SE', isNew: false },
		{ img: img7, tip: 'Compare', isNew: false },
		{ img: img8, tip: 'AirPods', isNew: true },
		{ img: img9, tip: 'AirTag', isNew: false },
		{ img: img10, tip: 'Accessories', isNew: false },
		{ img: img11, tip: 'Apple Card', isNew: false },
		{ img: img12, tip: 'IOS 18', isNew: false },
		{ img: img13, tip: 'Shop iPhone', isNew: false },
	]
	// tepaga imglarni assets dan ozining imglarini togirlab qoyish kere hozir faqat bitta img da test qlingan va hamma code ishlavoti

	const bar = [
		{
			id: 1,
			bgImg: bgImg,
			text: 'Apple Intelligence',
			title: 'AI-opening possibilities',
			textcolor:'#FFFFFF'
		},
		{
			id: 2,
			bgImg: bgImg2,
			text: 'Cutting-Edge Cameras',
			title: 'Picture your best photos and videos',
			textcolor:'#FFFFFF'
		},
		{
			id: 3,
			bgImg: bgImg3,
			text: 'Chip and Battery Life',
			title: 'Fast that lasts.',
			textcolor:'#FFFFFF'
		},
		{
			id: 4,
			bgImg: bgImg4,
			text: 'Innovation',
			title: 'Beautiful and durable, by design.',
			textcolor:'#000000'
		},
	]

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
					navigation={true}
					breakpoints={{
						640: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 6,
						},
					}}
				>
					{arr.map(e => (
						<SwiperSlide key={e.id}>
							<div className='flex h-full flex-col items-center gap-3 rounded-xl bg-[#FAFAFC] text-black p-4 text-center transition duration-300 '>
								<img
									src={e.img}
									alt={e.tip}
									className='h-24 w-full object-contain'
								/>

								<h4 className='font-medium'>{e.tip}</h4>

								{e.isNew && (
									<span className='text-xs font-semibold text-orange-500'>
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
			<div className='container mx-auto p-4'>
				<div className='my-10 flex flex-col gap-20 text-black'>
					<h2 className='font-bold text-[54.14px] '>Get to know iPhone.</h2>
					<div className=''>
						{
							<Swiper
								modules={[Navigation]}
								slidesPerView={3.8}
								speed={500}
								autoHeight={true}
								navigation={{
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								}}
								
							>
									{bar.map(e => (
								<SwiperSlide>
										<div
											key={e.tip}
											style={{ backgroundImage: `url(${e.bgImg})` , color: `${e.textcolor}` }}
											className='h-[680px] rounded-2xl w-[372px] bg-cover bg-center bg-no-repeat p-[32px] relative '
										>
											<p className='text-[17px]'>{e.text}</p>
											<h6 className='text-[26.8px]'>{e.title}</h6>
											<button className='absolute bg-[#333336] rounded-full p-[9px] bottom-5 right-5'><img src={Plus} alt="" /></button>
										</div>
								</SwiperSlide>
									))}
							</Swiper>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
