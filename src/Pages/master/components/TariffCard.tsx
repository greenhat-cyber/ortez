interface TariffCardProps {
    title: string;
    inpLable1: string;
    inpLable2: string;
    inpLable3: string;
  }
  
  const TariffCard: React.FC<TariffCardProps> = ({ title, inpLable1, inpLable2, inpLable3 }) => {

    return (
        <div className="w-full h-auto  bg-primary-shade3 mt-3 rounded-md border p-2">
            <p className="font-bold">{title}</p>
            <div className="flex gap-4">
                <div className="w-[16%]">
                    <p className="text-sm">{inpLable1}</p>
                    <input placeholder="₹ 5000.00" className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none" />
                </div>
                <div className="w-[16%]">
                    <p className="text-sm">{inpLable2}</p>
                    <input placeholder="₹ 4000.00" className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none" />
                </div>
                <div className="w-[16%]">
                    <p className="text-sm">{inpLable3}</p>
                    <input placeholder="₹ 3000.00" className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none" />
                </div>
            </div>
        </div>
    )
}

export default TariffCard