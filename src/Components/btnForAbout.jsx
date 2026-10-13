
const BtnForAbout = ({ swiperRef, }) => {

	return (
		<div>
			<div className='flex gap-[9.5px] justify-end  '>
				<button onClick={() => swiperRef.current?.slidePrev()} className='bg-[#D2D2D7A3]  rounded-full p-[9.5px] active:bg-black text-white' >
					chap
				</button>
				<button onClick={() => swiperRef.current?.slideNext()} className='bg-[#D2D2D7A3] rounded-full p-[9.5px] active:bg-black text-white '>
					ong
				</button>
			</div>
		</div>
	)
}



export default BtnForAbout