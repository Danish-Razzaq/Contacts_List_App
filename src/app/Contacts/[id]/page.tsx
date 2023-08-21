import { MockContacts } from "@/views";
import Image from "next/image";

const getContacts = (id: number) => {
  return MockContacts.filter((e) => e.id == id);
};

const defaultlname =''

export default function page({ params }: { params: { id: number } }) {
  const result = getContacts(params.id);

  // return (
  <div></div>;
  // );
  return (
    <section className=" flex flex-col  justify-center items-center bg-orange-300 md:p-8 lg:p-8 p-2   ">
      <header className="flex flex-wrap gap-2   container items-center justify-between p-4 border-2 rounded-xl border-gray-500 bg-[#000000d9] mb-3   md:w-[43%] lg:w-[43%] w-full ">
        <span className="text-2xl font-sans "></span>
        <span className="md:text-3xl lg:text-3xl  font-mono font-extrabold text-white ">
          Profile
        </span>
        <span className="md:text-2xl lg:text-2xl font-mono font-bold text-gray-100 hover:text-yellow-300 cursor-pointer ">
          Save
        </span>
      </header>

      <section className=" border-2 shadow-xl md:w-[43%] lg:w-[43%] w-full  rounded-b-xl">
        <ul className=" space-y-1  pb-3 bg-gray-200 p-3 rounded-md">
          {result.map((c) => {
            return (
              <>
                <div
                  key={c.id}
                  className="flex flex-col justify-center items-center gap-2 "
                >
                  <h4>
                    <Image
                      src={c.img}
                      alt="img"
                      className="rounded-full w-20 h-20 md:w-32 md:h-32 lg:w-32 lg:h-32"
                    ></Image>
                  </h4>
                  <h1 className="font-bold ">{`${c.fname} ${c.lname || defaultlname}`}</h1>
                  <h2 className="text-slate-400 text-sm font-serif mb-7 -mt-2">{c.age}</h2>
                </div>

                <div className="bg-white  p-3">
                  <form className="flex justify-between gap-3 flex-wrap ">
                    <div>
                      <label htmlFor="fname" className="text-slate-400">
                        First Name
                      </label>
                      <br />
                      <input
                        type="text"
                        id="html"
                        className="w-full sm:w-fit md:w-fit lg:w-fit xl:w-fit flex flex-wrap p-1"
                        value={c.fname}
                      />
                    </div>
                    <div>
                      <label htmlFor="lname" className="text-slate-400">
                        Last Name
                      </label>
                      <br />
                      <input
                        type="text"
                        id="lname"
                        className="w-full sm:w-fit md:w-fit lg:w-fit xl:w-fit flex flex-wrap p-1"
                        value={c.lname || defaultlname}
                      />
                    </div>
                  </form>
                  <hr className="m-4" />
                  <div>
                    <label htmlFor="lname" className="text-slate-400">
                      Phone No
                    </label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      className="w-full sm:w-fit md:w-fit lg:w-fit xl:w-fit flex flex-wrap p-1"
                      value={c.phone}
                    />
                  </div>
                  <hr className="m-4" />
                  <div>
                    <label htmlFor="lname" className="text-slate-400">
                      Email
                    </label>
                    <br />

                    <input
                      type="input"
                      id="lname"
                      className="w-full sm:w-fit md:w-fit lg:w-fit xl:w-fit flex flex-wrap p-1"
                      value={`${c.fname
                        .toLocaleLowerCase()
                        .trim()
                        .replace(/\s+/g, " ")}@gmail.com`}
                    />
                  </div>
                  <hr className="m-4" />
                  <div className=" flex justify-between ">
                    <label htmlFor="switch" className="font-bold">
                      Patient Notification
                    </label>
                    <input
                      type="checkbox"
                      role="flipswitch"
                      id="lname"
                      className="w-5 h-5 mr-5  "
                      value={""}
                    />
                  </div>                   <hr className="m-4" />
                  <p className="text-red-600 font-mono">View Terms & Conditions</p>
                </div>
              </>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
