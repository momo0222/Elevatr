

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    heading: string;
    description: string;
    buttons?:{
        primary?: {
            text: string;
            url: string
        };
        secondary?: {
            text: string;
            url: string;
        }
    }
    image: {
        src: string;
        alt: string;
    };
}

const Hero = ({
    heading = "Elevating Young Coders to Explore and Create",
    description = "Providing resources and instruction all those who wish to learn how to code, starting from scratch",
    buttons = {
        primary: {
            text: "See what we have done",
            url: "#"
        },
        secondary: {
            text: "Get started",
            url: "#"
        },
        
    },
    image ={
        src: "/hero2.jpg",
        alt: "Hero image with pixelated computers"
    }
}: Partial<HeroProps>) => {

    return(
        <section className="py-32">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">{heading}</h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">{description}</p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href={buttons.secondary.url}>
                                        {buttons.secondary?.text}
                                        <ArrowRight className="size-4" />
                                    </a>
                                </Button>
                            )}
                            
                        </div>
                    </div>
                    <div className="flex justify-center">
                            <img src={image.src}
                            alt={image.alt}
                            className="object-cover w-full max-w-sm rounded-lg sm:h-96 lg:animate-[bounce_2s_ease-in-out_infinite]"/>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export {Hero};