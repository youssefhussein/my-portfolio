import Link from "next/link";

export default async function Socials() {
    return (
        <div className={'flex flex-row gap-4 w-screen h-screen'}>
            <Link href={'https://github.com/youssefhussein'}>
                My github
            </Link> <br/>
            <Link href={'https://www.linkedin.com/in/youssef-hussein-230782243/'}>
                LinkedIn
            </Link>
            <Link href={''}>
                LinkedIn
            </Link>

        </div>
    );
}
  