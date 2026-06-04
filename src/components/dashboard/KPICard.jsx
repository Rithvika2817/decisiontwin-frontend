function KPICard({
  title,
  value,
  valueColor=""
}) {

  return (

    <div
     className="
  rounded-3xl
  bg-white/5
  p-6
  transition-all
  duration-300
  border
  border-transparent
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:bg-white/10
  hover:border-purple-500/50
  hover:shadow-2xl
  hover:shadow-purple-500/20
"
>

      <p>
        {title}
      </p>

      <h2
        className={`text-4xl ${valueColor}`}
      >
        {value}
      </h2>

    </div>

  );

}

export default KPICard;