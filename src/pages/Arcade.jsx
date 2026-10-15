import arcadeLogo from '../assets/arcade1.png'
import arcadeHero from '../assets/arcade2.jpg'

const features = [
  {
    title: 'Unlimited access',
    description: <>to 200+ incredibly fun games,<br />with more added all the time.</>,
  },
  {
    title: 'Play across your Apple devices.',
    description: 'And get immersed on Apple Vision Pro.',
  },
  {
    title: 'No ads.',
    description: <>No interruptions.<br />No in-app purchases.</>,
  },
  {
    title: 'Online or offline,',
    description: 'games are always at your fingertips.',
  },
  {
    title: 'Share your subscription',
    description: 'with up to five family members.',
  },
]

const offers = [
  {
    label: 'Free 1-month trial',
    title: '$6.99',
    suffix: '/mo.',
    description:
      'After the free trial, get unlimited access to 200+ games for the price of one premium game each month.',
    action: 'Try it free',
  },
  {
    label: 'Free 1-month trial',
    title: 'Apple One',
    description:
      'Bundle Apple Arcade with up to five other great services for one low monthly price. And enjoy more for less.',
    action: 'Try Apple One free',
  },
  {
    label: 'Buy an Apple device',
    title: '3 months free',
    description:
      'Apple Arcade is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.*',
    action: 'Try it free',
  },
]

function Arcade() {
  return (
    <main className="w-full bg-white text-black">
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden md:min-h-[700px]">
        <img
          src={arcadeHero}
          alt="Sonic game artwork"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
          <h1 className="sr-only">Apple Arcade</h1>
          <img
            src={arcadeLogo}
            alt="Apple Arcade"
            className="w-[75%] max-w-[500px] object-contain drop-shadow-2xl"
          />
          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#ff3b30] px-8 py-3 text-base font-medium text-white shadow-2xl transition duration-300 hover:bg-[#e03126] active:scale-95 md:text-lg"
          >
            Try it free
          </button>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-16 px-4 py-20 text-center md:py-28">
        {features.map(({ title, description }) => (
          <div key={title}>
            <h2 className="mb-2 text-3xl font-bold text-[#ff3b30] md:text-5xl">
              {title}
            </h2>
            <p className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              {description}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h2 className="mb-12 flex flex-wrap items-center justify-center gap-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          <span>Look for</span>
          <span aria-label="Arcade controller" role="img" className="text-4xl md:text-6xl">🕹️</span>
          <span>on</span>
          <span aria-label="App Store" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0071e3] text-2xl text-white shadow-lg md:h-16 md:w-16 md:text-4xl">
            A
          </span>
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {offers.map(({ label, title, suffix, description, action }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-gray-50 p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <span className="mb-4 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ff3b30]">
                  {label}
                </span>
                <h3 className="mb-4 flex min-h-12 items-center justify-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                  {title}
                  {suffix && <span className="ml-1 text-lg font-normal text-gray-500">{suffix}</span>}
                </h3>
                <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-gray-600 md:text-base">
                  {description}
                </p>
              </div>
              <button
                type="button"
                className="w-full cursor-pointer rounded-full bg-[#ff3b30] px-6 py-3.5 text-base font-medium text-white shadow-md transition duration-300 hover:bg-[#e03126] hover:shadow-lg active:scale-95"
              >
                {action}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          Action. Adventure. Puzzles.<br />Let the gaming begin.
        </h2>
      </section>
    </main>
  )
}

export default Arcade
