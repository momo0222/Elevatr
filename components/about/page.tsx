import { Avatar,  AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";

interface TeamMember{
    id: string;
    name: string;
    role: string;
    avatar: string
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
            avatar: "https://shadcnblocks.com/images/block/avatar-1.webp"
        },
        {
            id: "person-2",
            name: "Archisha",
            role: "Co-Founder, Developer",
            avatar: "https://shadcnblocks.com/images/block/avatar-2.webp"
        },
        {
            id: "person-3",
            name: "Sriya",
            role: "Public Relations Lead",
            avatar: "https://shadcnblocks.com/images/block/avatar-3.webp"
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
                    </div>
                ))}
            </div>
        </section>
    )
}

export { Team };