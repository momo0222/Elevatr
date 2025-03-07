import { Avatar,  AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamMember{
    id: string;
    name: string;
    role: string;
    avatar: string
    socials: {
        linkedin?: {
            url: string;
        },
        github?: {
            url: string
        }
    }
}

interface TeamProps{
    heading?: string;
    subheading?: string;
    description?: string;
    members?: TeamMember[];
}

const Team = ({
    heading = "Meet our team",
    subheading = "We're recruiting",
    description = "Learn more about the integral team that makes Elevatr run behind the scenes",
    members = [
        {
            id: "person-1",
            name: "Joy",
            role: "Founder, Developer",
            avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
            socials: {
                linkedin:{
                    url: "https://www.linkedin.com/in/joy-wang-b568a8235/",
                },
                github: {
                    url: "https://github.com/momo0222"
                }
            }
        },
        {
            id: "person-2",
            name: "Archisha",
            role: "Co-Founder, Developer",
            avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
            socials: {
                linkedin:{
                    url: "https://www.linkedin.com/in/archisha-anshuman-73bab6305/",
                },
                github: {
                    url: "https://github.com/arch5099"
                }
            }
            
        },
        {
            id: "person-3",
            name: "Sriya",
            role: "Public Relations Lead",
            avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
            socials: {
                linkedin:{
                    url: "#",
                },
                github: {
                    url: "#"
                }
            }
        }
    ]
}: TeamProps) => {
    return(
        <section className="py-32">
            <div className="container flex flex-col items-center justify-center">
                <p className="semibold">{subheading}</p>
                <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
                    {heading}
                </h2>
                <p className="mb-8 text-muted-foreground max-w-3xl lg:text-xl">
                    {description}
                </p>
            </div>
            <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {members.map((person) => (
                    <div key={person.id} className="flex flex-col items-center">
                       <Avatar className="mb-4 size-20 border rounded-full md:mb-5 lg:size-24"> 
                            <AvatarImage className="rounded-full" src={person.avatar}/>
                            <AvatarFallback>{person.name} </AvatarFallback>
                       </Avatar>
                       <p className="text-center font-medium">{person.name}</p>
                       <p className="text-center text-muted-foreground">{person.role}</p>
                       <div className="flex mt-2 gap-x-2 lg:mt-3 items-center justify-center">
                            {person.socials.linkedin && (
                                <a className="text-blue-700 hover:text-blue-500" href={person.socials.linkedin.url} target="_blank">
                                <FaLinkedin className="text-2xl " />
                            </a>
                            )}
                            {person.socials.github && (
                                <a className="text-purple-700 hover:text-purple-500" href={person.socials.github.url} target="_blank">
                                <FaGithub className="text-2xl" />
                            </a>
                            )}
                        </div>
                       
                    </div>
                ))}
            </div>
        </section>
    )
}

export { Team };