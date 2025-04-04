import { Button } from "../ui/button";
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card";

interface Course {
    id: string;
    title: string;
    description: string;
    content: string;
    link: string
}
export default function Class({ course }: { course: Course}){
    return(
        <Card>
            <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {course.content}
                </p>
            </CardContent>
            <CardFooter>
                <a href={course.link} target="_blank">
                    <Button>Sign up here</Button>
                </a>
            </CardFooter>
        </Card>
    );
}