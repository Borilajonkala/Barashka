import {
	default as img1,
	default as img2,
	default as img3,
	default as img4,
	default as img5,
	default as img6,
	default as img7,
	default as img8,
	default as img9,
	default as img10,
	default as img11,
	default as img12,
	default as img13,
} from '../assets/iphone_16_pro_light__sh8e76empwyq_large.svg fill.png'

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
	console.log(arr)

	return (
		<div>
			<div className=' flex gap-20  '>
        {arr.map((e) =>(
       e.isNew ? <div><img src={e.img} alt="" />
          <h4>{e.tip}</h4>
          <p>{e.isNew} New</p>  </div> : <div><img src={e.img} alt="" />
          <h4>{e.tip}</h4>
          </div>
          // endo bunga sal dizayn berilsa logikasi togri ishlavoti koproq mehr berish kere logikasi shundaki obj dan product new bosa gina New yozigi bilan keladi qoganlari default koriniwda keladi
        ))}
      </div>
		</div>
	)
}

export default About
