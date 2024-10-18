"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const [voteRequestSuccess, setVoteRequestSuccess] = useState(false);
  const [formRequestSuccess, setFormRequestSuccess] = useState(false);

  const voteApi = (response: string) => {
    axios
      .post("http://localhost:5000/api/vote", { vote: response })
      .then((res) => {
        setVoteRequestSuccess(true);
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
        setFormRequestSuccess(true);
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
              நான் எனது ஆரம்பக்கல்வியை கிளி/புனித திரேசாக்கல்லூரியில் கற்றேன்.
              அங்கு தரம் ஐந்து புலமைப்பரீட்சையில் சித்தியடைந்தேன். தொடர்ந்து
              கிளி/கிளிநொச்சி மகா வித்தியாலயத்தில் இடைநிலைக்கல்வியைத்
              தொடர்ந்தேன். நாட்டுச் சூழ்நிலை காரணமாக எனது இல்லம் சுபகீர்த்தி, இல
              76/2, திருவையாறு, கிளிநொச்சி எனும் முகவரியில் இருந்து
              இடம்பெயர்ந்து வவுனியாவில் குடும்பத்துடன் வசித்து வந்த போது
              வவு/விபுலானந்தக் கல்லூரியிலும் கல்வியைத் தொடர்ந்தேன். பின்பு
              யா/யாழ் இந்துக்கல்லூரியிலும் அதிக காலம் கற்று க.பொ.த. சாதாரண
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
              அறிவிக்கப்பட்டது. புத்திஜீவிகளும், முற்போக்குச் சிந்தனையாளர்களும்
              இம்முறை அநுரகுமார திசநாயக்கவை தெரிவு செய்ய வேண்டுமென நாட்டுமக்களை
              வழிகாட்டினார்கள். கௌரவ அநுரகுமார திசநாயக்க அவர்கள் இலங்கை
              அரசியற்களத்தில் இளையவர்களையும் ஆற்றல் மிக்கவர்களையும் உள்வாங்கி
              மாற்றம் ஒன்றை விரும்பினார். இலங்கை வாழ் மக்களின் விருப்பமும் இன்று
              அதுவாகவே உள்ளது. கௌரவ ஐனாதிபதி அவர்களின் கொள்கை முன்னெடுப்
              புக்களாலும் அதிரடி அறிவிப் புக்களாலும் நான் மிகவும் கவரப் பட்டேன்.
              அவரது கட்சியில் நான் பங்காளியாகி எனது மக்களுக்கு சேவை செய்ய
              நேர்மையான ஊழலற்ற அரசியற் தரப்பாக (N.P.P) ஐத்தெரிவு செய்து
              இக்கட்சியின் வேட்பாளராக தெரிவு செய்யப்பட்டுள்ளேன்.
            </p>
          </div>
        </div>

        <div className=" h-full p-10">
          <p className="md:text-[40px] md:font-bold md:leading-[55px] text-[#680241]">
            எமது கொள்கைகள்
          </p>
          <div className="mt-1">
            <div className="md:text-[20px] md:font-normal ">
              <ol start={1}>
                <br />
                <li>
                  1. முன்னைய ஆட்சியாளர்களால் நன்கு திட்டமிட்டு பிள்ளைகளின்
                  கல்வியை முளையிலே கருக்கும் சிறுவர் பாடசாலையை நிறுவி
                  பயிற்றப்பட்ட ஆசிரியர்களை கொண்டு கற்பித்து ஆசிரியர்களுக்கு வேலை
                  தருநர்களாக நடிக்கும் செயற்பாடுகளிற்கு முற்றுப் புள்ளியிட்டு
                  செயற்பட்டு வரும் ஆசிரியர்களுக்கும் பொருத்தமான பதவிகளை வழங்கி
                  அனைத்து சிறுவர் பாடசாலைகளிலும் நன்கு தேர்ச்சி பெற்ற
                  பயிற்றப்பட்ட ஆசிரியர்களை நியமித்து 11 ஆண்டு கால கல்வி
                  சீரளிவிற்கு உடன் முடிவு காண்பேன்.
                </li>
                <br />
                <li>
                  2. கிளிநொச்சியில் உள்ள அனைத்து குடியிருப்புக்களிலும் காலை-மாலை
                  இரு தடவைகளேனும் பாடசாலையை நோக்கிய “பஸ் சேவை” போக்குவரத்து
                  ஏற்படுத்தி பெற்றோரிடம் மோட்டார் சைக்கிளோ மிதிவண்டியோ இல்லாமல்
                  பாடசாலை செல்லாதுள்ள பிள்ளளைகளின் வாழ்வில் கல்வி ஒளியேற்றுவேன்.
                  தவறான அரசியல் அணுகு முறைகளினால் சொந்த இடங்களிலிருந்து தூரதேச
                  பாடசாலைகளுக்கு செல்லும் ஆசிரியர்களின் நேரத்தையும் உழைப்பையும்
                  சேமித்து மாணவர்கள் மீது அதிக கவனம் செலுத்த வசதியாக அருகாமையில்
                  உள்ள பாடசாலைகளில் கற்பிக்கும் ஒரு பொறிமுறையை ஏற்படுத்த ஆவன
                  செய்வேன்.
                </li>
                <br />
                <li>
                  3. இரணைமடு குளநீர் எமது பிராந்தியத்தின் அனைத்துத்
                  தேவைகளுக்கும் போதுமானதாக இல்லை. இந்நீர்ப் பற்றாக் குறையை
                  நிவர்த்தி செய்ய மகாவலி நீரை அக்குளத்து நீருடன் கலக்க ஆவன
                  செய்வேன். தங்கள் அரசியல் இருப்புக்காக நீர்பாயும் பரப்பெல்லாம்
                  மத்திய அரசுக்கு செந்தம் எனக்கூறி மக்களை நீர்ப்பற்றாக்குறை
                  திண்டாட வைக்கும் பொருத்தமான செயற்பாட்டிற்கு முடிவு கட்ட எமது
                  ஜனாதிபதியுடன் பேசி அவர்கள் காணி பறிப்புக்காக இனவாத அரசினால்
                  ஏற்படுத்தப்பட்ட மகாவலி அபிவிருத்தி அதிகாரசபை சட்டத்தில்
                  திருத்தத்தை ஏற்படுத்தி அதன் பின் மகாவலி நீரை எமது இரணைமடுவில்
                  கலக்க ஏற்பாடு செய்வேன்.
                </li>
                <br />
                <li>
                  4. வெறுமனேயே 3 ஆம் பிட்டியலில் கலக்கும் பாலியாற்றை மறித்து
                  வவுனிக் குளத்திற்கு திசை திருப்புவதன் மூலம் துணுக்காய் மாந்தை
                  கிழக்கு பிரதேசங்களில் அனைத்து வயல் களுக்கும் மூன்று போகமும்
                  விவசாயத்துக்கு ஏற்ற நீரை பெறுவதுடன் மேலதிகமாக வெளியேறும் நீரை
                  அக்கராயன் வள்ளேரி குளங்களுடன் இணைந்து பயிர்ச் செய்கையை
                  மேம்படுத்தினால் இலங்கைப் பொருளாதாரத்தையே மேம்படுத்தலாம்
                </li>
                <br />
                <li>
                  5. வட்டக்கச்சி விவசாயப் பண்ணை இன்னமும் முழுமையாக
                  விடுவிக்கப்பட்வில்லை . அதை விடுவித்து விவசாய ஆராய்ச்சி
                  நிலையத்துடன் கூடிய விதை தானியங்களை உற்பத்தி செய்கின்ற இடமாக
                  மாற்றி அதில் விவசாயிகளுக்கு குறுகிய கால பயிற்சியும்
                  இளைஞர்களுக்கு நீண்ட காலப் பயிற்சியையும் வழங்கக் கூடிய (முன்பு
                  போல்) ஒரு பயிற்சிப் பாடசாலையை அமைத்து விவசாயிகள் புதிய
                  உத்திளைக் கையாளவும் உச்சப் பயனைப் பெறவும் ஆவண செய்வேன்.
                </li>
                <br />
                <li>
                  6. அத்துடன் மந்தை வளர்ப்பில் முன்னிற்கும் இம்மாவட்டத்தின்
                  மந்தை வளர்பாளர்கள் குறைந்த எண்ணிக்கையில் கூடிய பயனைப் பெற
                  வசதியாக பண்ணையில் விலங்கு ஆராய்ச்சி நிறுவனத்தை நிறுவி உச்சப்
                  பயன் பெற்று விவசாய மக்கள் வாழ ஆவன செய்வேன். அத்துடன்
                  மாவட்டத்திலுள்ள அனைத்து மேய்ச்சல் தரவைகளையும் இனங்கண்டு அரச
                  செலவில் புல்லைப் பயிரிட்டு வளமான தரைவையை உருவாக்குவேன்.
                </li>
                <br />
                <li>
                  7. ஏற்று நீர்ப்பாசன வசதியிலிருந்தும் போதிய நிலமிருந்தும் உப
                  உணவு உற்பத்திக்குப் போதிய சந்தை வாய்ப்பில்லாத காரணத்தால்
                  இளைஞர்கன் விவசாயத்தை கைவிட்டு வெளிநாடு செல்கின்றனர். இச்
                  செயற்பாட்டை கிளி/யாழ் மாவட்டங்களில் நிறுத்த ஏற்றுமதித்
                  தரத்திலான உப உணவு உற்பத்தியைச் செய்து கிளிநொச்சி விமானத் தனம்
                  உடனாக மரக்கறிகளை வெளிநாடுகளிற்கு ஏற்றுமதி செய்யவும் உப உணவுப்
                  பொருட்களிற்கு உச்ச விலையைப் பெற்று விவசாயிகளை முன்னேற்றுவதுடன்
                  இலங்கையின் தேசிய வருமானமும் அதிகரிக்க ஆவன செய்வேன்.
                </li>
                <br />
                <li>
                  8. பருவ காலங்களில் பனை செளித்து காணப்படும் பிரதேசங்களில்
                  உற்பத்தியாகும் கன்னை நவீன தொழில் நுட்பத்துடன் கூடிய
                  தொழ்ற்சாலையை அமைத்து தகரத்தில் அடைக்கப்பட்ட கன்னை உலகம்
                  முழுவதும் ஏற்றுமதி செய்ய ஆவன செய்து கன் உற்பத்தியாளர்கள்
                  வாழ்வில் உயர்வை ஏற்படுத்துவேன். அத்துடன் பனை வளமும் கடல்
                  வளமும் எமது சொத்து கடல் தெழிலாளர்கள் முழுமையாகப் பெற வசதியாக
                  முல்லைத்தீவிலோ மன்னாரிலோ மீன் பிடிக்கற்கை நெறி தொடர்பான
                  பல்கலைக்கழகம் ஒன்றை அமைக்க ஆவன செய்வேன்.
                </li>
                <br />
                <li>
                  9. காரைநகரில் யுத்தத்திற்கு முன்னர் சிலோன் நோர்வே கூட்டு
                  முயற்சியால் வன்னங்களை உற்பத்தி செய்யவும் கடலுணவை ஏற்றுமதி
                  செய்யவும் சீநோர் என்று நிறுவனம் இயங்கி வந்தது. தற்போது
                  அந்நிறுவனம் இருந்த இடம் மட்டுமே உள்ளது. அவ்விடத்தில்
                  முன்புபோல் ஒரு தொழிற்சாலையை நிறுவி முன்னைய செயற்பாட்டை உடன்
                  தொடர் ஆவன செய்து ஏறத்தாழ 1000 பேருக்கு வேலை வாய்ப்பை
                  வழங்குவதுடன் கடலுணவு உற்பத்திகளை வெளிநாடுகளிற்கு
                  அனுப்புவதற்குரிய ஏற்பாடுகளை உடன் செய்வேன் காரை நகரில்
                  குடிப்பதற்கு நீர் இல்லை என்பதை நான் அறிவேன். காரைநகர் மக்கள்
                  தங்கு தடை இன்றி சுத்தமான குடிநீரை பெற வசதியாக சோலர் பவுருடன்
                  கூடிய கடல் நீர் சுத்திகரிப்பு நிலையமொன்றை நிறுவி குடி நீர்
                  தட்டுப்பாட்டை நிவர்த்தி செய்வேன்.
                </li>
                <br />
                <li>
                  10. அனைத்து வளமும் கொண்ட மாதிரிக் கிராமமாக மாற்றி மக்கள்
                  வாழ்வில் ஒளியேற்றுவேன் அனைத்து தீவகங்களையும் காலப்போக்கில்
                  மாதிரி தீவகங்களாக மாற்றி திவக மக்கள் வாழ்வை மேம்படுத்துவேன்.
                  அனலைதீவு மீனவர்கள் ஐஸ் இல்லாத காரணத்தினால் மலிவு விலையில் மீன்
                  விற்பனை செய்து வருகின்றமை. அனலைதீவு மக்கள் மடடுமல்ல அயல் தீவு
                  மக்களும் பயன் பெற ஐஸ் தொழிற்சாலையை அனலைதீவில் நிறுவ ஆவன
                  செய்வேன்.
                </li>
                <br />
                <li>
                  11. இத்தனை செயற்றிட்டங்களையும் செய்யவுள்ள நான் அரசியல்
                  கைதிகளின் இரத்தக் கண்ணீரை நன்கு உணர்வேன். என்னால் 40
                  நிமிடங்கள் கூட வகுப்பறையில் இருக்க முடிவதில்லை. 15 தொடக்கம் 20
                  வருடங்களாக சிறையில் உள்ள உங்கள் நிலவரத்தை நான் அறிவேன். எனது
                  இலக்கு தங்களிற்கு சாதகமாக சட்டத்தின் எல்லை வரை சென்று தங்களை
                  உடன் விடுவிக்க முயற்சி செய்வேன்.
                </li>
                <br />
                <li>
                  12. போரின் போது படை வரம் ஆக்கப்பட்ட அனைத்துக் காணிகளையும் உடன்
                  விடுவிக்க ஆவன செய்வதுடன் நத்தை வேகத்தில் நடக்கும் காணி
                  விடுவிப்பு முயற்சிகளை குதிரை வேகத்திற்கு மாற்றி அங்கு விவசாய
                  கடல் வள உற்பத்திகளை உடன் பெருக்கி மக்கள் வாழ்வில்
                  ஒளியேற்றுவேன்.
                </li>
                <br />
                <li>
                  13. நான் வீரவசனம் பேச வாய் சவடால் மன்னனல்ல நான் மேலே
                  குறிப்பிட்ட திட்டங்களை எனது கட்சியும் ஏற்றுக் கொள்ளும். நான்
                  வெல்வது உறுதி சொன்னதைச் செய்வேன் செய்வதைச் சொல்வேன் . தேசிய
                  மக்கள் சக்தியிற்கு வாக்களியுங்கள். உங்கள் வளமான வாழ்விற்கு
                  நீங்களே வழி அமையுங்கள்.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="border-[#680241] border-r-8 border-2 m-10 p-5">
          <p className="md:text-[30px] md:font-bold md:leading-[55px] text-[#680241] text-center">
            நீங்கள் திசைகாட்டிக்கு வாக்களிப்பீர்களா?
          </p>
          {!voteRequestSuccess ? (
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
          ) : (
            <p className="border-[#680241]  px-3 py-1 font-bold rounded-[5px] text-[#680241] text-center hover:text-white hover:bg-[#680241] hover:cursor-pointer">
              உங்கள் பதிலுக்கு நன்றி!
            </p>
          )}
        </div>

        <div className="m-10 border-2 rounded-lg border-[#680241] p-5 flex flex-col max-w-[400px]">
          <input
            type="name"
            placeholder="Name"
            className=" p-2 outline-none my-2 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className=" p-2 outline-none my-2 text-black"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className=" p-2 outline-none my-2 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className=" p-2 outline-none my-2 text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
          <p
            className="bg-[#680241] px-5 py-2 rounded-lg w-full text-center text-white text-[12px] cursor-pointer font-bold"
            onClick={() => {
              if (!formRequestSuccess) {
                messageApi();
              }
            }}
          >
            {formRequestSuccess
              ? "Thank you! We have received your response."
              : "Submit"}
          </p>
        </div>
      </div>
    </>
  );
}
