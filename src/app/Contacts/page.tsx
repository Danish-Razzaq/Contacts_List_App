import { MockContacts } from "@/views";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Image from "next/image";
import Link from "next/link";



const defaultlname =''
export default function Contacts() {
  return (
    <section className=" flex flex-col  justify-center items-center bg-orange-300 md:p-8 lg:p-8 p-2 h-full w-full   ">
      <header className="flex flex-wrap gap-2   container items-center justify-between p-4 border-2 rounded-xl border-gray-500 bg-[#000000d9] mb-3   md:w-[43%] lg:w-[43%] w-full ">
        <span className="text-2xl font-sans "></span>
        <span className="md:text-3xl lg:text-3xl  font-mono font-extrabold text-white ">Conversation</span>
        <span className="md:text-2xl lg:text-2xl font-mono font-bold text-gray-100 hover:text-yellow-300 cursor-pointer ">+ADD</span>
      </header>

      <nav className="bg-slate-300 shadow-lg md:w-[43%] lg:w-[43%] w-full   rounded-t-xl ">
        <ul className=" flex flex-wrap gap-2  items-center p-4  justify-between">
          <li className="cursor-pointer  md:text-xl max-lg:xl text-sm  hover:border-red-500  hover:border-b-4  "> Provider</li>
          <li className="cursor-pointer md:text-xl max-lg:xl text-sm   hover:border-red-500  hover:border-b-4 ">Contacts</li>
          <li className="cursor-pointer  md:text-xl max-lg:xl text-sm  hover:border-red-500  hover:border-b-4 ">Keyboard</li>
        </ul>
      </nav>

      <section className="border-2 shadow-xl md:w-[43%] lg:w-[43%] w-full rounded-b-xl">
        <ul className="p-2 space-y-1 bg-gray-100 rounded-md  md:max-h-[450px] lg:max-h-[450px]  max-h-96  overflow-y-scroll">
          {/* <PerfectScrollbar style={{ maxHeight: '15rem' }}> */}
            {MockContacts.map((e) => (
              <li key={e.id} className="border-2 rounded-lg cursor-pointer bg-white scroll-smooth p-3 md:text-xl max-lg:xl text-sm font-bold">
                <Link href={`/Contacts/${e.id}`}>

      

                  <div className="flex items-center flex-wrap space-y-2 justify-between">
                    <div className="flex flex-wrap space-y-2 items-center space-x-4">
                      <Image
                        src={e.img}
                        alt="Image"
                        className="rounded-full w-10 h-10"
                      />
                      <div>
                        {e.fname} {e.lname || defaultlname}
                      </div>
                    </div>
                    <div className="font-mono text-sm text-slate-400">{"8/21/2023"}</div>
                  </div>
                </Link>
              </li>
            ))}
          {/* </PerfectScrollbar> */}
        </ul>
      </section>
    </section>
  );
}
