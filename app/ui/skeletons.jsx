// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  export function WelcomeUserSkeleton() {
    return (
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-black p-2 shadow-sm`}
      >
        <h1 className="text-2xl md:text-4xl font-bold">
      Welcome,
    </h1>
        
      </div>
    );
  }