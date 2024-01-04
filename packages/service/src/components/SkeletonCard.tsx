const SkeletonCard = () => {
  return (
    <div role="status" className="w-full px-4 py-5 bg-white animate-pulse">
      <div className="flex items-end justify-between w-full">
        <div className="w-16 h-6 rounded bg-slate-400"></div>
        <div className="w-12 h-5 rounded bg-slate-400"></div>
      </div>
      <div className="h-6 mt-1 rounded bg-slate-400 w-96"></div>

      <div className="flex w-full gap-4 mt-2">
        <div className="w-[46px] h-5 bg-slate-400 rounded"></div>
        <div className="w-40 h-5 rounded bg-slate-400"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
