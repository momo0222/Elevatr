
import { classes } from "@/data/classes";
import { Navbar1 } from "@/components/navbar/page";
import Class from "@/components/classes/class";
export default function Home(){
    return(
        <div className="mx-6 my-4">
      <Navbar1/>
      <div className="grid gap-4">
        {classes.map((cls) => (
            <Class key={cls.id} course={cls}/>
        ))}
      
      </div>
      
    </div>
    );
}