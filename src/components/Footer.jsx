import Image from "next/image";
import { Aplay, Gplay, logoMain, user2,user3,user4,user5,user6 } from "../../public/as/assets";

export default function Footer(){
    return(

            <section className="flex pt-12 pb-6 bg-main px-6z">
                <div className="container flex flex-col-reverse md:flex-row md:justify-around justify-center items-center py-4 text-w1">
                    <div className="flex flex-col gap-6 text-w1 ml-12">
                      <Image src={logoMain} alt="logo" width={80} height={80} className="" />
                      <div className="flex  gap-4 flex-col sm:flex-row ">
                        <a href="/">Download Now</a>
                        <a href="/">Lincense</a>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center text-w1 gap-4 ">
                        <a href="#">Aboute</a>
                        <a href="#">Feature</a>
                        <a href="#">Pricing</a>
                        <a href="#">Careers</a>
                        <a href="#">Help</a>
                        <a href="#">Privacy Policy</a>

                      </div>
                      <p className="pt-2">@2024 ISTAIX. All rights reserved</p>
                    </div>
                    <div className="flex flex-col  justify-center pb-6 gap-1  md:pt-0">
                        <h1 className="text-t2 text-xl py-6">
                            Get the App
                        </h1>
                        <Image className="py-2" src={Gplay} alt="logo" width={120} height={70}/>
                        <Image className="py-2" src={Aplay} alt="logo" width={120} height={70}/>
                    </div>
                </div>
            </section>
    )
}