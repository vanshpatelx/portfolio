
import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
// import Link from "next/link";
import Image from "next/image";
import twritter from '../public/images/twritter.png';
import snip from '../public/images/snipurl.png';
import bookmark from '../public/images/bookmark.png';
import better from '../public/images/better.png';
import profilePicture from "../public/images/abcd.jpeg";
import {
    Card,
    CardBody,
    CardGroup,
    CardHeader,
    CardImage
} from "@components/Card";
import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { MotionBTTContainer } from "@components/Motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const projectData = [
    {
        id: "1",
        title: "Cyber Server",
        logo: snip,
        link: "https://github.com/vanshpatelx/cyberServer",
        content: "Creating Seamless and Secure Servers....",
        badgeContent: "Ongoing"
    },
    {
        id: "2",
        title: "Blog AI",
        logo: better,
        link: "https://github.com/vanshpatelx/AutomatedBlogCreationSystemWithApproval",
        content: "Create an automated blog creation system using the Gemini Pro language model and various agents orchestrated by autogen.",
        badgeContent: "Completed"
    },
    {
        id: "3",
        title: "Hashnode SDK",
        logo: twritter,
        link: "https://github.com/vanshpatelx/hashnodeSDK",
        content: "Hashnode SDK is designed to ease the integration of Hashnode's GraphQL API into your projects, making it straightforward to CRUD information.",
        badgeContent: "Completed"
    },
    {
        id: "4",
        title: "Learning Assitant",
        logo: bookmark,
        link: "https://github.com/vanshpatelx/learningAssistant",
        content: "Made interactive custom teaching assistance bot for Any Book. Have to upload your Book and assistant is ready. using Gemini Pro, Langchain, FAISS.",
        badgeContent: "OnGoing"
    },
];

export default function Home() {
    return (
        <Layout>
            <div className="main-wrapper wrap-md grid  px-5  mx-auto">
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>`
                    <SectionContainer className="hero--container flex flex-col gap-5 mt-32">
                        <div className="flex gap-8">
                            <Image
                                src={profilePicture}
                                className=" rounded-full bg-neutral-100 object-cover"
                                width={85}
                                height={85}
                                alt=""
                            />
                            <div className=" mt-[12px]">
                                <h1 className="text-xl lg:text-xl  font-medium  mb-0 text-white">
                                    Hey - I&apos;m Vansh Patel
                                </h1>
                                <span className="text-xl lg:text-xl  font-medium mb-0 text-neutral-400">

                                    Developer
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className=" flex items-center gap-2 bg-neutral-900 w-40 rounded-lg h-10 p-4">
                                <div className="h-3.5 w-3.5 rounded-full bg-emerald-600">
                                    <div className="z-[11] h-3.5 w-3.5 animate-ping rounded-full bg-emerald-600 transition-[4s]" />
                                </div>
                                <div className="text-white subpixel-antialiased font-medium">
                                    Open to work
                                </div>
                            </div>
                            <a href='https://docs.google.com/document/d/11Clj8VPUZoEnRiLK7XPmEAgEdXxydTLYl4S39pv6r4I/edit?usp=sharing' rel="noreferrer" target="_blank" title="Vansh's Resume">
                                <div className=" flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 w-32 rounded-lg h-10 p-4">
                                    <div className="h-3.5 w-3.5 rounded-sm bg-blue-700 border border-white">
                                        <div className="z-[11] h-3.5 w-3.5 rounded-sm bg-blue-700" />
                                    </div>
                                    <div className="text-white subpixel-antialiased font-medium">
                                        Resume
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className=" content tracking-wide text-xl text-neutral-300 md:text-xl font-medium ">
                                I&apos;m a software engineer based in India, with a passion for building solutions that are innovative and problem solving.
                            </div>
                            <div className="buttons-container mt-6 mb-4 flex flex-wrap gap-2">
                                <a href="https://www.linkedin.com/in/vanshpateldev/" rel="noreferrer" className="border border-neutral-700 py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:border-neutral-300 transition-colors duration-300" target="_blank" title="Follow Vansh Patel on LinkedIn">
                                    <FaLinkedinIn className='w-5 h-5' />
                                </a>
                                <a href="https://github.com/vanshpatelx/" rel="noreferrer" className="py-1 border border-neutral-700 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:border-neutral-300 transition-colors duration-300" target="_blank" title="Follow Vansh Patel on Github">
                                    <FaGithub className='w-5 h-5' />
                                </a>
                                <a href="https://twitter.com/vanshdevx/" rel="noreferrer" className="border border-neutral-700 py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:border-neutral-300 transition-colors duration-300" target="_blank" title="Follow Vansh Patel on Twitter">
                                    <Image src="https://img.icons8.com/material-outlined/24/FFFFFF/twitterx--v2.png" alt="twitterx--v1" width='20' height='20' />
                                </a>
                                <a href="mailto:remotevansh@gmail.com" rel="noreferrer" className="border border-neutral-700 py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:border-neutral-300 transition-colors duration-300" target="_blank" title="Send an email to Vansh Patel">
                                    <IoMail className='w-5 h-5' />
                                </a>
                                <a href="https://google.com" rel="noreferrer" target="_blank" className="font-semibold border border-neutral-700 py-[4px] rounded-lg px-2 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:border-neutral-300 transition-colors  duration-300">
                                    Blog
                                </a>
                            </div>
                        </div>
                    </SectionContainer>
                </MotionBTTContainer>

                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <SectionContainer className="projects--container">

                        <h2 className="font-bold text-4xl rounded-full text-left h-9  w-[15rem] text-white my-4 leading-8 tracking-tighter">
                            Major Projects
                        </h2>
                        <CardGroup className="grid scroll-m-24 gap-5 grid-cols-1 md:grid-cols-2 w-full mt-4 ">
                            {projectData.map((project) => (
                                <Card
                                    key={project.id}
                                    className="col-span-1 bg-neutral-900  hover:bg-neutral-800"
                                    link={project.link}
                                    target="_blank"
                                >
                                    <BadgeGroup
                                        className="mb-0 m-6 border border-neutral-600"
                                        alignment="left"
                                    >
                                        <BadgeMessage>
                                            {project.badgeContent}
                                        </BadgeMessage>
                                    </BadgeGroup>
                                    <CardBody>
                                        <CardImage
                                            src={project.logo}
                                            alt="banner"
                                            imageClassName="absolute top-0 right-0 m-6 p-2 bg-white rounded-3xl border border-neutral-700"
                                            width={80}
                                            height={80}
                                        />
                                        <div className="card-content absolute bottom-8 left-6 right-6">
                                            <CardHeader className="text-white font-bold">
                                                {project.title}
                                            </CardHeader>
                                            <div className="content break-words text-2xl font-medium leading-10 tracking-tight lg:tracking-tighter text-neutral-500 ">
                                                <p>{project.content}</p>
                                            </div>
                                        </div>

                                    </CardBody>
                                
                                </Card>
                            ))}
                        </CardGroup>
                    </SectionContainer>
                </MotionBTTContainer>
            </div>

        </Layout>
    );
}
