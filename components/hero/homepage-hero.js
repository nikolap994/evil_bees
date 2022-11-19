import Typewriter from 'typewriter-effect';

export default function HomepageHero() {
  return (
    <section className="relative overflow-hidden py-32 text-white bg-geo-pattern bg-repeat animate-rtl-linear-infinite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="z-10 p-4 max-w-4xl bg-black-opacity font-display text-6xl font-medium tracking-tight text-left">
          Lack the drive to level up as a developer? You’re in the right place!
        </h1>
		<div className="bg-black-opacity p-4 mx-auto lg:mx-0 mt-16 max-w-2xl text-2xl tracking-tight lg:text-left">
		<Typewriter
			options={{
				strings: ['Make learning, levelling up fun and interactive!'],
				autoStart: true,
				loop: true,
			}}
		/>
		</div>
      </div>
    </section>
  );
}
