export default function HardTruthCTA() {
return (
<section className="bg-zinc-900 text-white mt-20 py-12 px-8">
    <div className="max-w-7xl mx-auto">
    <h3 className="font-display text-3xl tracking-tight text-center mt-3 mb-12">
        There are several components that are integral for growth:
    </h3>
    <div
        className="relative z-10 grid grid-cols-2 items-baseline text-center whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:whitespace-normal"
        role="tablist"
        aria-orientation="vertical"
    >
        <div className="group flex flex-col gap-y-4 rounded-full px-4 lg:rounded-r-none lg:rounded-l-xl lg:px-5 lg:py-5">
        <h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">
            Coming up with Solutions
        </h3>
        <p className="text-left text-justify text-white mt-2 text-md">
            We tend to get the best results when we're trying to solve a
            specific problem that has been put in front of us. These are
            also the times when we find ourselves learning and growing the
            most. Here, tutorials will, once again, fall short. After all,
            you're just replicating someone else's pre-planned issue, not
            your own.
        </p>
        </div>
        <div className="group flex flex-col gap-y-4 rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:py-5">
        <h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">
            Collaboration
        </h3>
        <p className="text-left text-white text-justify mt-2 text-md">
            Instead of just consuming content from the community,
            collaborate with others,try to take part in community with
            your own code and be helpful. You will gain a sense of pride
            and validation. It gets addictive. Then you will find ways to
            bring more value and grow as a developer.
        </p>
        </div>
        <div className="group flex flex-col gap-y-4 rounded-full px-4 lg:rounded-r-none lg:rounded-l-xl lg:px-5 lg:py-5">
        <h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">
            Solve real-life problems
        </h3>
        <p className="text-left text-justify text-white mt-2 text-md">
            Oftentimes, people will hit a wall, or fall into the dreaded{" "}
            <span className="italic">tutorial hell</span> — and can't seem
            to dig ourselves out. That's why our approach involves
            real-life problems that require thought out solutions.
        </p>
        </div>
        <div className="group flex flex-col gap-y-4 rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:py-5">
        <h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">
            Being part of a community
        </h3>
        <p className="text-left text-white text-justify mt-2 text-md">
            The road to growing as a developer can often feel very lonely,
            especially when you're just starting out. Luckily, Evil Bees
            comes with a built in support system. Whether you need someone
            to help you solve a problem, want to discuss a project idea,
            or just talk about new technologies and things happening in
            the community — someone will be there for you.
        </p>
        </div>
    </div>
    </div>
</section>
  );
}
