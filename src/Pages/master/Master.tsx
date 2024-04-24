import { IoClose } from "react-icons/io5";
import TariffCard from "./components/TariffCard";

import { IoIosArrowForward } from "react-icons/io";

import { BsBrush } from "react-icons/bs";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";




const Master: React.FC = () => {
    const [fixedTax, setFixedTax] = useState(false);
    const [fixedTax2, setFixedTax2] = useState(false);
    const [ispercentage, setIspercentage] = useState(true);
    const [ispercentage2, setIspercentage2] = useState(true);

    return (
        <div>
            <div className="w-full h-auto border-2 rounded-md mt-4 bg-primary-shade2">
                <div className="w-full h-[3rem] bg-primary rounded-t-md flex items-center justify-between px-4 text-white ">
                    <p>Room Type</p>
                    <IoClose />
                </div>
                <div className="w-full h-[2rem] bg-primary-shade1 flex items-center justify-between px-4 text-accent text-sm">
                    <p>Created by : Amar akber (13/10/2023 10:12)</p>
                    <p>Last Modified by : Omar (20/10/2023 11:20)</p>
                </div>
                <div className="mt-2 px-4">
                    <p className="font-bold">Active Room Count: 8</p>
                    <div className="mt-2 flex gap-4">
                        <div className="w-[40%]">
                            <p className="text-sm">Room Type Name</p>
                            <input
                                placeholder="Name"
                                className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none"
                            />
                        </div>
                        <div className="w-auto">
                            <p className="text-sm">Short Name</p>
                            <input
                                placeholder="Name"
                                className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none"
                            />
                        </div>
                        <div className="w-auto">
                            <p className="text-sm">Pax/Room</p>
                            <input
                                placeholder="3"
                                className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none"
                            />
                        </div>
                    </div>
                    <TariffCard
                        title="Room Tariff"
                        inpLable1="Single"
                        inpLable2="Double"
                        inpLable3="Triple"
                    />
                    <div className="w-full h-[4rem] flex items-center gap-4 px-2 mt-3">
                        <p>Select Room Type Color</p>
                        <div className="color-picker w-[10%] h-[3rem] rounded-md border flex cursor-pointer">
                            <div className="flex items-center justify-center border-r w-[35%]">
                                <BsBrush />
                            </div>
                            <div className="flex items-center justify-center w-[80%]">
                                <p>#545sd54</p>
                            </div>
                        </div>
                        <div className="w-[20%]">
                            <p className="text-sm">Extra Person Limit</p>
                            <input
                                placeholder="1"
                                className="w-full bg-white border rounded-md mt-2 py-1 pl-2 outline-none"
                            />
                        </div>
                    </div>
                    <TariffCard
                        title="Extra Person Tariff"
                        inpLable1="Ex.Person"
                        inpLable2="Ex.Child"
                        inpLable3="Ex.Infant"
                    />
                </div>
                <div className="w-full h-[5rem] bg-primary-shade4 rounded-b mt-3 px-4 py-2">
                    <p className="font-bold">Facility</p>
                    <div className="flex items-center">
                        <div className="flex gap-2 pl-2">
                            <input type="checkbox" className="w-[15px]" name="" id="" />
                            <p>Minibar</p>
                        </div>
                        <div className="flex gap-2 pl-2">
                            <input type="checkbox" className="w-[15px]" name="" id="" />
                            <p>Bath Tub</p>
                        </div>
                        <div className="flex gap-2 pl-2">
                            <input
                                disabled
                                type="checkbox"
                                className="w-[15px]"
                                name=""
                                id=""
                            />
                            <p className="text-gray-400">Cubical Bathroom</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="font-bold mt-2 mb-2">Tax on Tariff</p>
            <div className="w-full h-[40vh] border-2 rounded-md bg-primary-shade2 mb-1">
                <div className="grid grid-flow-col gap-1 p-2">
                    <div className="w-auto h-[3rem] bg-secondary col-span-2">
                        <div className=" h-[3rem] flex items-center justify-center">
                            <p>Name</p>
                        </div>
                        <div className="flex items-start justify-between px-4 mt-2 bg-white h-[29vh]">
                            <p>CGST</p>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <div className="w-auto h-[3rem] bg-secondary col-span-3">
                        <div className=" h-[3rem] flex items-center justify-center">
                            <p>Select Slab Tax or Fixed Tax for Room</p>
                        </div>
                        <div className="bg-white h-[29vh] px-2">
                            <div className="w-full mt-2">
                                <div className="border-primary border w-[30%] h-[2rem] grid grid-cols-2 rounded-md">
                                    <div
                                        className={`${!fixedTax ? "bg-primary text-white" : ""} w-full h-[2rem] rounded-l-md flex items-center justify-center cursor-pointer text-primary`}
                                        onClick={() => setFixedTax(false)}
                                    >
                                        Slab Tax
                                    </div>
                                    <div
                                        className={`${fixedTax ? "bg-primary text-white" : ""} w-full h-[2rem] rounded-r-md flex items-center justify-center cursor-pointer text-primary`}
                                        onClick={() => setFixedTax(true)}
                                    >
                                        Fixed Tax
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex items-end gap-2 mt-2">
                                <div className=" w-[20%] h-auto flex flex-col">
                                    <p className="">From</p>
                                    <input
                                        placeholder="1"
                                        className="bg-white border rounded-md mt-2 py-1 outline-none"
                                    />
                                </div>
                                <div className=" w-[20%] h-auto flex flex-col">
                                    <p className="">To</p>
                                    <input
                                        placeholder="1"
                                        className="bg-white border rounded-md mt-2 py-1 outline-none"
                                    />
                                </div>

                                <div className="w-[30%] rounded-md border flex items-center justify-between h-[2rem]">
                                    <div className="w-[30%] h-full flex border-r">
                                        <div onClick={() => setIspercentage(true)} className={`${ispercentage ? "bg-primary text-white" : ""} w-full h-full rounded-l flex items-center justify-center`}>
                                            <p>%</p>
                                        </div>
                                        <div onClick={() => setIspercentage(false)} className={`${!ispercentage ? "bg-primary text-white" : ""} w-full h-full rounded-r flex items-center justify-center`}>
                                            <p>₹</p>
                                        </div>
                                    </div>
                                    <input placeholder="1" className="w-[50%] outline-none" />
                                </div>
                                <div className="h-auto">
                                    <div className="w-[35px] h-[35px] bg-red-600 flex items-center justify-center rounded-md text-white">
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex items-end gap-2 mt-2">
                                <div className=" w-[20%] h-auto flex flex-col">
                                    <p className="">From</p>
                                    <input
                                        placeholder="1"
                                        className="bg-white border rounded-md mt-2 py-1 outline-none"
                                    />
                                </div>
                                <div className=" w-[20%] h-auto flex flex-col">
                                    <p className="">To</p>
                                    <input
                                        placeholder="1"
                                        className="bg-white border rounded-md mt-2 py-1 outline-none"
                                    />
                                </div>

                                <div className="w-[30%] rounded-md border flex items-center justify-between h-[2rem]">
                                    <div className="w-[30%] h-full flex border-r">
                                        <div onClick={() => setIspercentage2(true)} className={`${ispercentage2 ? "bg-primary text-white" : ""} w-full h-full rounded-l flex items-center justify-center`}>
                                            <p>%</p>
                                        </div>
                                        <div onClick={() => setIspercentage2(false)} className={`${!ispercentage2 ? "bg-primary text-white" : ""} w-full h-full rounded-r flex items-center justify-center`}>
                                            <p>₹</p>
                                        </div>
                                    </div>
                                    <input placeholder="1" className="w-[50%] outline-none" />
                                </div>
                                <div className="h-auto">
                                    <div className="w-[35px] h-[35px] bg-primary flex items-center justify-center rounded-md text-white">
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-[3rem] bg-secondary col-span-5">
                        <div className=" h-[3rem] flex items-center justify-center">
                            <p>Select Slab Tax or Fixed Tax for Extra Bed</p>
                        </div>
                        <div className="bg-white w-full h-[29vh] px-2">
                            <div className="w-full mt-2">
                                <div className="border-primary border w-[50%] h-[2rem] grid grid-cols-2 rounded-md">
                                    <div
                                        className={`${!fixedTax2 ? "bg-primary text-white" : ""} w-full h-[2rem] rounded-l-md flex items-center justify-center cursor-pointer text-primary`}
                                        onClick={() => setFixedTax2(false)}
                                    >
                                        Slab Tax
                                    </div>
                                    <div
                                        className={`${fixedTax2 ? "bg-primary text-white" : ""} w-full h-[2rem] rounded-r-md flex items-center justify-center cursor-pointer text-primary`}
                                        onClick={() => setFixedTax2(true)}
                                    >
                                        Slab Tax
                                    </div>
                                    <div>
                                        <p className="mt-2">Tax Rate</p>
                                        <input
                                            placeholder="1"
                                            className="bg-white border rounded-md mt-2 py-1 outline-none"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-[3rem] bg-secondary col-span-1">
                        <div className="h-[3rem] flex items-center justify-center">
                            <p>Aft Disc</p>
                        </div>
                        <div className="bg-white w-full h-[29vh] px-2 flex items-start justify-center">
                            <input className="mt-8" type="checkbox" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[3rem] mb-3 flex items-center justify-between px-4">
                <div className="flex gap-3">
                    <input type="checkbox" name="" id="" />
                    <p>Active</p>
                </div>
                <div className="flex gap-3">
                    <div className="w-[35px] h-[35px] bg-red-600 flex items-center justify-center rounded-md text-white">
                        <RiDeleteBin6Line />
                    </div>
                    <div className="w-[35px] h-[35px] bg-[#11B45B] flex items-center justify-center rounded-md text-white">
                        <RiEditLine />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Master;
