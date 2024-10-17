"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const voteApi = (response: string) => {
    axios
      .post("http://localhost:5000/api/vote", { vote: response })
      .then((res) => {
        console.log("voteApi----", res);
      })
      .catch((err) => {
        console.log("voteApi---err-", err);
      });
  };

  const messageApi = () => {
    let request = {
      name: name,
      email: email,
      mobileNo: mobileNo,
      message: message,
    };
    axios
      .post("http://localhost:5000/api/contact", request)
      .then((res) => {
        console.log("voteApi----", res);
        setName("");
        setEmail("");
        setMessage("");
        setMobileNo("");
      })
      .catch((err) => {
        console.log("voteApi---err-", err);
      });
  };
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2  bg-[#c4294a] h-full">
        <div className=" h-full px-10 pt-10  md:p-10">
          <p className="mt-10 md:mt-1 text-[30px] xl:text-[50px] md:text-[25px] md:font-bold md:leading-[55px] text-[#edeaea] text-center">
            பாராளுமன்ற தேர்தல் 2024
          </p>
          <p className="text-[20px] md:text-[20px] xl:text-[50px] md:font-bold  text-[#edeaea] text-center">
            யாழ் மாவட்டம்
          </p>

          <div className="col-span-2 pl-5 mt-10 lg:mt-20 xl:mt-10">
            <p className="text-[30px] md:text-[30px] xl:text-[40px] md:font-bold  text-[#edeaea] text-center lg:text-start">
              திரு. உதயகுமாரன் கீர்த்தி
            </p>

            <p className="md:text-[20px] md:font-semibold xl:text-[20px] text-[#edeaea] text-center lg:text-start">
              ( BSC( HONS ) IN SOFTWARE ENGINEERING )
            </p>
          </div>
          <div className="lg:mt-10 grid grid-cols-3 ">
            {/* <div className="col-span-1 lg:hidden">
              <Image
                src="/images/logo.webp"
                alt={"presidnet image"}
                width={150}
                height={150}
              />
            </div>
            <div className="col-span-1 lg:hidden bg-white pt-4">
              <Image
                src="/images/one.png"
                alt={"presidnet image"}
                width={350}
                height={350}
              />
            </div>
            <div className="col-span-1 lg:hidden bg-white p-5">
              <Image
                src="/images/x-image.png"
                alt={"presidnet image"}
                width={350}
                height={350}
              />
            </div> */}
            <div className="col-span-1 hidden lg:block ">
              <Image
                src="/images/logo.webp"
                alt={"presidnet image"}
                width={350}
                height={350}
              />
            </div>
            <div className="col-span-1 hidden lg:block bg-white pt-4 ml-4">
              <Image
                src="/images/one.png"
                alt={"presidnet image"}
                width={350}
                height={350}
              />
            </div>
            <div className="col-span-1 hidden lg:block bg-white p-5 ml-4">
              <Image
                src="/images/x-image.png"
                alt={"presidnet image"}
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full p-10 ">
          <div className=" hidden lg:flex">
            <Image
              src="/images/keerthy.jpeg"
              alt={"presidnet image"}
              width={571}
              height={355}
            />
          </div>
          <div className=" lg:hidden ">
            <Image
              src="/images/keerthy2.jpg"
              alt={"presidnet image"}
              width={500}
              height={355}
              className="w-full "
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-3 ">
          <div className="col-span-1 lg:hidden">
            <Image
              src="/images/logo.webp"
              alt={"presidnet image"}
              width={350}
              height={350}
            />
          </div>
          <div className="col-span-1 lg:hidden bg-white pt-4">
            <Image
              src="/images/one.png"
              alt={"presidnet image"}
              width={350}
              height={350}
            />
          </div>
          <div className="col-span-1 lg:hidden bg-white p-5">
            <Image
              src="/images/x-image.png"
              alt={"presidnet image"}
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>

      <div className=" ">
        <div className=" h-full p-10">
          <p className="md:text-[40px] md:font-bold md:leading-[55px] text-[#680241]">
            நான் யார் ?
          </p>
          <div className="mt-1">
            <p className="md:text-[20px] md:font-normal ">
              நான் எனது ஆரம்பக்ககல்வியை கிளி/புனித திரேசாக்கல்லூரியில் கற்றேன்.
              அங்கு தரம் ஐந்து புலமைப்பரீட்சையில் சித்தியடைந்தேன். தொடர்ந்து
              கிளி/கிளிநொச்சி மகா வித்தியாலயத்தில் இடைநிலைக்கல்வியைத்
              தொடர்;ந்தேன். நாட்டுச் சூழ்நிலை காரணமாக எனது இல்லம் சுபகீர்த்தி,
              இல 76/2, திருவையாறு, கிளிநொச்சி எனும் முகவரியில் இருந்து
              இடம்பெயர்ந்து வவுனியாவில் குடும்பத்துடன் வசித்து வந்த போது
              வவு/விபுலானந்தக் கல்லூரியிலும் கல்வியைத் தொடர்ந்தேன். பின்பு
              யாஃயாழ் இந்துக்கல்லூரியிலும் அதிககாலம் கற்று க.பொ.த. சாதாரண
              தரத்தில் 8ஏ,1சீ பெறுபேற்றினைப் பெற்றேன். ஆங்கில இலக்கியத்தில் “சீ”
              சித்தியினைப் பெற்று உயர்தரம் கணிதப்பிரிவில் கற்றேன். களனிப்
              பல்கலைக்கழகத்திற்குத் தெரிவாகி அங்கு மென்பொருள் பொறியிலாளர்
              பட்டதாரியாக வெளியேறினேன்.
              <br /> <br /> எனது தந்தை திரு. இராசரத்தினம் உதயகுமாரன் மண்டைதீவைப்
              பிறப்பிடமாகக் கொண்டவர். யாழ் குடாநாட்டின் பெரும்பாலான
              தீவுப்பகுதிகளை எனது தந்தையின் பரம்பரை பூர்வீகமாகக் கொண்டது. 32
              வருடங்களிற்கு மேலாக கிளிநொச்சிப் பிராந்தியத்தின் பிறப்பு, இறப்பு
              விவாகப்பதிவாளராகக் கடமையாற்றி வருகின்றார்.
              <br /> <br /> எனது தாயார் திருமதி மீராவதி உதயகுமாரன் (தாதியப்
              பரிபாலகர்) இடைக்காட்டைப் பிறப்பிடமாகக் கொண்டவர். இவர் கிளிநொச்சி
              மாவட்டப் பொது வைத்தியசாலையில் போர்க்காலத்தில் 12ஆண்டுகளுக்கு மேலாக
              கடமையாற்றி போரால் பாதிக்கப்பட்ட மக்களுக்கு தன்னாலான தன்னலமற்ற
              சேவையினை வழங்கியவர். தற்போது தீவகம் ஊர்காவற்துறை ஆதார
              வைத்தியசாலையில் தாதியப் பரிபாலராக கடமையாற்றுகின்றார்.
              <br /> <br /> நான் களனிப்பல்கலைக்கழகத்தில் கல்விகற்ற காலங்களில்
              (N.P.P)யின் கொள்கைகளாலும் செயற்பாடுகளாலும் ஈர்க்கப்பட்டேன்.
              ஆனாலும் அவர்களுடன் இணைந்து கொள்ளவில்லை. 2024 ஐனாதிபதித் தேர்தல்
              அறிவிக்கப்பட்டது. புத்திஐPவிகளும், முற்போக்குச் சிந்தனையாளர்களும்
              இம்முறை அநுரகுமார திசநாயக்கவை தெரிவு செய்ய வேண்டுமென நாட்டுமக்களை
              வழிகாட் டினார்கள். கௌரவ அநுரகுமார திசநாயக்க அவர்கள் இலங்கை
              அரசியற்களத்தில் இளையவர் களையும் ஆற்றல் மிக்கவர்களையும் உள்வாங்கி
              மாற்றம் ஒன்றை விரும்பினார். இலங்கை வாழ் மக்களின் விருப்பமும் இன்று
              அதுவாகவே உள்ளது. கௌரவ ஐனாதிபதி அவர்களின் கொள் கை முன்னெடுப்
              புக்களாலும் அதிரடி அறிவிப் புக்களாலும் நான் மிகவும் கவரப் பட்டேன்.
              அவரது கட்சியில் நான் பங்காளியாகி எனது மக்களுக்கு சேவை செய்ய
              நேர்மையான ஊழலற்ற அரசியற் தரப்பாக (N.P.P) ஐத் தெரிவு செய்து
              இக்கட்சியின் வேட்பாளராக தெரிவு செய்யப்பட்டுள் ளேன்.
            </p>
          </div>
        </div>

        <div className=" h-full p-10">
          <p className="md:text-[40px] md:font-bold md:leading-[55px] text-[#680241]">
            எமது கொள்கைகள்
          </p>
          <div className="mt-1">
            <p className="md:text-[20px] md:font-normal ">
              தமிழ்நாடு அரசின் இ-சேவை வலைதளம் உங்களை அன்புடன் வரவேற்கிறது.
              இவ்வலைதளம் பொதுசேவை மையத்தினை இயக்குபவர்களுக்
            </p>
          </div>
        </div>

        <div className="border-[#680241] border-r-8 border-2 m-10 p-5">
          <p className="md:text-[30px] md:font-bold md:leading-[55px] text-[#680241] text-center">
            நீங்கள் திசைகாட்டிக்கு வாக்களிப்பீர்களா?
          </p>
          <div className="flex content-center justify-center mt-5 ">
            <p
              className="border-[#680241] border-2 px-3 py-1 font-bold rounded-[5px] text-[#680241] text-center hover:text-white hover:bg-[#680241] hover:cursor-pointer"
              onClick={() => voteApi("yes")}
            >
              ஆம்
            </p>
            <div className="w-[20px]" />
            <p
              className="border-[#680241] border-2 px-3 py-1 font-bold rounded-[5px] text-[#680241] text-center hover:text-white hover:bg-[#680241] hover:cursor-pointer"
              onClick={() => voteApi("no")}
            >
              இல்லை
            </p>
          </div>
        </div>

        <div className="m-10 border-2 rounded-lg border-[#680241] p-5 flex flex-col max-w-[400px]">
          <input
            type="name"
            placeholder="Name"
            className=" p-2 outline-none my-2 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className=" p-2 outline-none my-2 "
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className=" p-2 outline-none my-2 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className=" p-2 outline-none my-2 "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
          <p
            className="bg-[#680241] px-5 py-2 rounded-lg w-1/4 text-white text-[12px] cursor-pointer font-bold"
            onClick={() => messageApi()}
          >
            Submit
          </p>
        </div>
      </div>
    </>
  );
}
